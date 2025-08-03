# Star Support Widget

A framework-agnostic TypeScript chat widget for AI-powered documentation assistance.

## Installation

### Option 1: Local Development

```bash
cd widget
pnpm install
pnpm run build
```

Include the built files and configure the widget:

```html
<script type="module" src="./dist/star-support.js"></script>
<link rel="stylesheet" href="./dist/styles.css">

<star-support 
  api-base-url="https://your-api-server.com"
  auth-key="your-optional-auth-key"
  theme="light"
  position="bottom-right">
</star-support>
```

### Option 2: Direct Import

```html
<script type="module">
  import 'https://your-docs-site.com/widget/dist/star-support.js'
</script>

<star-support 
  api-base-url="https://your-api-server.com"
  auth-key="your-optional-auth-key"
  theme="auto"
  position="bottom-right">
</star-support>
```

### Option 3: Astro Integration

```astro
---
// src/components/Footer.astro
---
<star-support
  auth-key={import.meta.env.STAR_SUPPORT_AUTH_KEY || ''}
  theme="auto"
  position="bottom-right"
  welcome-message="Hi! How can I help you?"
  bot-name="AI Assistant"
  header-title="Documentation Chat"
/>

<script>
  import '/widget/dist/star-support.js';
</script>
```

## Usage

### Basic HTML

```html
<star-support 
  api-base-url="https://your-api-server.com"
  theme="light"
  position="bottom-right">
</star-support>
```

Note: `api-base-url` defaults to current origin if not specified.

### Configuration Attributes

```html
<star-support
  api-base-url="https://api.example.com"
  auth-key="optional-secret-key"
  theme="auto"
  position="bottom-right"
  welcome-message="How can I help you today?"
  bot-name="AI Assistant"
  header-title="Support Chat"
  button-icon="robotWhite">
</star-support>
```

## TypeScript Configuration

```typescript
import { StarSupport } from './star-support';

const widget = new StarSupport({
  api: {
    baseUrl: 'https://your-api-server.com',
    authKey: 'optional-key',
    endpoints: {
      chat: '/api/chat',
      config: '/api/config',
      feedback: '/api/feedback'
    }
  },
  ui: {
    theme: 'auto',
    position: 'bottom-right',
    buttonIcon: 'robotWhite',
    colors: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      background: '#ffffff',
      text: '#1e293b'
    }
  },
  behavior: {
    welcomeMessage: 'Hi! How can I help?',
    headerTitle: 'Support Chat',
    botName: 'AI Assistant',
    placeholderText: 'Type your message...'
  }
});
```

## API Requirements

The widget expects your API to implement these endpoints:

### POST /api/chat

Send a chat message and receive an AI response.

```bash
curl -X POST https://your-api-server.com/api/chat \
  -H "Content-Type: application/json" \
  -H "x-auth-key: your-optional-auth-key" \
  -d '{
    "message": "How do I add TypeScript to my project?"
  }'
```

**Request Body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `message` | string | Yes | User's question text |

**Response (200 OK):**
```json
{
  "content": "To add TypeScript to your project, install the @astrojs/ts-config integration...",
  "sources": [
    {
      "title": "TypeScript Guide", 
      "url": "https://docs.example.com/guides/typescript/"
    }
  ]
}
```

**Response Fields:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `content` | string | Yes | AI response with simple markdown |
| `sources` | array | No | Related documentation links |

**Error Response (400/401/500):**
```json
{
  "error": "Error message describing what went wrong"
}
```

### CORS Configuration

When embedding the widget on external sites (different domain from your API), you need to configure CORS headers on your API server to allow cross-origin requests.

**Required CORS headers:**
```http
Access-Control-Allow-Origin: https://yourapp.com
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, x-auth-key
Access-Control-Allow-Credentials: true
```

**Example response headers:**
```javascript
// In your API response
response.setHeader('Access-Control-Allow-Origin', 'https://yourapp.com');
response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
response.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-auth-key');
response.setHeader('Access-Control-Allow-Credentials', 'true');
```

For development, you can use `'*'` for the origin, but production should specify exact domains for security.

## Markdown Support

The widget supports a limited subset of markdown for security and display compatibility:

**Allowed formatting:**
- **bold text** (`**text**`)
- *italic text* (`*text*`)
- `inline code` (single backticks only)
- [links](url) (`[text](url)`)
- Line breaks and paragraphs

**NOT supported:**
- Code blocks (triple backticks)
- Headers (#, ##, etc)
- HTML tags
- Tables
- Images

The widget automatically sanitizes responses to ensure proper display.

## Security Features

The widget includes several security features:

### Input Sanitization
- XSS prevention through content sanitization
- Removal of script tags and event handlers
- Message length limits (1000 characters)

### Authentication
Optional authentication via `auth-key` attribute:

```html
<star-support 
  api-base-url="https://api.example.com"
  auth-key="your-secret-key">
</star-support>
```

The auth key is sent as `x-auth-key` header with API requests.

### CORS Configuration
For production deployments embedding the widget on external sites:

```javascript
// API server configuration
const corsOrigin = process.env.STAR_SUPPORT_CORS_ORIGIN || '*';
response.setHeader('Access-Control-Allow-Origin', corsOrigin);
```

**Security recommendations:**
- Always use specific origins in production, not `'*'`
- Use HTTPS for all API communications
- Implement rate limiting on your API
- Validate and sanitize all user inputs server-side

## Configuration Reference

### Web Component Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `api-base-url` | string | `''` | Base URL for API requests |
| `auth-key` | string | `undefined` | Optional authentication key |
| `theme` | `'light' \| 'dark' \| 'auto'` | `'light'` | Widget theme |
| `position` | `'bottom-right' \| 'bottom-left' \| 'top-right' \| 'top-left'` | `'bottom-right'` | Widget position |
| `welcome-message` | string | `'Hi! How can I help you today?'` | Welcome message |
| `bot-name` | string | `'AI Bot'` | Bot display name |
| `header-title` | string | `'Support Chat'` | Chat header title |
| `button-icon` | string | `'robotWhite'` | Button icon name |

### Available Icons

- `chat` - Chat bubble icon
- `robot` - Robot icon (colored)
- `robotWhite` - Robot icon (white)
- `robotAstro` - Robot with Astro flame
- `close` - Close/X icon
- `send` - Send arrow icon

### Theme Customization

Override CSS custom properties to customize appearance:

```css
:root {
  --ss-primary: #your-primary-color;
  --ss-secondary: #your-secondary-color;
  --ss-background: #your-background-color;
  --ss-text: #your-text-color;
  --ss-border: #your-border-color;
  --ss-radius: 0.75rem;
}
```


## Development

### Building

```bash
pnpm run build
```

### TypeScript Compilation

```bash
pnpm run tsc
```

### File Structure

```
widget/
├── src/
│   ├── star-support.ts    # Main widget class
│   ├── types.ts          # TypeScript interfaces
│   ├── icons.ts          # SVG icon definitions
│   └── styles.css        # Widget styles
├── dist/                 # Built files
│   ├── star-support.js   # Compiled JavaScript
│   ├── icons.js         # Icon exports
│   └── styles.css       # Processed styles
├── package.json
├── tsconfig.json
└── README.md
```

## Non-Astro API Integration

The widget can work with any backend that implements the expected API contract. Here's an example for a Ruby on Rails API:

```ruby
# app/controllers/api/chat_controller.rb
class Api::ChatController < ApplicationController
  def create
    # Authenticate if needed
    if ENV['STAR_SUPPORT_AUTH_KEY']
      auth_key = request.headers['x-auth-key']
      return unauthorized unless auth_key == ENV['STAR_SUPPORT_AUTH_KEY']
    end

    message = params[:message]
    
    # Your AI processing logic here
    response_text = generate_ai_response(message)
    sources = find_relevant_sources(message)
    
    render json: {
      content: response_text,
      sources: sources.map { |s| { title: s.title, url: s.url } }
    }
  rescue => e
    render json: { error: e.message }, status: 500
  end

  private

  def unauthorized
    render json: { error: 'Unauthorized' }, status: 401
  end
end
```

The key requirements are:
1. Accept POST requests to `/api/chat` (configurable)
2. Parse JSON request body with `message` field
3. Return JSON response with `content` and optional `sources`
4. Handle CORS headers for cross-origin requests
5. Optional authentication via `x-auth-key` header

## License

MIT