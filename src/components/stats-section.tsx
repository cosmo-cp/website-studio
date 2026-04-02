import { Zap, Shield, Layers } from 'lucide-react';

const stats = [
    {
        label: 'Latency (Local)',
        value: '0ms',
        icon: Zap,
        description: 'Instant response with local models',
    },
    {
        label: 'AI Providers',
        value: '13+',
        icon: Layers,
        description: 'OpenAI, Anthropic, Gemini & many more',
    },
    {
        label: 'Data Privacy',
        value: '100%',
        icon: Shield,
        description: 'Your keys, your data, your device',
    },
];

export function StatsSection() {
    return (
        <section className="bg-background py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-card border-border hover:border-primary/50 flex flex-col items-center rounded-2xl border p-6 text-center transition-colors"
                        >
                            <div className="bg-primary/10 text-foreground mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                            <div className="mb-1 text-lg font-semibold">{stat.label}</div>
                            <div className="text-muted-foreground text-sm">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
