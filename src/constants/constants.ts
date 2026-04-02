
export const SUPPORTED_PROVIDERS = [
    { id: 'openai', name: 'OpenAI', logo: '/img/openai.svg' },
    { id: 'anthropic', name: 'Anthropic', logo: '/img/anthropic.svg' },
    { id: 'gemini', name: 'Gemini', logo: '/img/gemini.svg' },
    { id: 'xai', name: 'xAI', logo: '/img/xai.svg' },
    { id: 'groq', name: 'Groq', logo: '/img/groq.svg' },
    { id: 'mistral', name: 'Mistral', logo: '/img/mistral.svg' },
    { id: 'deepseek', name: 'DeepSeek', logo: '/img/deepseek.svg' },
    { id: 'perplexity', name: 'Perplexity', logo: '/img/perplexity.svg' },
    { id: 'cohere', name: 'Cohere', logo: '/img/cohere.svg' },
    { id: 'lmstudio', name: 'LM Studio', logo: '/img/lmstudio.svg' },
    { id: 'huggingface', name: 'HuggingFace', logo: '/img/huggingface.svg' },
    { id: 'moonshot', name: 'Moonshot', logo: '/img/moonshotai.svg' },
    { id: 'ollama', name: 'Ollama', logo: '/img/ollama.svg' },
    { id: 'custom', name: 'Custom', logo: '/img/custom.svg' },
];

export const FEATURES_LIVE = [
    {
        title: 'Unified Chat Interface',
        description: 'Chat with GPT, Claude, Grok, and local models in one seamless native app.',
        icon: 'MessageSquare',
        badges: ['Live'],
    },
    {
        title: '13+ AI Providers',
        description:
            'OpenAI, Anthropic, Gemini, xAI, Groq, Mistral, DeepSeek, Perplexity, Cohere, LM Studio, HuggingFace, Ollama & more.',
        icon: 'Cpu',
        badges: ['New in v1.1.2'],
    },
    {
        title: 'Personas',
        description:
            'Create custom AI personas with unique system prompts and personalities tailored to your workflow.',
        icon: 'Key',
        badges: ['New in v1.1.2'],
    },
    {
        title: 'MCP Servers',
        description:
            'Connect Model Context Protocol servers to supercharge your AI with external tools and live data.',
        icon: 'Monitor',
        badges: ['New in v1.1.2'],
    },
    {
        title: 'Slash Commands',
        description:
            'Trigger powerful actions instantly with built-in slash commands right in your chat input.',
        icon: 'MessageSquare',
        badges: ['New in v1.1.2'],
    },
    {
        title: 'Thinking & Token Insights',
        description:
            'Watch the model think in real-time, track token usage per message, and stop streaming anytime.',
        icon: 'Cpu',
        badges: ['New in v1.1.2'],
    },
];

export const FEATURES_ROADMAP = [
    {
        title: 'Agent Mode',
        description: 'Automate multi-step tasks with intelligent, goal-driven agents that work on your behalf.',
        status: 'coming',
    },
    {
        title: 'Chat History Sync',
        description: 'Encrypted sync of your conversations across all your devices, seamlessly and privately.',
        status: 'coming',
    },
    {
        title: 'Mobile App',
        description: 'Bring the full power of Cosmo Studio to iOS and Android.',
        status: 'coming',
    },
    {
        title: 'Plugin Ecosystem',
        description: 'Extend functionality with community-built plugins and first-party integrations.',
        status: 'coming',
    },
];

export const FAQS = [
    {
        question: 'Is my data private?',
        answer: 'Yes. Cosmo Studio is a local-first application. Your chats are stored on your device, and API requests go directly to the providers (OpenAI, Anthropic, etc.). We never see your messages.',
    },
    {
        question: 'Do I need to pay for API keys?',
        answer: 'You need your own API keys for cloud providers like OpenAI, Anthropic, or xAI. However, you can use local models via Ollama or LM Studio completely free.',
    },
    {
        question: 'What providers are supported in v1.1.2?',
        answer: 'Cosmo Studio v1.1.2 supports OpenAI, Anthropic, Google Gemini, xAI (Grok), Groq, Mistral, Moonshot, DeepSeek, Perplexity, Cohere, LM Studio, HuggingFace, and Ollama — 13+ providers in total.',
    },
    {
        question: 'Is there a mobile app?',
        answer: 'Not yet, but it is on our roadmap. Currently, we support macOS, Windows, and Linux.',
    },
    {
        question: 'Can I sync my chats across devices?',
        answer: 'Syncing is coming soon. We are working on an encrypted sync solution to keep your data private while accessible everywhere.',
    },
];
