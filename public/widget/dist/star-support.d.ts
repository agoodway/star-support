import type { StarSupportConfig } from './types';
import './styles.css';
export declare class StarSupport {
    private config;
    private state;
    private container;
    private button;
    private chat;
    private messagesContainer;
    private input;
    constructor(config?: Partial<StarSupportConfig>);
    private init;
    private showErrorState;
    private createButton;
    private createChat;
    private setupTheme;
    private addMockMessages;
    private showWelcomeBubble;
    private showSuggestedQuestions;
    private handleSuggestedQuestionClick;
    private hideSuggestedQuestions;
    private parseSimpleMarkdown;
    private renderMessages;
    private sanitizeInput;
    private sendMessage;
    private showLoading;
    private hideLoading;
    private toggleChat;
    private openChat;
    private closeChat;
    private isMobile;
    private hasMessages;
    private setupMobileViewport;
    private cleanupMobileViewport;
    private handleViewportResize;
    private isIOS;
    private originalViewport;
    mount(selector: string): void;
    destroy(): void;
}
export declare class StarSupportElement extends HTMLElement {
    private widget;
    static get observedAttributes(): string[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
