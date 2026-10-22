import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Check, Download, Sparkles } from 'lucide-react';

const aiSdkProviders = {
    builtIn: [
        'xAI Grok',
        'OpenAI',
        'Azure OpenAI',
        'Anthropic',
        'Amazon Bedrock',
        'Google',
        'Google Vertex',
        'Mistral',
        'Together.ai',
        'Cohere',
        'Fireworks',
        'DeepInfra',
        'DeepSeek',
        'Cerebras',
        'Groq',
        'Perplexity',
        'ElevenLabs',
        'Hume',
        'Rev.ai',
        'Deepgram',
        'Gladia',
        'AssemblyAI',
        'Baseten',
    ],
    community: [
        'Ollama',
        'FriendliAI',
        'Portkey',
        'Cloudflare Workers AI',
        'OpenRouter',
        'Apertis',
        'Aihubmix',
        'Requesty',
        'Crosshatch',
        'Mixedbread',
        'Voyage AI',
        'Mem0',
        'Letta',
        'Hindsight',
        'Supermemory',
        'Spark',
        'AnthropicVertex',
        'LangDB',
        'Dify',
        'Sarvam',
        'Claude Code',
        'Browser AI',
        'Gemini CLI',
        'A2A',
        'SAP AI Core',
        'AI/ML API',
        'MCP Sampling',
        'ACP',
        'OpenCode',
        'Codex CLI',
        'Soniox',
        'Zhipu (Z.AI)',
        'OLLM',
        'ZeroEntropy',
        'Crusoe',
        'Neon AI Gateway',
        'Interfaze',
        'Telnyx',
    ],
};
const providerCount = aiSdkProviders.builtIn.length + aiSdkProviders.community.length;

const featureGroups = [
    {
        name: 'Community',
        description: 'A great place to start with Cosmo Studio.',
        price: 'Free',
        detail: 'Free forever',
        features: [
            `${providerCount} model providers`,
            'MCP',
            'Tool Call',
            'Agent Client Protocol',
            'Chat',
            'Command',
            'Persona',
        ],
        featured: false,
    },
    {
        name: 'Professional',
        description: 'More room to do your best work.',
        price: '$15',
        detail: 'per year',
        features: [
            'Everything in Community',
            'MCP Registry',
            'Image Generation',
            'RAG',
            'Projects',
            'Guardrails',
            'Usage',
            'Keyboard shortcuts',
            'Automation',
            'Audio Generation',
            'Video Generation',
        ],
        featured: true,
    },
];

export default function PlansPage(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    const downloadLinks = siteConfig.customFields?.downloadLinks as {
        mac: string;
        windows: string;
        linux: string;
    };

    return (
        <Layout title="Plans" description="Explore Cosmo Studio Community and Professional plans.">
            <main className="relative isolate min-h-[calc(100vh-4.5rem)] overflow-hidden px-6 py-20 md:py-28">
                <div className="from-primary/20 via-background to-background pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[32rem] max-w-5xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]" />
                <div className="mx-auto max-w-6xl">
                    <header className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
                        <p className="text-primary mb-4 text-sm font-semibold tracking-[0.2em] uppercase">
                            Simple plans, more possibilities
                        </p>
                        <h1 className="mb-5 text-4xl font-bold tracking-tight md:text-6xl">
                            Find your Cosmo plan
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Start with Community for free, or explore Professional with an
                            introductory free offer.
                        </p>
                    </header>

                    <div className="grid items-stretch gap-6 lg:grid-cols-2">
                        {featureGroups.map((plan) => (
                            <article
                                key={plan.name}
                                className="relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-xl shadow-black/[0.03] md:p-10"
                            >
                                <div className="mb-5 flex h-9 items-center">
                                    {plan.featured && (
                                        <div className="rounded-full border border-white/20 bg-[linear-gradient(90deg,#ef4444_0%,#f97316_20%,#eab308_40%,#22c55e_60%,#3b82f6_80%,#a855f7_100%)] px-4 py-2 text-sm font-bold text-white shadow-sm">
                                            <span className="flex items-center gap-1.5">
                                                <Sparkles className="h-4 w-4" />
                                                Intro offer: FREE
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <p className="text-primary mb-2 text-xl font-semibold tracking-wide uppercase md:text-2xl">
                                        {plan.name}
                                    </p>
                                    <h2 className="mb-2 min-h-16 text-2xl font-bold md:text-3xl">
                                        {plan.description}
                                    </h2>
                                    {plan.featured ? (
                                        <div className="mt-8 flex h-[4.5rem] flex-wrap items-center gap-4">
                                            <div className="space-y-1">
                                                <p className="text-muted-foreground text-sm">
                                                    <span className="text-2xl font-semibold line-through decoration-2">
                                                        {plan.price}
                                                    </span>{' '}
                                                    <span>{plan.detail}</span>
                                                </p>
                                                <p className="text-muted-foreground text-sm">
                                                    <span className="text-lg font-semibold line-through decoration-2">
                                                        $2
                                                    </span>{' '}
                                                    per month
                                                </p>
                                            </div>
                                            <div className="bg-primary/10 text-primary rounded-2xl px-5 py-3 text-3xl font-extrabold tracking-tight">
                                                FREE
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="mt-8 flex h-[4.5rem] flex-wrap items-baseline gap-x-2 gap-y-1">
                                            <span className="text-5xl font-bold tracking-tight md:text-6xl">
                                                {plan.price}
                                            </span>
                                            <span className="text-muted-foreground">
                                                {plan.detail}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="border-border my-8 border-t" />

                                <div className="flex flex-1 flex-col">
                                    <h3 className="mb-12 text-sm font-semibold tracking-wider uppercase">
                                        Features
                                    </h3>
                                    <ul className="mt-6 min-h-44 flex-1 space-y-4">
                                        {plan.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="text-muted-foreground flex items-start gap-3"
                                            >
                                                <span className="bg-primary/10 text-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                                                    <Check className="h-3.5 w-3.5" />
                                                </span>
                                                <span>
                                                    {plan.name === 'Community' &&
                                                    feature ===
                                                        `${providerCount} model providers` ? (
                                                        <Link>
                                                            {feature}
                                                        </Link>
                                                    ) : (
                                                        feature
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="border-border bg-muted/40 text-muted-foreground mt-6 flex min-h-12 items-center rounded-xl border border-dashed px-4 py-3 text-sm">
                                        More plan features coming soon.
                                    </div>
                                </div>

                                <div className="mt-9">
                                    <a
                                        href={downloadLinks.mac}
                                        className="bg-primary !text-white hover:bg-primary/90 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 font-semibold no-underline transition-colors"
                                    >
                                        <Download className="h-4 w-4" />
                                        Download Cosmo Studio {plan.featured ? 'Professional' : ''}
                                    </a>
                                    <p className="text-muted-foreground mt-3 text-center text-xs">
                                        Also available for{' '}
                                        <a
                                            className="underline underline-offset-4"
                                            href={downloadLinks.windows}
                                        >
                                            Windows
                                        </a>{' '}
                                        and{' '}
                                        <a
                                            className="underline underline-offset-4"
                                            href={downloadLinks.linux}
                                        >
                                            Linux
                                        </a>
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
}
