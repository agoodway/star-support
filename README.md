# Star Support: AI-Powered Documentation Assistant

**A TypeScript widget library for creating AI-powered question and support bots that understand your Astro content.**

> **Note**: This is a fork of the [official Astro documentation repository](https://github.com/withastro/docs) used to demonstrate the Star Support widget and AI chat functionality. The widget and backend components have not yet been extracted into a standalone library.

Star Support provides a framework-agnostic chat widget that can be embedded anywhere while leveraging Astro's content collection system for intelligent document retrieval and AI-powered responses.

## Quick Start (Demo Application)

This repository includes a complete Astro documentation site demonstrating Star Support integration.

```bash
git clone https://github.com/your-repo/star-support
cd star-support
pnpm install
cp .env.example .env
# Configure your AI_API_KEY in .env
pnpm run build-star-support-index
pnpm run dev
```

The demo site runs at `http://localhost:4321` with the Star Support widget enabled.

## Star Support Library

### Core Features

- **Framework Agnostic**: TypeScript widget works with any web application
- **RAG-Powered**: Retrieval-Augmented Generation using your documentation
- **Smart Document Selection**: AI selects 1-8 most relevant documents per query
- **Security First**: XSS prevention, input sanitization, optional authentication
- **Production Ready**: Error boundaries, responsive design, accessibility support

### Architecture

```
star-support/
├── widget/                 # TypeScript widget library
│   ├── src/
│   │   ├── star-support.ts    # Main widget class
│   │   ├── types.ts           # TypeScript interfaces
│   │   └── styles.css         # Widget styles
│   └── dist/               # Built files
├── src/pages/api/star-support/
│   └── chat.ts            # Astro API endpoint
├── scripts/
│   └── build-index.mjs    # Documentation indexer
└── public/
    └── star-support-index.json  # Generated search index
```

## Installation Options

### Option 1: Embed in Astro Site

```astro
---
// src/components/Footer.astro
---
<star-support
  api-base-url={Astro.url.origin}
  auth-key={import.meta.env.STAR_SUPPORT_AUTH_KEY || ''}
  theme="auto"
  position="bottom-right"
  welcome-message="Hi! How can I help you with the documentation?"
  bot-name="AI Assistant"
  header-title="Documentation Chat"
/>

<script>
  import '/widget/dist/star-support.js';
</script>
```

### Option 2: External Site Integration

```html
<!-- In any web application -->
<script type="module">
  import 'https://your-docs-site.com/widget/dist/star-support.js'
</script>

<star-support 
  api-base-url="https://your-docs-site.com"
  theme="dark"
  position="bottom-right">
</star-support>
```

## Documentation Index Generation

### Basic Usage

```bash
pnpm run build-star-support-index
```

### Configuration Options

Set environment variables in `.env`:

```bash
# AI Provider (Required)
AI_API_KEY="fw_your_fireworks_api_key"
AI_API_BASE="https://api.fireworks.ai/inference/v1"
AI_MODEL_NAME="accounts/fireworks/models/llama-v3p1-8b-instruct"

# Widget Security (Optional)
STAR_SUPPORT_AUTH_KEY="your_secret_key"

# Index Generation (Optional)
INDEX_LANGUAGES="en"  # Comma-separated
INDEX_INCLUDE_PATHS=""  # Specific paths only
INDEX_EXCLUDE_PATHS=""  # Paths to exclude
SUMMARY_STRATEGY="standard"  # brief, standard, detailed

# URL Configuration (Optional)
URL_STRATEGY="auto"  # auto, no-locale, locale-all
BASE_URL=""  # For external widget usage
```

### Advanced Index Configuration

#### Target Specific Documentation Sections
```bash
INDEX_INCLUDE_PATHS="src/content/docs/en/guides,src/content/docs/en/reference"
```

#### Exclude Internal Documentation
```bash
INDEX_EXCLUDE_PATHS="src/content/docs/en/internal,src/content/docs/en/drafts"
```

#### Optimize for Different Use Cases
```bash
# Comprehensive documentation (default)
SUMMARY_STRATEGY="standard"

# Smaller indexes
SUMMARY_STRATEGY="brief"

# Technical depth
SUMMARY_STRATEGY="detailed"
```

## AI Provider Configuration

### Fireworks AI (Recommended)

Fireworks AI with Llama 3.1 8B provides excellent performance for documentation tasks:

```bash
AI_API_KEY="fw_your_api_key"
AI_API_BASE="https://api.fireworks.ai/inference/v1"
AI_MODEL_NAME="accounts/fireworks/models/llama-v3p1-8b-instruct"
```

### Alternative Providers

The system can be adapted for other providers by modifying the AI integration in `/src/pages/api/star-support/chat.ts`:

#### OpenAI Integration
```typescript
import { openai } from '@ai-sdk/openai';

const response = await generateText({
  model: openai('gpt-4'),
  prompt: buildPromptWithContext(message, context)
});
```

#### Anthropic Integration
```typescript
import { anthropic } from '@ai-sdk/anthropic';

const response = await generateText({
  model: anthropic('claude-3-sonnet-20240229'),
  prompt: buildPromptWithContext(message, context)
});
```

## Widget Configuration

### TypeScript Interface

```typescript
interface StarSupportConfig {
  api: {
    baseUrl: string
    authKey?: string
  }
  ui?: {
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
    theme?: 'light' | 'dark' | 'auto'
    buttonIcon?: string
  }
  behavior?: {
    welcomeMessage?: string
    headerTitle?: string
    botName?: string
  }
}
```

### Web Component Attributes

```html
<star-support
  api-base-url="https://docs.example.com"
  auth-key="optional-secret"
  theme="auto"
  position="bottom-right"
  welcome-message="How can I help?"
  bot-name="Assistant"
  header-title="Support Chat"
  button-icon="robotWhite">
</star-support>
```

## Example Queries

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

## Deployment

### Vercel
The project includes Vercel adapter configuration:
- Set `AI_API_KEY` and `STAR_SUPPORT_AUTH_KEY` in Vercel environment variables
- The site URL is automatically detected from Vercel's environment
- API routes remain server-side while pages are statically generated

## Production Configuration

### Security Recommendations

```bash
# Use authentication for external sites
STAR_SUPPORT_AUTH_KEY="strong-random-key"

# Configure CORS for specific domains  
STAR_SUPPORT_CORS_ORIGIN="https://yourapp.com"
```


## Development

### Running This Demo Site

```bash
pnpm install
pnpm run dev
```

### Building the Widget

```bash
cd widget
pnpm run build
```

### Regenerating Index

```bash
pnpm run build-star-support-index
```

## Contributing

This project demonstrates AI-powered documentation assistance. The widget library can be extracted and used independently in any web application that needs intelligent document-based Q&A capabilities.

For larger contributions, please open an issue first to discuss your proposed changes.

