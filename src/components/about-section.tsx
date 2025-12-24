import { CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why we built <span className="text-primary">Cosmo Studio</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We were tired of switching between browser tabs to use different AI models.
              We wanted a native, fast, and private way to chat with our favorite LLMs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cosmo Studio brings the power of GPT, Claude, and local models like Llama 3
              into a single, beautiful desktop application. No more monthly subscriptions
              for a wrapper—just bring your own keys and pay for what you use.
            </p>

            <div className="space-y-4 pt-4">
              {[
                'Native performance on macOS, Windows, and Linux',
                'Local-first architecture for maximum privacy',
                'Unified interface for all your AI conversations',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">G</div>
                  <div className="bg-muted p-4 rounded-2xl rounded-tl-none flex-1">
                    <p className="text-sm">Write a Python script to parse this CSV.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">C</div>
                  <div className="bg-muted p-4 rounded-2xl rounded-tl-none flex-1">
                    <p className="text-sm">Can you explain the difference between these two approaches?</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">L</div>
                  <div className="bg-muted p-4 rounded-2xl rounded-tl-none flex-1">
                    <p className="text-sm">Running locally on your machine. No data leaves your device.</p>
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
