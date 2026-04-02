import { Button } from './ui/button';
import { Download } from 'lucide-react';

export function CTASection() {
    return (
        <section className="relative overflow-hidden py-24">
            <div className="bg-primary/10 pointer-events-none absolute inset-0 -z-10" />
            <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-center" />

            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="!mb-6 !text-4xl font-bold tracking-tight md:!text-5xl">
                    Ready to upgrade your workflow?
                </h2>
                <p className="text-muted-foreground mx-auto mb-10 text-xl">
                    Join Cosmo Studio for a faster, more private AI experience.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="h-14 gap-2 px-8 text-lg" asChild>
                        <a
                            href="#"
                            className="!text-primary-foreground"
                            rel="nofollow noopener noreferrer"
                        >
                            <Download className="h-5 w-5" />
                            Download Cosmo Studio
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
