import { Mail, MessageCircle, Github } from 'lucide-react';
import { Button } from './ui/button';

export function ContactSection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              We're here to help. Chat with our team or join our community on Discord.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                Join Discord
              </Button>
              <Button variant="ghost" className="gap-2">
                <Mail className="h-4 w-4" />
                Email Support
              </Button>
            </div>
          </div>
          
          <div className="bg-muted/30 p-8 rounded-2xl border border-border">
            <h3 className="font-semibold mb-4">Connect with us</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span>Follow on GitHub</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="h-5 w-5 flex items-center justify-center font-bold">X</div>
                <span>Follow on X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
