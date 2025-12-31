
export const SUPPORTED_PROVIDERS = [
  { id: 'openai', name: 'OpenAI', logo: '/img/openai.webp', needsBg: true },
  { id: 'anthropic', name: 'Anthropic', logo: '/img/anthropic.webp', needsBg: true },
  { id: 'gemini', name: 'Gemini', logo: '/img/gemini.svg', needsBg: false },
  { id: 'ollama', name: 'Ollama', logo: '/img/ollama.webp', needsBg: true },
  { id: 'custom', name: 'Custom', logo: '/img/custom.webp', needsBg: true },
]

export const FEATURES_LIVE = [
  {
    title: 'Unified Chat Interface',
    description: 'Chat with GPT, Claude, and local models in one seamless interface.',
    icon: 'MessageSquare',
    badges: ['Live'],
  },
  {
    title: 'Local Model Support',
    description: 'Run Ollama models locally for complete privacy and zero latency.',
    icon: 'Cpu',
    badges: ['Privacy'],
  },
  {
    title: 'Bring Your Own Key',
    description: 'Connect your own API keys. We never sit in the middle.',
    icon: 'Key',
    badges: ['Cost Effective'],
  },
  {
    title: 'Cross-Platform',
    description: 'Native apps for macOS, Windows, and Linux.',
    icon: 'Monitor',
    badges: ['Universal'],
  },
];

export const FEATURES_ROADMAP = [
  {
    title: 'Chat',
    description: 'Real-time conversations with your AI models.',
    status: 'beta',
  },
  {
    title: 'Model Context Protocol(MCP)',
    description: 'Expand model functionality through shared, plug-and-play tools.',
    status: 'coming',
  },
  {
    title: 'Agent',
    description: 'Automate tasks with intelligent, goal-driven agents.',
    status: 'coming',
  },
  {
    title: 'Personas',
    description: 'Customize behavior with purpose-built AI personas',
    status: 'coming',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    handle: '@sarahchen_dev',
    quote: 'Cosmo Studio has completely replaced my browser tabs for AI chat. The local model support is a game changer.',
    avatar: '/images/avatars/sarah.jpg',
  },
  {
    name: 'Alex Rivera',
    handle: '@arivera',
    quote: 'Finally, a native app that feels like it belongs on my Mac. Fast, beautiful, and private.',
    avatar: '/images/avatars/alex.jpg',
  },
  {
    name: 'Jordan Lee',
    handle: '@jlee_tech',
    quote: 'Being able to switch between GPT and Claude instantly helps me compare outputs for coding tasks.',
    avatar: '/images/avatars/jordan.jpg',
  },
];

export const FAQS = [
  {
    question: 'Is my data private?',
    answer: 'Yes. Cosmo Studio is a local-first application. Your chats are stored on your device, and API requests go directly to the providers (OpenAI, Anthropic, etc.). We never see your messages.',
  },
  {
    question: 'Do I need to pay for API keys?',
    answer: 'Yes, you need to provide your own API keys from providers like OpenAI or Anthropic. However, you can use local models via Ollama for free.',
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

export const TEAM = [
  {
    name: 'David Kim',
    role: 'Founder & Lead Developer',
    social: { twitter: 'https://twitter.com/davidkim', github: 'https://github.com/davidkim' },
    image: '/images/team/david.jpg',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Product Designer',
    social: { twitter: 'https://twitter.com/elena', dribbble: 'https://dribbble.com/elena' },
    image: '/images/team/elena.jpg',
  },
];
