import { promises as fs } from 'fs';
import path from 'path';
import { generateText } from 'ai';
import { createFireworks } from '@ai-sdk/fireworks';
import fg from 'fast-glob';

// Index Generation Configuration
const INDEX_CONFIG = {
  languages: process.env.INDEX_LANGUAGES?.split(',') || ['en'], // Default to English only
  outputFile: 'public/star-support-index.json',
  batchSize: 5, // Process 5 files at a time
  rateLimitDelay: 1000, // ms between batches
  // Path filtering - generic for any Starlight site
  paths: {
    // If empty, all paths are included by default
    include: process.env.INDEX_INCLUDE_PATHS?.split(',') || [],
    // Paths to explicitly exclude
    exclude: process.env.INDEX_EXCLUDE_PATHS?.split(',') || []
  },
  // URL generation strategy:
  // - 'auto': Detect based on file structure (default)
  // - 'no-locale': Never include language prefix
  // - 'locale-all': Always include language prefix
  urlStrategy: process.env.URL_STRATEGY || 'auto',
  // Summary strategy:
  // - 'brief': 1 sentence summary
  // - 'standard': 2-3 sentences (default)
  // - 'detailed': 3-4 sentences with more technical detail
  summaryStrategy: process.env.SUMMARY_STRATEGY || 'standard'
};

// Default paths for comprehensive content indexing
// Supports both directories (ending with /) and individual files
const DEMO_PATHS = {
  include: [
    // Include all English documentation
    'src/content/docs/en/',
  ],
  exclude: [
    // No exclusions - include everything
  ]
};

// Validate environment variables
if (!process.env.AI_API_KEY) {
  console.error('❌ AI_API_KEY environment variable is required');
  process.exit(1);
}
if (!process.env.AI_MODEL_NAME) {
  console.error('❌ AI_MODEL_NAME environment variable is required');
  process.exit(1);
}

const fireworks = createFireworks({
  apiKey: process.env.AI_API_KEY,
});

// Extract language from file path
function extractLanguage(filePath) {
  const match = filePath.match(/src\/content\/docs\/([a-z]{2}(-[a-z]{2})?)\//);
  return match ? match[1] : 'en';
}

// Extract frontmatter data
function extractFrontmatter(content) {
  const frontmatter = {};
  if (content.startsWith('---')) {
    const lines = content.split('\n');
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === '---') break;
      const match = lines[i].match(/^(\w+):\s*(.+)$/);
      if (match) {
        const [, key, value] = match;
        frontmatter[key] = value.replace(/['"]/g, '').trim();
      }
    }
  }
  return frontmatter;
}

// Generate URL from file path
function generateUrl(filePath, language) {
  const relativePath = filePath
    .replace(/^src\/content\/docs\/[a-z]{2}(-[a-z]{2})?\//, '')
    .replace(/\.(md|mdx)$/, '')
    .replace(/\/index$/, '');
  
  // Check for URL generation strategy from env or use default
  const urlStrategy = process.env.URL_STRATEGY || 'auto';
  
  let url;
  
  if (urlStrategy === 'no-locale') {
    // No language prefix at all
    url = `/${relativePath}/`;
  } else if (urlStrategy === 'locale-all') {
    // Always include language prefix
    url = `/${language}/${relativePath}/`;
  } else {
    // Auto mode - detect based on file structure
    // If docs are organized by language folders, include prefix
    // This is the current Astro docs behavior
    if (filePath.includes(`/docs/${language}/`)) {
      url = `/${language}/${relativePath}/`;
    } else {
      url = `/${relativePath}/`;
    }
  }
  
  // Ensure trailing slash
  return url.endsWith('/') ? url : `${url}/`;
}

// Generate summary using AI
async function generateSummary(content, frontmatter, filePath, retryCount = 0) {
  try {
    // Include frontmatter in the content for summary
    const fullContext = `
Title: ${frontmatter.title || 'Untitled'}
Description: ${frontmatter.description || ''}
${frontmatter.i18nReady === 'true' ? 'Internationalization: Ready' : ''}

Content:
${content.slice(0, 2000)}
`;

    const prompt = `Generate a technical documentation summary following these rules:

1. Start with the main purpose/function (e.g., "Astro components are...")
2. Include specific features, APIs, methods (e.g., "getStaticPaths", "Astro.props")
3. Mention implementation details and use cases
4. Use searchable technical keywords
5. ${INDEX_CONFIG.summaryStrategy === 'brief' ? 'Write a single concise sentence summary' : INDEX_CONFIG.summaryStrategy === 'detailed' ? 'Write a comprehensive 3-4 sentence summary with technical details' : 'Write a comprehensive but concise summary (aim for 2-3 sentences)'}

Document to summarize:
${fullContext}

CRITICAL: Output ONLY the summary text. No thinking, no explanations, no "I need to" or "Let me" phrases. Start directly with the technical content.`;

    const { text } = await generateText({
      model: fireworks(process.env.AI_MODEL_NAME),
      prompt,
      temperature: 0.3,
      maxTokens: INDEX_CONFIG.summaryStrategy === 'brief' ? 100 : INDEX_CONFIG.summaryStrategy === 'detailed' ? 300 : 200, // Adjust based on summary length
    });

    // Clean up any thinking tags or XML from the response
    let cleanText = text.trim();
    
    // Remove common thinking patterns
    cleanText = cleanText.replace(/<think>.*?<\/think>/gs, '');
    cleanText = cleanText.replace(/<summary>.*?<\/summary>/gs, (match) => {
      // Extract content from summary tags if present
      return match.replace(/<\/?summary>/g, '');
    });
    
    // Remove any remaining XML-like tags
    cleanText = cleanText.replace(/<[^>]+>/g, '');
    
    // Clean up extra whitespace
    cleanText = cleanText.replace(/\s+/g, ' ').trim();
    
    // If the text starts with common thinking patterns, extract just the summary
    if (cleanText.toLowerCase().startsWith('okay,') || 
        cleanText.toLowerCase().startsWith('i need to') ||
        cleanText.toLowerCase().startsWith('let me')) {
      // The LLM is including its thinking - this is likely not the actual summary
      console.warn(`⚠️ LLM included thinking process for ${filePath}, retrying...`);
      throw new Error('LLM included thinking process');
    }
    
    // Return the full summary without any truncation
    return cleanText;
  } catch (error) {
    // Retry if LLM included thinking process
    if (error.message === 'LLM included thinking process' && retryCount < 2) {
      console.log(`   🔄 Retrying summary generation (attempt ${retryCount + 2})...`);
      return generateSummary(content, frontmatter, filePath, retryCount + 1);
    }
    
    console.error(`Error generating summary for ${filePath}:`, error);
    // Fallback to description or a generic summary
    if (frontmatter.description) {
      return frontmatter.description;
    }
    return 'Astro documentation page';
  }
}

// Extract keywords from content and path
function extractKeywords(content, filePath, frontmatter) {
  const keywords = new Set();
  
  // Add path-based keywords
  const pathParts = filePath.split('/');
  pathParts.forEach(part => {
    if (part.length > 3 && !part.match(/\.(md|mdx)$/)) {
      keywords.add(part.replace(/-/g, ' '));
    }
  });

  // Add frontmatter categories
  if (frontmatter.category) keywords.add(frontmatter.category);
  if (frontmatter.type) keywords.add(frontmatter.type);

  // Extract from title
  if (frontmatter.title) {
    frontmatter.title.split(/\s+/).forEach(word => {
      if (word.length > 3) keywords.add(word.toLowerCase());
    });
  }

  return Array.from(keywords).slice(0, 8);
}

// Build directory structure from documents
function buildDirectoryStructure(documents) {
  const structure = {};
  
  documents.forEach(doc => {
    const parts = doc.id.split('/');
    let current = structure;
    
    // Build nested structure
    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        // This is a file
        if (!current._files) current._files = [];
        current._files.push({
          name: part,
          title: doc.title,
          id: doc.id
        });
      } else {
        // This is a directory
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    });
  });
  
  return structure;
}

async function buildIndex() {
  console.log('🚀 Building Star Support content index...');
  console.log(`📝 Languages: ${INDEX_CONFIG.languages.join(', ')}`);

  // Apply path filtering
  const pathConfig = INDEX_CONFIG.paths.include.length > 0 ? INDEX_CONFIG.paths : DEMO_PATHS;
  
  // Build glob patterns from include paths
  const globPatterns = [];
  for (const includePath of pathConfig.include) {
    if (includePath.endsWith('/')) {
      // Directory path - add glob pattern
      globPatterns.push(`${includePath}**/*.{md,mdx}`);
    } else {
      // Individual file - add as is
      globPatterns.push(includePath);
    }
  }
  
  // If no patterns specified, search common content locations
  if (globPatterns.length === 0) {
    globPatterns.push(
      'src/content/**/*.{md,mdx}',
      'src/pages/**/*.{md,mdx}'
    );
  }

  console.log('🔍 Searching for content in:', globPatterns);

  // Find all content files
  const allFiles = await fg(globPatterns, {
    cwd: process.cwd(),
    ignore: pathConfig.exclude
  });

  // Filter by language for docs, but include all content from other sources
  const contentFiles = allFiles.filter(file => {
    // If it's in docs folder, apply language filter
    if (file.includes('/docs/')) {
      const lang = extractLanguage(file);
      return INDEX_CONFIG.languages.includes(lang);
    }
    // For non-docs content, include all
    return true;
  });

  console.log(`📚 Found ${contentFiles.length} content files`);

  const indexItems = [];
  let processed = 0;

  // Process in batches
  for (let i = 0; i < contentFiles.length; i += INDEX_CONFIG.batchSize) {
    const batch = contentFiles.slice(i, i + INDEX_CONFIG.batchSize);
    
    await Promise.all(batch.map(async (filePath) => {
      processed++;
      console.log(`Processing (${processed}/${contentFiles.length}): ${filePath}`);

      try {
        // Read file content
        const fullPath = path.join(process.cwd(), filePath);
        const fileContent = await fs.readFile(fullPath, 'utf-8');
        
        // Extract frontmatter
        const frontmatter = extractFrontmatter(fileContent);
        
        // Extract content without frontmatter
        let content = fileContent;
        if (content.startsWith('---')) {
          const endIndex = content.indexOf('---', 3);
          if (endIndex !== -1) {
            content = content.slice(endIndex + 3).trim();
          }
        }

        // Extract language
        const language = extractLanguage(filePath);

        // Generate summary
        const summary = await generateSummary(content, frontmatter, filePath);

        // Extract keywords
        const keywords = extractKeywords(content, filePath, frontmatter);

        // Generate ID from path
        const id = filePath
          .replace(/^src\/content\/docs\/[a-z]{2}(-[a-z]{2})?\//, '')
          .replace(/\.(md|mdx)$/, '');

        // Create index item
        const indexItem = {
          id,
          language,
          title: frontmatter.title || id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          summary,
          url: generateUrl(filePath, language),
          keywords,
          type: frontmatter.type || 'guide',
        };

        indexItems.push(indexItem);

      } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
      }
    }));

    // Rate limiting between batches
    if (i + INDEX_CONFIG.batchSize < contentFiles.length) {
      console.log(`⏳ Rate limiting pause (${INDEX_CONFIG.rateLimitDelay}ms)...`);
      await new Promise(resolve => setTimeout(resolve, INDEX_CONFIG.rateLimitDelay));
    }
  }

  // Sort by title for consistency
  indexItems.sort((a, b) => a.title.localeCompare(b.title));

  // Directory structure removed - redundant with document IDs
  // const directoryStructure = buildDirectoryStructure(indexItems);

  // Save the index
  const outputPath = path.join(process.cwd(), INDEX_CONFIG.outputFile);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  
  const index = {
    version: '2.0',
    generated: new Date().toISOString(),
    languages: INDEX_CONFIG.languages,
    count: indexItems.length,
    metadata: {
      urlStrategy: INDEX_CONFIG.urlStrategy,
      baseUrl: process.env.BASE_URL || null,
      summaryStrategy: INDEX_CONFIG.summaryStrategy
    },
    documents: indexItems
  };

  await fs.writeFile(outputPath, JSON.stringify(index, null, 2));

  console.log(`\n✅ Index built successfully!`);
  console.log(`   📄 Output: ${outputPath}`);
  console.log(`   📊 Total documents: ${indexItems.length}`);
  console.log(`   🌐 Languages: ${INDEX_CONFIG.languages.join(', ')}`);
  console.log(`   💾 File size: ${(JSON.stringify(index).length / 1024).toFixed(1)} KB`);
}

// Run the script
buildIndex().catch(console.error);