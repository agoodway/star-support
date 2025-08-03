# Star Support Demo

This is a demonstration of the [Star Support](https://github.com/agoodway/star-support) AI-powered documentation assistant widget, integrated with a fork of the official Astro documentation site.

## About This Demo

- **Based on**: Fork of the [Astro Docs Starlight site](https://github.com/withastro/docs)
- **Modified**: Removed all non-English language content to simplify the demo
- **Purpose**: Showcase Star Support widget capabilities with real documentation content

## What is Star Support?

Star Support is a TypeScript widget library for creating AI-powered question and support bots that understand your documentation content. It uses a simplified RAG (Retrieval-Augmented Generation) approach:

- **Pre-built Index**: A build script generates AI-powered summaries of each document
- **Smart Document Selection**: AI selects the most relevant documents per query
- **Framework Agnostic**: Works with any web application
- **Vercel AI SDK**: Uses Fireworks AI provider by default (can be modified for other providers)

## Quick Start

```bash
git clone https://github.com/agoodway/star-support-demo
cd star-support-demo
pnpm install
cp .env.example .env
# Configure your AI_API_KEY in .env

# Build the widget first (required)
cd widget && npm install && npm run build && cd ..
cp -r widget/dist/* public/widget/dist/

# Generate the search index
pnpm run build-star-support-index

# Start the dev server
pnpm run dev
```

Visit `http://localhost:4321` to see the Star Support widget in action on the Astro documentation.

## Configuration

Set environment variables in `.env`:

```bash
# AI Provider (Required)
AI_API_KEY="fw_your_fireworks_api_key"
AI_MODEL_NAME="accounts/fireworks/models/llama-v3p1-8b-instruct"

# Widget Security (Recommended to prevent API abuse)
STAR_SUPPORT_AUTH_KEY="your_secret_key"

# Search Configuration (Optional)
MAX_SEARCH_RESULTS="4"  # Number of documents to use for answers (default: 4)

# Content Path Configuration (Required)
CONTENT_PATH="src/content/docs/en"  # Base path where your content files are located
```

## Demo Features

### Try These Questions

Test the AI assistant with these documentation-focused questions:

1. **"How do I add TypeScript to my Astro project?"**
2. **"What's the difference between .astro and .md files?"**
3. **"How do I fetch data from an API in Astro?"**
4. **"Can I use React components in Astro?"**
5. **"How do I set up environment variables?"**
6. **"What's the best way to handle images in Astro?"**
7. **"How do I enable server-side rendering?"**
8. **"How do I deploy my Astro site to Vercel?"**
9. **"How do I create dynamic routes?"**
10. **"What are Astro integrations and how do I install them?"**
11. **"How do I use content collections for my blog?"**
12. **"How do I optimize my Astro site for SEO?"**

### Widget Integration

The widget is integrated in the site footer (`src/components/starlight/Footer.astro`):

```astro
<star-support
  api-base-url=""
  auth-key={import.meta.env.STAR_SUPPORT_AUTH_KEY || ''}
  theme="auto"
  position="bottom-right"
  welcome-message="Hi! How can I help you with Astro today?"
  bot-name="Astro AI"
  header-title="Astro Chat"
  topic-context="Astro framework documentation - help users understand and use the Astro web framework"
  suggested-questions={JSON.stringify([
    "How do I install Astro on my Mac?", 
    "Where can I deploy my Astro app?", 
    "Can I use React components with Astro?"
  ])}>
</star-support>
```

## Architecture

This demo uses Astro's Pages API to serve the chat backend, but the Star Support widget is designed to work with any backend that implements the required API interface. You can use Node.js, Python, Elixir, or any other server technology as long as it provides the expected endpoints and response format.

```
star-support-demo/
├── widget/                     # Star Support widget library (future npm package)
│   ├── src/
│   │   ├── star-support.ts    # Main widget class
│   │   ├── icons.ts           # SVG icon definitions
│   │   ├── types.ts           # TypeScript interfaces
│   │   └── styles.css         # Widget styles
│   ├── dist/                  # Built files (generated)
│   ├── build.js              # Custom bundler script
│   └── package.json          # Widget package configuration
├── src/pages/api/star-support/
│   └── chat.ts               # Chat API endpoint (Astro Pages API)
├── scripts/
│   └── build-index.mjs       # Documentation indexer
└── public/
    ├── star-support-index.json  # Generated search index
    └── widget/dist/            # Widget files served to browser
```

## Development

### Building the Widget

**Note**: The Star Support widget is currently bundled with this demo but will be published as a standalone npm package in the future.

To build the widget locally:

```bash
# Install widget dependencies (only needed once)
cd widget && npm install && cd ..

# Build and copy widget to public directory
cd widget && npm run build && cd ..
cp -r widget/dist/* public/widget/dist/
```

### Widget Build Process

The widget uses a custom build script (`widget/build.js`) that:
1. Compiles TypeScript to JavaScript
2. Bundles all imports (icons, styles) into a single file
3. Outputs browser-ready ES modules

This bundling approach avoids module resolution issues when serving the widget as static files.

### Regenerating the Documentation Index

```bash
pnpm run build-star-support-index
```

### Running the Demo

```bash
pnpm run dev
```

### Common Development Tasks

1. **Modify widget code**: Edit files in `widget/src/`, then rebuild:
   ```bash
   cd widget && npm run build && cd ..
   cp -r widget/dist/* public/widget/dist/
   ```

2. **Update documentation index**: After changing content:
   ```bash
   pnpm run build-star-support-index
   ```

3. **Test API endpoints**: The chat API is available at:
   ```
   POST http://localhost:4321/api/star-support/chat
   ```

## Deployment

The demo is configured for Vercel deployment:

1. Set environment variables in Vercel dashboard
2. Deploy with `git push`

## About the Original Astro Docs

This demo is built on top of the official Astro documentation, which showcases:
- Content collections
- MDX components
- Starlight theme
- Multi-language support (removed in this demo)

For the original Astro documentation, visit [docs.astro.build](https://docs.astro.build).

## License

- Star Support widget code: See [Star Support repository](https://github.com/agoodway/star-support)
- Astro documentation content: See original [Astro Docs license](https://github.com/withastro/docs)