'use client';

import { Button } from './ui/button';
import { Check, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      
      {/* Marquee Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full -rotate-12 opacity-[0.08] pointer-events-none select-none overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 30, 
            ease: "linear" 
          }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-[15vw] font-black mx-8 leading-none">
              FREE FOREVER
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Early Access Special</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
          >
            Professional Power.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-blue-400 animate-gradient-x">
              Zero Cost.
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            We're building the ultimate AI command center. Join us in active beta and get full access to every feature, completely free.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative group">
            {/* Animated Glowing Border */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-cyan-500 to-blue-600 rounded-[2rem] opacity-40 group-hover:opacity-100 blur-lg transition-all duration-500" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-cyan-500 to-blue-600 rounded-[2rem] opacity-50 group-hover:opacity-100 transition-all duration-500" />
            
            <div className="relative rounded-[1.9rem] bg-white/80 dark:bg-zinc-950/90 backdrop-blur-2xl p-8 md:p-16 overflow-hidden border border-zinc-200 dark:border-transparent">
              {/* Inner Glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              
              <div className="grid lg:grid-cols-2 gap-16 items-center relative">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-white">Community Edition</h3>
                    <p className="text-primary font-medium">Everything you need to build.</p>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-8xl font-bold text-zinc-900 dark:text-white tracking-tighter">$0</span>
                    <span className="text-2xl text-muted-foreground font-light">/ forever</span>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Button size="lg" className="w-full md:w-auto text-lg h-14 px-8 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 rounded-xl transition-transform hover:scale-105 active:scale-95" asChild>
                      <a href="https://github.com/Cosmo-mcp/cosmocp-desktop/releases" target="_blank" rel="nofollow noopener noreferrer">
                        <Zap className="w-5 h-5 mr-2 fill-white dark:fill-black" />
                        Download Now
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground text-center md:text-left pl-1">
                      No credit card required • Open Source
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/5 to-transparent w-[1px] h-full left-0 hidden lg:block" />
                  
                  <div className="space-y-6 lg:pl-12">
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
                      What's included
                    </div>
                    <ul className="space-y-5">
                      {[
                        'Unlimited Local Models (Ollama)',
                        'Bring Your Own Key (OpenAI, Anthropic)',
                        'Unified Chat Interface',
                        'Markdown & Code Highlighting',
                        'Chat History & Export',
                        'Prompt Library',
                        'Dark Mode First',
                        'Regular Updates'
                      ].map((feature, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + (i * 0.05) }}
                          className="flex items-center gap-4 group/item"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary/20 transition-colors">
                            <Check className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-zinc-600 dark:text-zinc-300 text-lg group-hover/item:text-zinc-900 dark:group-hover/item:text-white transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
