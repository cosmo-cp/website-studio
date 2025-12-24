import { FEATURES_LIVE, FEATURES_ROADMAP } from '@site/src/constants/constants';
import { MessageSquare, Cpu, Key, Monitor, ArrowRight, Clock } from 'lucide-react';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  MessageSquare,
  Cpu,
  Key,
  Monitor,
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Feature Rich, Future Ready</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need today, with a clear roadmap for tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Now Available */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <h3 className="text-xl font-semibold">Now Available</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES_LIVE.map((feature, index) => {
                const Icon = iconMap[feature.icon] || MessageSquare;
                return (
                  <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-foreground mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.badges.map((badge, i) => (
                        <span key={i} className="text-[10px] font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Roadmap */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <h3 className="text-xl font-semibold">Roadmap</h3>
            </div>

            <div className="space-y-4">
              {FEATURES_ROADMAP.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-muted/20">
                  <div className="mt-1">
                    {feature.status === 'beta' ? (
                      <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                        <Clock className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">{feature.title}</h4>
                      {feature.status === 'beta' && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-500 uppercase tracking-wide">
                          Beta
                        </span>
                      )}
                      {feature.status === 'coming' && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-muted text-muted-foreground uppercase tracking-wide">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
