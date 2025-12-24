
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
    value: '5+',
    icon: Layers,
    description: 'OpenAI, Anthropic, Gemini & more',
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-foreground">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
