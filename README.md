# Star Support Demo

This is a demonstration of the [Star Support](https://github.com/agoodway/star-support) AI-powered documentation assistant widget, integrated with a fork of the official Astro documentation site.

## About This Demo

- **Based on**: Fork of the [Astro Docs Starlight site](https://github.com/withastro/docs)
- **Modified**: Removed all non-English language content to simplify the demo
- **Purpose**: Showcase Star Support widget capabilities with real documentation content

## What is Star Support?

Star Support is a TypeScript widget library for creating AI-powered question and support bots that understand your documentation content. It provides:

- **Framework Agnostic**: Works with any web application
- **RAG-Powered**: Retrieval-Augmented Generation using your documentation
- **Smart Document Selection**: AI selects the most relevant documents per query
- **Production Ready**: Security features, responsive design, accessibility support

## Quick Start

```bash
git clone https://github.com/agoodway/star-support-demo
cd star-support-demo
pnpm install
cp .env.example .env
# Configure your AI_API_KEY in .env
pnpm run build-star-support-index
pnpm run dev
```

Visit `http://localhost:4321` to see the Star Support widget in action on the Astro documentation.

## Configuration

Set environment variables in `.env`:

```bash
# AI Provider (Required)
AI_API_KEY="fw_your_fireworks_api_key"
AI_API_BASE="https://api.fireworks.ai/inference/v1"
AI_MODEL_NAME="accounts/fireworks/models/llama-v3p1-8b-instruct"

# Widget Security (Optional)
STAR_SUPPORT_AUTH_KEY="your_secret_key"

# Search Configuration (Optional)
MAX_SEARCH_RESULTS="5"  # Number of documents to use for answers (default: 5)
```

## Demo Features

### Try These Questions

1. **"How do I add TypeScript to my Astro project?"**
2. **"What's the difference between .astro and .md files?"**
3. **"How do I deploy to Vercel?"**
4. **"Can I use React components in Astro?"**
5. **"How do I set up content collections?"**

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
  header-title="Astro Chat">
</star-support>
```

## Architecture

```
star-support-demo/
├── widget/                     # Star Support widget library
│   ├── src/
│   │   ├── star-support.ts    # Main widget class
│   │   ├── types.ts           # TypeScript interfaces
│   │   └── styles.css         # Widget styles
│   └── dist/                  # Built files
├── src/pages/api/star-support/
│   └── chat.ts               # Astro API endpoint
├── scripts/
│   └── build-index.mjs       # Documentation indexer
└── public/
    └── star-support-index.json  # Generated search index
```

## Development

### Building the Widget

```bash
cd widget
pnpm run build
```

### Regenerating the Documentation Index

```bash
pnpm run build-star-support-index
```

### Running the Demo

```bash
pnpm run dev
```

## Deployment

The demo is configured for Vercel deployment:

1. Set environment variables in Vercel dashboard
2. Deploy with `vercel --prod`

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