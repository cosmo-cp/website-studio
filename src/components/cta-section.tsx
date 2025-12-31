import { Button } from './ui/button';
import { Download } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to upgrade your workflow?
        </h2>
        <p className="text-xl text-muted-foreground mb-10 mx-auto">
          Join thousands of developers who have switched to Cosmo Studio for a faster, more private AI experience.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="h-14 px-8 text-lg gap-2" asChild>
            <a 
              href="https://github.com/Cosmo-mcp/cosmocp-desktop/releases"
              target="_blank"
              className="!text-primary-foreground"
              rel="nofollow noopener noreferrer"
            >
              <Download className="h-5 w-5" />
              Download Cosmo Studio
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4 sm:mt-0 sm:ml-4">
            Available for macOS, Windows, and Linux
          </p>
        </div>
      </div>
    </section>
  );
}
