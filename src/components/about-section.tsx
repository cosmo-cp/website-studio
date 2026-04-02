import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
    return (
        <section className="bg-muted/30 py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-16 md:flex-row">
                    <div className="flex-1 space-y-8">
                        <h2 className="!mb-8 text-3xl font-bold md:!text-4xl">
                            Why we built <span className="text-primary">Cosmo Studio</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            We were tired of switching between browser tabs to use different AI
                            models. We wanted a native, fast, and private way to chat with our
                            favorite LLMs.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Cosmo Studio brings the power of GPT, Claude, and local models like
                            Llama 3 into a single, beautiful desktop application. No more monthly
                            subscriptions for a wrapper—just bring your own keys and pay for what
                            you use.
                        </p>

                        <div className="space-y-4 pt-4">
                            {[
                                'Native performance on macOS, Windows, and Linux',
                                'Local-first architecture for maximum privacy',
                                'Unified interface for all your AI conversations',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary h-5 w-5" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative flex-1">
                        <div className="from-primary/20 absolute inset-0 rounded-3xl bg-gradient-to-tr to-transparent blur-2xl" />
                        <div className="bg-card border-border relative rounded-3xl border p-8 shadow-2xl">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 font-bold text-blue-500">
                                        G
                                    </div>
                                    <div className="bg-muted flex-1 rounded-2xl rounded-tl-none p-4">
                                        <p className="text-sm">
                                            Write a Python script to parse this CSV.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 font-bold text-orange-500">
                                        C
                                    </div>
                                    <div className="bg-muted flex-1 rounded-2xl rounded-tl-none p-4">
                                        <p className="text-sm">
                                            Can you explain the difference between these two
                                            approaches?
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 font-bold text-green-500">
                                        L
                                    </div>
                                    <div className="bg-muted flex-1 rounded-2xl rounded-tl-none p-4">
                                        <p className="text-sm">
                                            Running locally on your machine. No data leaves your
                                            device.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
