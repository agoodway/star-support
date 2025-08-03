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
			humanHandoff: '/api/star-support/human-handoff',
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
		enableHumanHandoff: false,
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
		
		// Check localStorage for saved email
		const savedEmail = localStorage.getItem('star-support-email');
		
		this.state = {
			isOpen: false,
			messages: [],
			isLoading: false,
			showEmailForm: false,
			userEmail: config.behavior?.userEmail || savedEmail || undefined,
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
		this.showSuggestedQuestions();
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

	private showSuggestedQuestions(): void {
		if (!this.messagesContainer || !this.config.behavior?.suggestedQuestions || this.config.behavior.suggestedQuestions.length === 0) return;

		const questionsContainer = document.createElement('div');
		questionsContainer.className = 'star-support-suggested-questions';
		questionsContainer.id = 'star-support-suggested-questions';

		this.config.behavior.suggestedQuestions.forEach((question) => {
			const questionButton = document.createElement('button');
			questionButton.className = 'star-support-suggested-question';
			questionButton.textContent = question;
			questionButton.addEventListener('click', () => {
				this.handleSuggestedQuestionClick(question);
			});
			questionsContainer.appendChild(questionButton);
		});

		this.messagesContainer.appendChild(questionsContainer);
	}

	private handleSuggestedQuestionClick(question: string): void {
		// Remove suggested questions
		const questionsElement = document.getElementById('star-support-suggested-questions');
		questionsElement?.remove();

		// Set the question as input value and send
		if (this.input) {
			this.input.value = question;
			this.sendMessage();
		}
	}

	private hideSuggestedQuestions(): void {
		const questionsElement = document.getElementById('star-support-suggested-questions');
		if (questionsElement) {
			questionsElement.style.opacity = '0';
			setTimeout(() => questionsElement.remove(), 200);
		}
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
		
		// Show email form if needed
		if (this.state.showEmailForm && this.config.behavior?.enableHumanHandoff) {
			this.showEmailCaptureForm();
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

		// Hide suggested questions when user sends a message
		this.hideSuggestedQuestions();

		// Show loading
		this.state.isLoading = true;
		this.showLoading();

		// Make actual API call
		try {
			// Use configured baseUrl or fall back to current origin
			const baseUrl = this.config.api.baseUrl || window.location.origin;
			const chatEndpoint = this.config.api.endpoints?.chat || '/api/star-support/chat';
			// Ensure proper URL formatting
			const url = `${baseUrl}${chatEndpoint}`;
			const authKey = this.config.api.authKey || '';
			

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
				body: JSON.stringify({ 
					messages: this.state.messages,
					topicContext: this.config.behavior?.topicContext 
				}),
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
			
			// Check if human handoff was requested
			if (data.requestHumanHandoff && this.config.behavior?.enableHumanHandoff) {
				this.state.showEmailForm = true;
			}
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
			
			// Ensure messages are scrolled to bottom on mobile
			if (this.isMobile() && this.messagesContainer) {
				setTimeout(() => {
					if (this.messagesContainer) {
						this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
					}
				}, 100);
			}
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
		
		// Mobile viewport handling
		if (this.isMobile()) {
			this.setupMobileViewport();
			// Delay focus to prevent immediate keyboard on mobile
			setTimeout(() => {
				if (this.input && !this.hasMessages()) {
					this.input.focus();
				}
			}, 300);
		} else {
			this.input?.focus();
		}
	}

	private closeChat(): void {
		this.state.isOpen = false;
		this.button?.classList.remove('star-support-hidden');
		this.chat?.classList.add('star-support-hidden');
		
		// Cleanup mobile viewport
		if (this.isMobile()) {
			this.cleanupMobileViewport();
		}
	}

	private isMobile(): boolean {
		return window.innerWidth <= 480 || ('ontouchstart' in window);
	}

	private hasMessages(): boolean {
		return this.state.messages.length > 0;
	}

	private setupMobileViewport(): void {
		// Store original viewport
		const viewport = document.querySelector('meta[name="viewport"]');
		if (viewport) {
			this.originalViewport = viewport.getAttribute('content') || '';
		}

		// Prevent body scroll when chat is open
		document.body.style.overflow = 'hidden';
		document.body.style.position = 'fixed';
		document.body.style.width = '100%';

		// Handle iOS specific viewport issues
		if (this.isIOS()) {
			// Scroll to top to hide address bar
			window.scrollTo(0, 0);
		}

		// Add resize handler for keyboard
		window.addEventListener('resize', this.handleViewportResize);
		window.addEventListener('orientationchange', this.handleViewportResize);
	}

	private cleanupMobileViewport(): void {
		// Restore body scroll
		document.body.style.overflow = '';
		document.body.style.position = '';
		document.body.style.width = '';

		// Restore original viewport if changed
		const viewport = document.querySelector('meta[name="viewport"]');
		if (viewport && this.originalViewport) {
			viewport.setAttribute('content', this.originalViewport);
		}

		// Remove event listeners
		window.removeEventListener('resize', this.handleViewportResize);
		window.removeEventListener('orientationchange', this.handleViewportResize);
	}

	private handleViewportResize = (): void => {
		if (!this.chat || !this.isMobile()) return;

		// Force recalculation of viewport height
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// Scroll to bottom if user was at bottom
		if (this.messagesContainer) {
			const wasAtBottom = 
				this.messagesContainer.scrollTop + this.messagesContainer.clientHeight >= 
				this.messagesContainer.scrollHeight - 10;
			
			if (wasAtBottom) {
				setTimeout(() => {
					if (this.messagesContainer) {
						this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
					}
				}, 100);
			}
		}
	}

	private isIOS(): boolean {
		return /iPhone|iPad|iPod/i.test(navigator.userAgent);
	}

	private originalViewport: string = '';
	
	private showEmailCaptureForm(): void {
		if (!this.messagesContainer) return;
		
		// Check if form already exists
		if (document.getElementById('star-support-email-form')) return;
		
		const emailForm = document.createElement('div');
		emailForm.id = 'star-support-email-form';
		emailForm.className = 'star-support-email-form';
		emailForm.innerHTML = `
			<div class="star-support-email-header">
				<span>✉️</span>
				<span>${this.config.behavior?.handoffFormTitle || 'Connect with our team'}</span>
			</div>
			<label for="star-support-email-input">Your email:</label>
			<input 
				type="email" 
				id="star-support-email-input"
				class="star-support-email-input" 
				placeholder="email@example.com"
				value="${this.state.userEmail || ''}"
				required
			/>
			<label for="star-support-email-message">${this.config.behavior?.handoffFormDetailsLabel || 'Add any additional details (optional):'}</label>
			<textarea 
				id="star-support-email-message"
				class="star-support-email-textarea" 
				placeholder="${this.config.behavior?.handoffFormDetailsPlaceholder || 'Any additional context...'}"
			></textarea>
			<div class="star-support-email-buttons">
				<button class="star-support-email-cancel">Cancel</button>
				<button class="star-support-email-submit">Send</button>
			</div>
		`;
		
		this.messagesContainer.appendChild(emailForm);
		
		// Scroll to show form
		setTimeout(() => {
			emailForm.scrollIntoView({ behavior: 'smooth', block: 'end' });
		}, 100);
		
		// Setup event handlers
		const emailInput = emailForm.querySelector('.star-support-email-input') as HTMLInputElement;
		const messageInput = emailForm.querySelector('.star-support-email-textarea') as HTMLTextAreaElement;
		const cancelBtn = emailForm.querySelector('.star-support-email-cancel');
		const submitBtn = emailForm.querySelector('.star-support-email-submit');
		
		cancelBtn?.addEventListener('click', () => {
			this.state.showEmailForm = false;
			emailForm.remove();
		});
		
		submitBtn?.addEventListener('click', async () => {
			const email = emailInput.value.trim();
			const message = messageInput.value.trim();
			
			// Basic email validation
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(email)) {
				emailInput.focus();
				return;
			}
			
			// Disable submit button
			submitBtn.setAttribute('disabled', 'true');
			submitBtn.textContent = 'Sending...';
			
			try {
				await this.submitHumanHandoff(email, message);
				
				// Save email to localStorage
				localStorage.setItem('star-support-email', email);
				this.state.userEmail = email;
				
				// Show success message
				emailForm.innerHTML = `
					<div class="star-support-email-success">
						Request sent! We'll be in touch soon.
					</div>
				`;
				
				// Remove form after delay
				setTimeout(() => {
					this.state.showEmailForm = false;
					emailForm.remove();
				}, 5000);
				
			} catch (error) {
				console.error('Failed to submit handoff request:', error);
				submitBtn.removeAttribute('disabled');
				submitBtn.textContent = 'Send';
				// Could show error message to user
			}
		});
		
		// Focus email input if not already filled
		if (!this.state.userEmail) {
			emailInput.focus();
		}
	}
	
	private async submitHumanHandoff(email: string, message: string): Promise<void> {
		const baseUrl = this.config.api.baseUrl || window.location.origin;
		const handoffEndpoint = this.config.api.endpoints?.humanHandoff || '/api/star-support/human-handoff';
		const url = `${baseUrl}${handoffEndpoint}`;
		
		const authKey = this.config.api.authKey || '';
		const headers: HeadersInit = {
			'Content-Type': 'application/json',
		};
		
		if (authKey) {
			headers['x-auth-key'] = authKey;
		}
		
		const response = await fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify({
				email,
				message,
				conversationHistory: this.state.messages,
			}),
		});
		
		if (!response.ok) {
			throw new Error('Failed to submit handoff request');
		}
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
			'suggested-questions',
			'topic-context',
			'enable-human-handoff',
			'user-email',
			'handoff-form-title',
			'handoff-form-details-label',
			'handoff-form-details-placeholder',
		];
	}

	connectedCallback() {
		try {
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
					suggestedQuestions: this.getAttribute('suggested-questions') 
						? JSON.parse(this.getAttribute('suggested-questions')!) 
						: undefined,
					topicContext: this.getAttribute('topic-context') || undefined,
					enableHumanHandoff: this.getAttribute('enable-human-handoff') === 'true',
					userEmail: this.getAttribute('user-email') || undefined,
					handoffFormTitle: this.getAttribute('handoff-form-title') || undefined,
					handoffFormDetailsLabel: this.getAttribute('handoff-form-details-label') || undefined,
					handoffFormDetailsPlaceholder: this.getAttribute('handoff-form-details-placeholder') || undefined,
				},
			};

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
