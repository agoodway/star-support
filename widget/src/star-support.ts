import type { StarSupportConfig, ChatMessage, WidgetState } from './types';
import { ICONS } from './icons';
import './styles.css';

const DEFAULT_CONFIG: StarSupportConfig = {
	api: {
		baseUrl: '',
		endpoints: {
			chat: '/api/star-support/chat',
			config: '/api/star-support/config',
			feedback: '/api/star-support/feedback',
		},
	},
	ui: {
		position: 'bottom-right',
		theme: 'light',
		colors: {
			primary: '#6366f1',
			secondary: '#8b5cf6',
			background: '#ffffff',
			text: '#1e293b',
		},
	},
	behavior: {
		welcomeMessage: 'Hi! How can I help you today?',
		placeholderText: 'Type your message...',
		botName: 'AI Bot',
	},
};

export class StarSupport {
	private config: StarSupportConfig;
	private state: WidgetState;
	private container: HTMLElement | null = null;
	private button: HTMLElement | null = null;
	private chat: HTMLElement | null = null;
	private messagesContainer: HTMLElement | null = null;
	private input: HTMLInputElement | null = null;

	constructor(config: Partial<StarSupportConfig> = {}) {
		this.config = { ...DEFAULT_CONFIG, ...config };
		this.state = {
			isOpen: false,
			messages: [],
			isLoading: false,
		};

		this.init();
	}

	private init(): void {
		try {
			this.createButton();
			this.createChat();
			this.setupTheme();
			this.addMockMessages();
		} catch (error) {
			console.error('Star Support: Failed to initialize widget', error);
			this.showErrorState('Failed to initialize chat widget. Please refresh the page.');
		}
	}

	private showErrorState(message: string): void {
		// Create a minimal error button that can be clicked to retry
		const errorButton = document.createElement('button');
		errorButton.className = 'star-support-button star-support-widget star-support-error';
		errorButton.innerHTML = '⚠️';
		errorButton.setAttribute('aria-label', message);
		errorButton.title = message;
		errorButton.addEventListener('click', () => {
			errorButton.remove();
			this.init(); // Retry initialization
		});
		document.body.appendChild(errorButton);
	}

	private createButton(): void {
		this.button = document.createElement('button');
		this.button.className = 'star-support-button star-support-widget';
		const iconName = this.config.ui?.buttonIcon || 'robotWhite';
		this.button.innerHTML = ICONS[iconName as keyof typeof ICONS] || ICONS.robotWhite;
		this.button.setAttribute('aria-label', 'Open chat support');
		this.button.addEventListener('click', () => this.toggleChat());
		document.body.appendChild(this.button);
	}

	private createChat(): void {
		this.chat = document.createElement('div');
		this.chat.className = 'star-support-chat star-support-widget star-support-hidden';
		this.chat.setAttribute('data-position', this.config.ui?.position || 'bottom-right');

		this.chat.innerHTML = `
      <div class="star-support-header">
        <h3 class="star-support-title">${this.config.behavior?.headerTitle || 'Support Chat'}</h3>
        <button class="star-support-close" aria-label="Close chat">${ICONS.close}</button>
      </div>
      <div class="star-support-messages"></div>
      <div class="star-support-input-container">
        <input 
          type="text" 
          class="star-support-input" 
          placeholder="${this.config.behavior?.placeholderText || 'Type your message...'}"
          maxlength="1000"
        />
        <button class="star-support-send" aria-label="Send message">${ICONS.send}</button>
      </div>
    `;

		this.messagesContainer = this.chat.querySelector('.star-support-messages');
		this.input = this.chat.querySelector('.star-support-input');
		const closeButton = this.chat.querySelector('.star-support-close');
		const sendButton = this.chat.querySelector('.star-support-send');

		closeButton?.addEventListener('click', () => this.closeChat());
		sendButton?.addEventListener('click', () => this.sendMessage());
		this.input?.addEventListener('keypress', (e) => {
			if (e.key === 'Enter') {
				this.sendMessage();
			}
		});

		document.body.appendChild(this.chat);
	}

	private setupTheme(): void {
		const theme = this.config.ui?.theme || 'light';
		if (theme === 'auto') {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
		} else {
			document.documentElement.setAttribute('data-theme', theme);
		}

		// Apply custom colors if provided
		if (this.config.ui?.colors) {
			const { primary, secondary, background, text } = this.config.ui.colors;
			const root = document.documentElement;
			if (primary) root.style.setProperty('--ss-primary', primary);
			if (secondary) root.style.setProperty('--ss-secondary', secondary);
			if (background) root.style.setProperty('--ss-background', background);
			if (text) root.style.setProperty('--ss-text', text);
		}
	}

	private addMockMessages(): void {
		// Don't add welcome message as a regular message, show as bubble instead
		this.state.messages = [];
		this.renderMessages();
		this.showWelcomeBubble();
	}

	private showWelcomeBubble(): void {
		if (!this.messagesContainer) return;

		const welcomeBubble = document.createElement('div');
		welcomeBubble.className = 'star-support-welcome-bubble';
		welcomeBubble.innerHTML = `
      <div class="star-support-welcome-avatar">
        ${ICONS.robot}
      </div>
      <div class="star-support-welcome-content">
        <div class="star-support-welcome-text">
          ${this.config.behavior?.welcomeMessage || 'Hi! How can I help you with Astro today?'}
        </div>
      </div>
    `;

		this.messagesContainer.appendChild(welcomeBubble);
	}

	private parseSimpleMarkdown(text: string): string {
		// First, handle any malformed code blocks that might slip through
		// Remove triple backticks and code fence blocks
		let cleaned = text.replace(/```[\s\S]*?```/g, '');
		// Remove [Code example:...] references
		cleaned = cleaned.replace(/\[Code example:.*?\]/g, '');
		cleaned = cleaned.replace(/``[^`\n]+/g, '`'); // Fix double backticks

		// Escape HTML
		let parsed = cleaned
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;');

		// Parse markdown elements
		// Links first (to avoid conflicts with other patterns)
		parsed = parsed.replace(
			/\[([^\]]+)\]\(([^)]+)\)/g,
			'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
		);

		// Bold: **text** or __text__
		parsed = parsed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
		parsed = parsed.replace(/__([^_]+)__/g, '<strong>$1</strong>');

		// Italic: *text* or _text_ (but not within words)
		parsed = parsed.replace(/(?<!\w)\*([^*]+)\*(?!\w)/g, '<em>$1</em>');
		parsed = parsed.replace(/(?<!\w)_([^_]+)_(?!\w)/g, '<em>$1</em>');

		// Inline code: `code` (handle carefully to avoid breaking on malformed input)
		parsed = parsed.replace(/`([^`\n]+)`/g, '<code>$1</code>');

		// Line breaks (but preserve spacing)
		parsed = parsed.replace(/\n\n/g, '<br><br>');
		parsed = parsed.replace(/\n/g, '<br>');

		return parsed;
	}

	private renderMessages(): void {
		if (!this.messagesContainer) return;

		const previousScrollHeight = this.messagesContainer.scrollHeight;
		const wasAtBottom =
			this.messagesContainer.scrollTop + this.messagesContainer.clientHeight >=
			this.messagesContainer.scrollHeight - 10;

		this.messagesContainer.innerHTML = '';
		let newAssistantMessage: HTMLElement | null = null;

		this.state.messages.forEach((message, index) => {
			const messageWrapper = document.createElement('div');
			messageWrapper.className = `star-support-message-wrapper ${message.role}`;

			if (message.role === 'assistant') {
				// Bot message with icon
				messageWrapper.innerHTML = `
          <div class="star-support-message-row">
            <div class="star-support-message-avatar">
              ${ICONS.robot}
            </div>
            <div class="star-support-message-content">
              <div class="star-support-message ${message.role}">${this.parseSimpleMarkdown(message.content)}</div>
              ${
								message.sources && message.sources.length > 0
									? `
                <div class="star-support-sources">
                  <div class="star-support-sources-label">Sources:</div>
                  <div class="star-support-sources-list">
                    ${message.sources
											.map(
												(source) => `
                      <a href="${source.url}" class="star-support-source-link" target="_blank" rel="noopener noreferrer">
                        <span class="star-support-source-icon">🔗</span>
                        <span class="star-support-source-title">${source.title}</span>
                        <span class="star-support-source-arrow">→</span>
                      </a>
                    `
											)
											.join('')}
                  </div>
                </div>
              `
									: ''
							}
              <div class="star-support-message-label">${this.config.behavior?.botName || 'AI Bot'}</div>
            </div>
          </div>
        `;
			} else {
				// User message
				messageWrapper.innerHTML = `
          <div class="star-support-message-content">
            <div class="star-support-message ${message.role}">${this.parseSimpleMarkdown(message.content)}</div>
            <div class="star-support-message-label">You</div>
          </div>
        `;
			}

			// Track if this is a new assistant message (last message and is assistant)
			if (message.role === 'assistant' && index === this.state.messages.length - 1) {
				newAssistantMessage = messageWrapper;
			}

			this.messagesContainer!.appendChild(messageWrapper);
		});

		// Smart scrolling: scroll to top of new assistant messages
		if (newAssistantMessage) {
			// Always scroll to show the start of new assistant messages
			(newAssistantMessage as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
		} else if (wasAtBottom) {
			// Only scroll to bottom if user was at bottom and no new assistant message
			this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
		}
	}

	private sanitizeInput(input: string): string {
		// Remove potential XSS vectors while preserving legitimate content
		return input
			.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
			.replace(/javascript:/gi, '') // Remove javascript: protocol
			.replace(/on\w+\s*=/gi, '') // Remove event handlers
			.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // Remove iframes
			.replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '') // Remove objects
			.replace(/<embed\b[^<]*>/gi, '') // Remove embeds
			.trim()
			.substring(0, 1000); // Limit length
	}

	private async sendMessage(): Promise<void> {
		if (!this.input || !this.input.value.trim() || this.state.isLoading) return;

		const rawContent = this.input.value.trim();
		const content = this.sanitizeInput(rawContent);
		this.input.value = '';

		// Add user message
		const userMessage: ChatMessage = {
			id: Date.now().toString(),
			content,
			role: 'user',
			timestamp: Date.now(),
		};

		this.state.messages.push(userMessage);
		this.renderMessages();

		// Show loading
		this.state.isLoading = true;
		this.showLoading();

		// Make actual API call
		try {
			// Debug logging
			console.log('[Star Support Debug] Current location:', window.location.href);
			console.log('[Star Support Debug] Current origin:', window.location.origin);
			console.log('[Star Support Debug] Config baseUrl:', this.config.api.baseUrl);
			
			// Always use current origin to avoid build-time URL issues
			const baseUrl = window.location.origin;
			const chatEndpoint = this.config.api.endpoints?.chat || '/api/star-support/chat/';
			// Ensure proper URL formatting
			const url = `${baseUrl}${chatEndpoint}`;
			const authKey = this.config.api.authKey || '';
			
			console.log('[Star Support Debug] Final URL:', url);
			console.log('[Star Support Debug] Using auth key:', !!authKey);

			const headers: HeadersInit = {
				'Content-Type': 'application/json',
			};

			// Only add auth header if authKey is provided
			if (authKey) {
				headers['x-auth-key'] = authKey;
			}

			const response = await fetch(url, {
				method: 'POST',
				headers,
				body: JSON.stringify({ message: content }),
			});

			if (!response.ok) {
				throw new Error('Failed to get response');
			}

			const data = await response.json();

			const assistantMessage: ChatMessage = {
				id: (Date.now() + 1).toString(),
				content: data.content || 'Sorry, I could not process your request.',
				role: 'assistant',
				timestamp: Date.now(),
				sources: data.sources,
			};

			this.state.messages.push(assistantMessage);
		} catch (error) {
			console.error('Error sending message:', error);
			const errorMessage: ChatMessage = {
				id: (Date.now() + 1).toString(),
				content: 'Sorry, I encountered an error. Please try again.',
				role: 'assistant',
				timestamp: Date.now(),
			};
			this.state.messages.push(errorMessage);
		} finally {
			this.state.isLoading = false;
			this.hideLoading();
			this.renderMessages();
		}
	}

	private showLoading(): void {
		if (!this.messagesContainer) return;

		const loadingWrapper = document.createElement('div');
		loadingWrapper.className = 'star-support-message-wrapper assistant';
		loadingWrapper.id = 'star-support-loading';
		loadingWrapper.innerHTML = `
      <div class="star-support-message-row">
        <div class="star-support-message-avatar">
          ${ICONS.robot}
        </div>
        <div class="star-support-message-content">
          <div class="star-support-message assistant typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="star-support-message-label">${this.config.behavior?.botName || 'AI Bot'}</div>
        </div>
      </div>
    `;
		this.messagesContainer.appendChild(loadingWrapper);
		this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
	}

	private hideLoading(): void {
		const loadingEl = document.getElementById('star-support-loading');
		loadingEl?.remove();
	}

	private toggleChat(): void {
		if (this.state.isOpen) {
			this.closeChat();
		} else {
			this.openChat();
		}
	}

	private openChat(): void {
		this.state.isOpen = true;
		this.button?.classList.add('star-support-hidden');
		this.chat?.classList.remove('star-support-hidden');
		this.input?.focus();
	}

	private closeChat(): void {
		this.state.isOpen = false;
		this.button?.classList.remove('star-support-hidden');
		this.chat?.classList.add('star-support-hidden');
	}

	public mount(selector: string): void {
		const container = document.querySelector(selector);
		if (container) {
			container.appendChild(this.button!);
			container.appendChild(this.chat!);
		}
	}

	public destroy(): void {
		this.button?.remove();
		this.chat?.remove();
	}
}

// Web Component wrapper
export class StarSupportElement extends HTMLElement {
	private widget: StarSupport | null = null;

	static get observedAttributes() {
		return [
			'api-base-url',
			'theme',
			'position',
			'welcome-message',
			'bot-name',
			'header-title',
			'button-icon',
		];
	}

	connectedCallback() {
		try {
			// Debug logging for initialization
			console.log('[Star Support Debug] Web Component initializing...');
			console.log('[Star Support Debug] api-base-url attribute:', this.getAttribute('api-base-url'));
			console.log('[Star Support Debug] All attributes:', this.getAttributeNames().map(name => `${name}="${this.getAttribute(name)}"`).join(' '));
			
			const config: Partial<StarSupportConfig> = {
				api: {
					baseUrl: this.getAttribute('api-base-url') || '',
					authKey: this.getAttribute('auth-key') || undefined,
				},
				ui: {
					theme: (this.getAttribute('theme') as any) || 'light',
					position: (this.getAttribute('position') as any) || 'bottom-right',
					buttonIcon: (this.getAttribute('button-icon') as any) || undefined,
				},
				behavior: {
					welcomeMessage: this.getAttribute('welcome-message') || undefined,
					botName: this.getAttribute('bot-name') || undefined,
					headerTitle: this.getAttribute('header-title') || undefined,
				},
			};

			console.log('[Star Support Debug] Config object:', JSON.stringify(config, null, 2));
			this.widget = new StarSupport(config);
		} catch (error) {
			console.error('Star Support: Failed to initialize web component', error);
			// Dispatch error event that parent can listen to
			this.dispatchEvent(
				new CustomEvent('star-support-error', {
					detail: { error, message: 'Failed to initialize Star Support widget' },
					bubbles: true,
					composed: true,
				})
			);
		}
	}

	disconnectedCallback() {
		this.widget?.destroy();
	}

	attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (oldValue !== newValue && this.widget) {
			// Only reinitialize if the attribute actually changed
			this.widget.destroy();
			this.connectedCallback();
		}
	}
}

// Register web component
customElements.define('star-support', StarSupportElement);
