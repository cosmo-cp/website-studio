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
        <section id="features" className="bg-background py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="!mb-4 !text-3xl font-bold md:!text-4xl">
                        Feature Rich, Future Ready
                    </h2>
                    <p className="text-muted-foreground mx-auto">
                        Everything you need today, with a clear roadmap for tomorrow.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Now Available */}
                    <div>
                        <div className="mb-8 flex items-center gap-3">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                            <h3 className="text-xl font-semibold">Now Available</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {FEATURES_LIVE.map((feature, index) => {
                                const Icon = iconMap[feature.icon] || MessageSquare;
                                return (
                                    <div
                                        key={index}
                                        className="bg-card border-border hover:border-primary/50 group rounded-xl border p-6 transition-all"
                                    >
                                        <div className="bg-primary/10 text-foreground mb-4 flex h-10 w-10 items-center justify-center rounded-lg transition-transform group-hover:scale-110">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <h4 className="mb-2 font-semibold">{feature.title}</h4>
                                        <p className="text-muted-foreground mb-4 text-sm">
                                            {feature.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {feature.badges.map((badge, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-[10px] font-medium"
                                                >
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
                        <div className="mb-8 flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <h3 className="text-xl font-semibold">Roadmap</h3>
                        </div>

                        <div className="space-y-4">
                            {FEATURES_ROADMAP.map((feature, index) => (
                                <div
                                    key={index}
                                    className="border-border/50 bg-muted/20 flex items-start gap-4 rounded-xl border p-4"
                                >
                                    <div className="mt-1">
                                        {feature.status === 'beta' ? (
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                                                <ArrowRight className="h-4 w-4" />
                                            </div>
                                        ) : (
                                            <div className="bg-muted text-muted-foreground flex h-8 w-8 items-center justify-center rounded-full">
                                                <Clock className="h-4 w-4" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-1 flex items-center justify-between">
                                            <h4 className="font-medium">{feature.title}</h4>
                                            {feature.status === 'beta' && (
                                                <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold tracking-wide text-blue-500 uppercase">
                                                    Beta
                                                </span>
                                            )}
                                            {feature.status === 'coming' && (
                                                <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide whitespace-nowrap uppercase">
                                                    Coming Soon
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground text-sm">
                                            {feature.description}
                                        </p>
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
