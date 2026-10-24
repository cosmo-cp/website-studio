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
        badges: ['Live'],
    },
    {
        title: 'Agent Client Protocol(ACP)',
        description:
            'Install compatible local agents from the ACP registry and chat with them in a dedicated workspace.',
        icon: 'Bot',
        badges: ['New in v1.1.4'],
    },
    {
        title: 'MCP Servers',
        description:
            'Connect Model Context Protocol servers to supercharge your AI with external tools and live data.',
        icon: 'Monitor',
        badges: ['Live'],
    },
    {
        title: 'Slash Commands',
        description:
            'Trigger powerful actions instantly with built-in slash commands right in your chat input.',
        icon: 'MessageSquare',
        badges: ['Live'],
    },
    {
        title: 'Thinking & Token Insights',
        description:
            'Watch the model think in real-time, track token usage per message, and stop streaming anytime.',
        icon: 'Cpu',
        badges: ['Live'],
    },
];

export const FEATURES_ROADMAP = [
    {
        title: 'Web Search',
        description:
            'Search the web in real-time to provide up-to-date information and cite sources directly in your chat.',
        status: 'coming',
    },
    {
        title: 'Workflow',
        description:
            'Build complex automation workflows and multi-step processes with a visual drag-and-drop builder.',
        status: 'coming',
    },
    {
        title: 'Code Execution',
        description:
            'Run Python and Javascript code directly in your chat to perform data analysis, math, and more.',
        status: 'coming',
    },
    {
        title: 'Mobile App',
        description: 'Bring the full power of Cosmo Studio to iOS and Android.',
        status: 'coming',
    },
];

export const FAQS = [
    {
        question: 'Is my data private?',
        answer: 'Chats are stored on your device. When you use a cloud model, your prompt is sent to the provider you selected under its own privacy policy; local models can run on your machine.',
    },
    {
        question: 'Do I need to pay for API keys?',
        answer: 'Cloud providers may charge for API usage separately from Cosmo Studio. Running a model with Ollama or LM Studio avoids cloud API fees but uses your own hardware.',
    },
    {
        question: 'Which AI providers can I use?',
        answer: 'Connect providers such as OpenAI, Anthropic, Gemini, Groq, and DeepSeek, or run supported local models through Ollama or LM Studio. Choose a model when you start a chat.',
    },
    {
        question: 'Is there a mobile app?',
        answer: 'Not yet, but it is on our roadmap. Currently, we support macOS, Windows, and Linux.',
    },
    {
        question: 'Can I sync my chats across devices?',
        answer: 'Not currently. Your chat history is stored locally on each device; do not rely on cross-device sync for backups or access to past chats.',
    },
];
