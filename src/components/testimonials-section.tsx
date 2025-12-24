

import { TESTIMONIALS } from '@site/src/constants/constants';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Loved by Developers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border shadow-sm">
              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 overflow-hidden">
                   {/* Placeholder for avatar */}
                   <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
