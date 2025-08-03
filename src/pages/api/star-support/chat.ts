import type { APIRoute } from 'astro'
import { generateText } from 'ai'
import { createFireworks } from '@ai-sdk/fireworks'
import { promises as fs } from 'fs'
import path from 'path'

export const prerender = false

const fireworks = createFireworks({
  apiKey: process.env.AI_API_KEY || import.meta.env.AI_API_KEY || '',
})

// Load the index once at startup
let indexCache: any = null;
let indexLoadTime = 0;
const INDEX_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function loadIndex() {
  const now = Date.now();
  
  // Use cache if it's fresh
  if (indexCache && (now - indexLoadTime) < INDEX_CACHE_DURATION) {
    return indexCache;
  }
  
  try {
    const indexPath = path.join(process.cwd(), 'public', 'star-support-index.json');
    const indexContent = await fs.readFile(indexPath, 'utf-8');
    indexCache = JSON.parse(indexContent);
    indexLoadTime = now;
    return indexCache;
  } catch (error) {
    console.error('❌ Failed to load index:', error);
    return null;
  }
}

// Load documentation content
async function loadDocContent(docId: string): Promise<string | null> {
  try {
    // Use the configured content path - no defaults, no assumptions
    const contentPath = process.env.CONTENT_PATH;
    if (!contentPath) {
      console.error('CONTENT_PATH environment variable is not set');
      return null;
    }
    
    // For now, we expect a single base path where the indexed content lives
    // The docId already contains the relative path from that base
    const filePath = path.join(process.cwd(), contentPath, `${docId}.mdx`);
    
    // Validate path is within project
    const resolvedPath = path.resolve(filePath);
    const projectBase = path.resolve(process.cwd());
    if (!resolvedPath.startsWith(projectBase)) {
      return null;
    }
    
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Remove frontmatter
    let cleanContent = content;
    if (content.startsWith('---')) {
      const endIndex = content.indexOf('---', 3);
      if (endIndex !== -1) {
        cleanContent = content.slice(endIndex + 3).trim();
      }
    }
    
    // Remove MDX imports (they appear at the top after frontmatter)
    const importRegex = /^import\s+.*?from\s+['"].*?['"](;)?$/gm;
    const importsRemoved = cleanContent.match(importRegex);
    if (importsRemoved) {
      cleanContent = cleanContent.replace(importRegex, '').trim();
    }
    
    // Remove JSX components that won't make sense in plain markdown context
    // Keep the content but remove the JSX tags
    cleanContent = cleanContent
      .replace(/<Since\s+v="[^"]+"\s*\/>/g, '')
      .replace(/<Badge[^>]*>([^<]*)<\/Badge>/g, '$1')
      .replace(/<ReadMore[^>]*>([^<]*)<\/ReadMore>/g, '$1')
      .replace(/<FileTree>.*?<\/FileTree>/gs, '[File tree structure]')
      .replace(/<CardGrid>.*?<\/CardGrid>/gs, '[Card grid content]');
    
    return cleanContent;
  } catch (error) {
    console.error(`❌ Failed to load doc content for ${docId}:`, error);
    return null;
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    
    // Check authentication if AUTH_KEY is configured
    const authKey = process.env.STAR_SUPPORT_AUTH_KEY || import.meta.env.STAR_SUPPORT_AUTH_KEY;
    if (authKey) {
      const providedKey = request.headers.get('x-auth-key');
      if (!providedKey || providedKey !== authKey) {
        return new Response(
          JSON.stringify({ error: 'Unauthorized' }),
          { status: 401, headers: { 'Content-Type': 'application/json' } }
        )
      }
    }
    
    let body
    try {
      body = await request.json()
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    const { message } = body
    if (!message || typeof message !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }


    const modelName = process.env.AI_MODEL_NAME || import.meta.env.AI_MODEL_NAME
    if (!modelName) {
      throw new Error('AI_MODEL_NAME environment variable is not set');
    }

    // Get max search results configuration
    const maxSearchResults = parseInt(process.env.MAX_SEARCH_RESULTS || import.meta.env.MAX_SEARCH_RESULTS || '4', 10);

    // Load the full index
    const index = await loadIndex();
    
    let context = '';
    let selectedDocs: string[] = [];
    
    if (index) {
      // Create a simplified index for the LLM to analyze
      const indexSummary = index.documents.map((doc: any) => ({
        id: doc.id,
        title: doc.title,
        summary: doc.summary,
        keywords: doc.keywords.join(', ')
      }));

      // Directory structure removed - redundant noise

      // First, ask the LLM to select relevant documents
      const selectionPrompt = `You are a documentation assistant. Based on the user's question and the available documentation index below, select the most relevant documents to answer their question.

Available Documentation:
${JSON.stringify(indexSummary, null, 2)}

User Question: "${message}"

Instructions:
1. Analyze the user's question to understand what they're asking about
2. Review the document titles, summaries, and keywords
3. Select up to ${maxSearchResults} most relevant documents that would help answer the question (prefer fewer documents if possible)
4. Return ONLY a JSON array of document IDs - no explanation, no other text

Your response must be ONLY the JSON array, like this:
["getting-started", "guides/overview"]

DO NOT include any other text before or after the JSON array.`;

      
      try {
        const { text: selectionText } = await generateText({
          model: fireworks(modelName),
          prompt: selectionPrompt,
          temperature: 0.1, // Low temperature for consistent JSON output
          maxOutputTokens: 200,
        });


        // Parse the selected document IDs
        try {
          // First try to extract a JSON array pattern from the response
          const jsonMatch = selectionText.match(/\[\s*["'][^\]]+\]/s);
          
          if (jsonMatch) {
            // Found a JSON array in the response
            selectedDocs = JSON.parse(jsonMatch[0]);
          } else {
            // No array pattern found, try cleaning and parsing the whole response
            // This handles cases where LLM wraps response in markdown code blocks
            const cleanedSelection = selectionText.trim()
              .replace(/^```json\s*/, '')
              .replace(/\s*```$/, '')
              .replace(/^```\s*/, '')
              .replace(/\s*```$/, '');
            
            selectedDocs = JSON.parse(cleanedSelection);
          }
          
          if (!Array.isArray(selectedDocs)) {
            selectedDocs = [];
          }
          
          // Remove duplicates from selectedDocs
          selectedDocs = [...new Set(selectedDocs)];

        } catch (parseError) {
          console.error('Failed to parse LLM selection:', parseError);
          console.error('Raw response was:', selectionText);
          selectedDocs = [];
        }
      } catch (selectionError) {
        console.error('LLM selection failed:', selectionError);
        selectedDocs = [];
      }

      // Load content for selected documents (in parallel for better performance)
      if (selectedDocs.length > 0) {
        const docContents = await Promise.all(
          selectedDocs.map(async (docId: string) => {
            const doc = index.documents.find((d: any) => d.id === docId);
            if (!doc) {
              return null;
            }
            
            const content = await loadDocContent(docId);
            if (content) {
              return `## ${doc.title}\nURL: ${doc.url}\n\n${content}\n\n---\n`;
            }
            return null;
          })
        );
        
        const validContents = docContents.filter(Boolean);
        if (validContents.length > 0) {
          context = `Here is relevant documentation to help answer the user's question:\n\n${validContents.join('\n')}`;
        }
      }
    }

    // Build the final prompt
    const systemPrompt = `You are an AI assistant that helps users with questions about the documentation, product features, troubleshooting, and general support.
${context ? '\nUse the provided documentation context to give accurate, helpful answers. Reference specific sections when relevant.' : ''}

IMPORTANT: Only use information from the provided documentation context. If the context doesn't contain relevant information, say "I don't have information about that in the documentation." Never make up information not mentioned in the context.

CRITICAL CONSTRAINT: The chat widget CANNOT display code blocks. You must adapt your response accordingly.

ALLOWED formatting:
- **bold text**
- *italic text*
- \`inline code\` (short snippets only)
- [link text](url)
- Plain text lists with dashes (-)

FORBIDDEN:
- Triple backticks (\`\`\`)
- Code blocks of any kind
- Headers (#, ##, etc)
- HTML tags

For code examples:
- Describe the code conceptually
- Use inline code for key syntax: \`import Component from './Component.js'\`
- Break down multi-line code into steps
- Example: "First, add the import statement \`import Layout from '../layouts/Layout.astro'\` at the top. Then wrap your content in \`<Layout>..content..</Layout>\`"
- Always wrap commands, file names, and code snippets in backticks like \`npm install\`, \`astro.config.mjs\`, or \`import Layout from './Layout.astro'\`

Be conversational and guide users step-by-step without showing full code blocks.`;

    const fullPrompt = context 
      ? `${systemPrompt}\n\nContext:\n${context}\n\nUser Question: ${message}`
      : `${systemPrompt}\n\nUser Question: ${message}`;

    
    const { text } = await generateText({
      model: fireworks(modelName),
      prompt: fullPrompt,
      temperature: 0.4,
      maxOutputTokens: 1000,
    })


    // Post-process to remove any code blocks that slipped through
    let cleanedText = text;
    
    // Remove triple backtick code blocks and surrounding context
    cleanedText = cleanedText.replace(/(?:Here's an example.*?:|.*?example of.*?:)?\s*```[\s\S]*?```/gi, '');
    
    // Remove standalone references to code examples that were removed
    cleanedText = cleanedText.replace(/\[Code example:.*?\]/g, '');
    
    // Clean up any double line breaks left behind
    cleanedText = cleanedText.replace(/\n{3,}/g, '\n\n');
    
    // Remove any remaining double backticks
    cleanedText = cleanedText.replace(/``/g, '`');
    
    // Ensure no headers made it through
    cleanedText = cleanedText.replace(/^#{1,6}\s+(.+)$/gm, '**$1**');
    
    // Clean up any trailing/leading whitespace
    cleanedText = cleanedText.trim();
    

    // Prepare sources for the response
    // Check if request is from external site
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    
    // Determine if we need to provide full URLs
    const isExternal = origin && !origin.includes(host || 'localhost');
    
    const sources = selectedDocs.map(docId => {
      const doc = index?.documents.find((d: any) => d.id === docId);
      if (!doc) return null;
      
      let url = doc.url;
      
      // Always use full URLs when BASE_URL is configured
      if (index.metadata?.baseUrl) {
        // Ensure no double slashes
        const baseUrl = index.metadata.baseUrl.replace(/\/$/, '');
        const docUrl = doc.url.startsWith('/') ? doc.url : `/${doc.url}`;
        url = `${baseUrl}${docUrl}`;
      } else if (isExternal) {
        // For external requests without BASE_URL, try to construct from request
        const protocol = request.headers.get('x-forwarded-proto') || 'https';
        const requestHost = host || 'localhost:4321';
        url = `${protocol}://${requestHost}${doc.url}`;
      }
      
      return {
        title: doc.title,
        url
      };
    }).filter(Boolean);

    // Remove duplicate sources based on URL
    const uniqueSources = sources.filter((source, index, self) => 
      source && index === self.findIndex(s => s && s.url === source.url)
    );

    // Configure CORS based on environment variables
    const corsOrigin = process.env.STAR_SUPPORT_CORS_ORIGIN || import.meta.env.STAR_SUPPORT_CORS_ORIGIN || '*';
    const corsHeaders = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-auth-key',
      'Access-Control-Allow-Credentials': 'true'
    };
    
    return new Response(
      JSON.stringify({ 
        content: cleanedText,
        sources: uniqueSources.length > 0 ? uniqueSources : undefined
      }),
      {
        status: 200,
        headers: corsHeaders
      }
    )
  } catch (error) {
    console.error('❌ Chat API error:', error)
    return new Response(
      JSON.stringify({ error: `Failed to process message: ${error instanceof Error ? error.message : String(error)}` }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

export const OPTIONS: APIRoute = () => {
  // Configure CORS based on environment variables
  const corsOrigin = process.env.STAR_SUPPORT_CORS_ORIGIN || import.meta.env.STAR_SUPPORT_CORS_ORIGIN || '*';
  
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-auth-key',
      'Access-Control-Allow-Credentials': 'true'
    }
  })
}