export interface Source {
    title: string;
    url: string;
}
export interface ChatMessage {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: number;
    sources?: Source[];
}
export interface StarSupportConfig {
    api: {
        baseUrl: string;
        endpoints?: {
            chat: string;
            config: string;
            feedback: string;
            humanHandoff?: string;
        };
        authKey?: string;
    };
    ui?: {
        position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
        theme?: 'light' | 'dark' | 'auto';
        colors?: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
        };
        buttonIcon?: 'chat' | 'robot' | 'robotWhite' | 'robotAstro';
    };
    behavior?: {
        welcomeMessage?: string;
        placeholderText?: string;
        maxFileSize?: number;
        botName?: string;
        headerTitle?: string;
        suggestedQuestions?: string[];
        topicContext?: string;
        enableHumanHandoff?: boolean;
        userEmail?: string;
    };
}
export interface ChatResponse {
    message: ChatMessage;
    conversationId?: string;
    error?: string;
    requestHumanHandoff?: boolean;
}
export interface WidgetState {
    isOpen: boolean;
    messages: ChatMessage[];
    isLoading: boolean;
    conversationId?: string;
    showEmailForm: boolean;
    userEmail?: string;
}
