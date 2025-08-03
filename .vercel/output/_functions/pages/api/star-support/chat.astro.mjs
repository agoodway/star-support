import { generateText } from 'ai';
import { createFireworks } from '@ai-sdk/fireworks';
import { promises } from 'fs';
import path from 'path';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const fireworks = createFireworks({
  apiKey: process.env.AI_API_KEY || "fw_3ZZT5UhvA91Hc15wMrSp3ryh"
});
let indexCache = null;
let indexLoadTime = 0;
const INDEX_CACHE_DURATION = 5 * 60 * 1e3;
async function loadIndex() {
  const now = Date.now();
  if (indexCache && now - indexLoadTime < INDEX_CACHE_DURATION) {
    return indexCache;
  }
  try {
    const indexPath = path.join(process.cwd(), "public", "star-support-index.json");
    const indexContent = await promises.readFile(indexPath, "utf-8");
    indexCache = JSON.parse(indexContent);
    indexLoadTime = now;
    return indexCache;
  } catch (error) {
    console.error("❌ Failed to load index:", error);
    return null;
  }
}
async function loadDocContent(docId) {
  try {
    const sanitizedDocId = docId.replace(/\.\./g, "").replace(/^[\/\\]/, "").replace(/[\/\\]/g, path.sep);
    if (sanitizedDocId.includes("..") || path.isAbsolute(sanitizedDocId)) {
      console.error(`⚠️ Suspicious doc ID detected: ${docId}`);
      return null;
    }
    const basePath = path.join(process.cwd(), "src", "content", "docs", "en");
    const filePath = path.join(basePath, `${sanitizedDocId}.mdx`);
    const resolvedPath = path.resolve(filePath);
    const resolvedBase = path.resolve(basePath);
    if (!resolvedPath.startsWith(resolvedBase)) {
      console.error(`⚠️ Path traversal attempt detected: ${docId}`);
      return null;
    }
    const content = await promises.readFile(filePath, "utf-8");
    let cleanContent = content;
    if (content.startsWith("---")) {
      const endIndex = content.indexOf("---", 3);
      if (endIndex !== -1) {
        const frontmatter = content.slice(0, endIndex + 3);
        cleanContent = content.slice(endIndex + 3).trim();
      }
    }
    const importRegex = /^import\s+.*?from\s+['"].*?['"](;)?$/gm;
    const importsRemoved = cleanContent.match(importRegex);
    if (importsRemoved) {
      cleanContent = cleanContent.replace(importRegex, "").trim();
    }
    cleanContent = cleanContent.replace(/<Since\s+v="[^"]+"\s*\/>/g, "").replace(/<Badge[^>]*>([^<]*)<\/Badge>/g, "$1").replace(/<ReadMore[^>]*>([^<]*)<\/ReadMore>/g, "$1").replace(/<FileTree>.*?<\/FileTree>/gs, "[File tree structure]").replace(/<CardGrid>.*?<\/CardGrid>/gs, "[Card grid content]");
    return cleanContent;
  } catch (error) {
    console.error(`❌ Failed to load doc content for ${docId}:`, error);
    try {
      const mdPath = path.join(process.cwd(), "src", "content", "docs", "en", `${docId}.md`);
      const content = await promises.readFile(mdPath, "utf-8");
      return content;
    } catch {
      return null;
    }
  }
}
const POST = async ({ request }) => {
  try {
    const authKey = process.env.STAR_SUPPORT_AUTH_KEY || "to-the-stars-12345";
    if (authKey) {
      const providedKey = request.headers.get("x-auth-key");
      if (!providedKey || providedKey !== authKey) {
        return new Response(
          JSON.stringify({ error: "Unauthorized" }),
          { status: 401, headers: { "Content-Type": "application/json" } }
        );
      }
    }
    let body;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { message } = body;
    if (!message || typeof message !== "string") {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const modelName = process.env.AI_MODEL_NAME || "accounts/fireworks/models/llama-v3p1-8b-instruct";
    if (!modelName) ;
    const index = await loadIndex();
    let context = "";
    let selectedDocs = [];
    if (index) {
      const indexSummary = index.documents.map((doc) => ({
        id: doc.id,
        title: doc.title,
        summary: doc.summary,
        keywords: doc.keywords.join(", ")
      }));
      const selectionPrompt = `You are a documentation assistant. Based on the user's question and the available documentation index below, select the most relevant documents to answer their question.

Available Documentation:
${JSON.stringify(indexSummary, null, 2)}

User Question: "${message}"

Instructions:
1. Analyze the user's question to understand what they're asking about
2. Review the document titles, summaries, and keywords
3. Select 1-8 most relevant documents that would help answer the question
4. Return ONLY a JSON array of document IDs - no explanation, no other text

Your response must be ONLY the JSON array, like this:
["basics/astro-components", "guides/routing"]

DO NOT include any other text before or after the JSON array.`;
      try {
        const { text: selectionText } = await generateText({
          model: fireworks(modelName),
          prompt: selectionPrompt,
          temperature: 0.1,
          // Low temperature for consistent JSON output
          maxTokens: 200
        });
        try {
          const jsonMatch = selectionText.match(/\[\s*["'][^\]]+\]/s);
          if (jsonMatch) {
            selectedDocs = JSON.parse(jsonMatch[0]);
          } else {
            const cleanedSelection = selectionText.trim().replace(/^```json\s*/, "").replace(/\s*```$/, "").replace(/^```\s*/, "").replace(/\s*```$/, "");
            selectedDocs = JSON.parse(cleanedSelection);
          }
          if (!Array.isArray(selectedDocs)) {
            selectedDocs = [];
          }
        } catch (parseError) {
          console.error("Failed to parse LLM selection:", parseError);
          console.error("Raw response was:", selectionText);
          selectedDocs = [];
        }
      } catch (selectionError) {
        console.error("LLM selection failed:", selectionError);
        selectedDocs = [];
      }
      if (selectedDocs.length > 0) {
        const docContents = await Promise.all(
          selectedDocs.map(async (docId) => {
            const doc = index.documents.find((d) => d.id === docId);
            if (!doc) {
              return null;
            }
            const content = await loadDocContent(docId);
            if (content) {
              return `## ${doc.title}
URL: ${doc.url}

${content}

---
`;
            }
            return null;
          })
        );
        const validContents = docContents.filter(Boolean);
        if (validContents.length > 0) {
          context = `Here is relevant Astro documentation to help answer the user's question:

${validContents.join("\n")}`;
          validContents.forEach((content, i) => {
            if (content) {
              const preview = content.substring(0, 500).replace(/\n/g, " ");
            }
          });
        }
      } else {
      }
    } else {
    }
    const systemPrompt = `You are an AI assistant for Astro documentation. Help users with their Astro-related questions.
${context ? "\nUse the provided documentation context to give accurate, helpful answers. Reference specific sections when relevant." : ""}

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
- Use inline code for key syntax: \`import Layout from './Layout.astro'\`
- Break down multi-line code into steps
- Example: "First, add the import statement \`import Layout from '../layouts/Layout.astro'\` at the top. Then wrap your content in \`<Layout>..content..</Layout>\`"

Be conversational and guide users step-by-step without showing full code blocks.`;
    const fullPrompt = context ? `${systemPrompt}

Context:
${context}

User Question: ${message}` : `${systemPrompt}

User Question: ${message}`;
    const { text } = await generateText({
      model: fireworks(modelName),
      prompt: fullPrompt,
      temperature: 0.7,
      maxTokens: 1e3
    });
    let cleanedText = text;
    cleanedText = cleanedText.replace(/(?:Here's an example.*?:|.*?example of.*?:)?\s*```[\s\S]*?```/gi, "");
    cleanedText = cleanedText.replace(/\[Code example:.*?\]/g, "");
    cleanedText = cleanedText.replace(/\n{3,}/g, "\n\n");
    cleanedText = cleanedText.replace(/``/g, "`");
    cleanedText = cleanedText.replace(/^#{1,6}\s+(.+)$/gm, "**$1**");
    cleanedText = cleanedText.trim();
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");
    const isExternal = origin && !origin.includes(host || "localhost");
    const sources = selectedDocs.map((docId) => {
      const doc = index?.documents.find((d) => d.id === docId);
      if (!doc) return null;
      let url = doc.url;
      if (index.metadata?.baseUrl) {
        const baseUrl = index.metadata.baseUrl.replace(/\/$/, "");
        const docUrl = doc.url.startsWith("/") ? doc.url : `/${doc.url}`;
        url = `${baseUrl}${docUrl}`;
      } else if (isExternal) {
        const protocol = request.headers.get("x-forwarded-proto") || "https";
        const requestHost = host || "localhost:4321";
        url = `${protocol}://${requestHost}${doc.url}`;
      }
      return {
        title: doc.title,
        url
      };
    }).filter(Boolean);
    const uniqueSources = sources.filter(
      (source, index2, self) => index2 === self.findIndex((s) => s.url === source.url)
    );
    const corsOrigin = process.env.STAR_SUPPORT_CORS_ORIGIN || undefined                                         || "*";
    const corsHeaders = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": corsOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-auth-key",
      "Access-Control-Allow-Credentials": "true"
    };
    return new Response(
      JSON.stringify({
        content: cleanedText,
        sources: uniqueSources.length > 0 ? uniqueSources : void 0
      }),
      {
        status: 200,
        headers: corsHeaders
      }
    );
  } catch (error) {
    console.error("❌ Chat API error:", error);
    return new Response(
      JSON.stringify({ error: `Failed to process message: ${error instanceof Error ? error.message : String(error)}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
const OPTIONS = () => {
  const corsOrigin = process.env.STAR_SUPPORT_CORS_ORIGIN || undefined                                         || "*";
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": corsOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-auth-key",
      "Access-Control-Allow-Credentials": "true"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  OPTIONS,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
