'use client';

import { Button } from './ui/button';
import { Check, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function PricingSection() {
    return (
        <section id="pricing" className="bg-background relative overflow-hidden py-32">
            {/* Background Elements */}
            <div className="from-primary/20 via-background to-background pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]" />

            {/* Marquee Background */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-12 overflow-hidden opacity-[0.08] select-none">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: 'linear',
                    }}
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="mx-8 text-[15vw] leading-none font-black">
                            FREE FOREVER
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="relative z-10 container mx-auto">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="!mb-8 !text-5xl font-bold tracking-tight md:!text-7xl"
                    >
                        Professional Power.
                        <br />
                        <span className="from-primary animate-gradient-x bg-gradient-to-r via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Zero Cost.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-md text-muted-foreground mx-auto leading-relaxed"
                    >
                        We're building the ultimate AI command center. Download and get full access
                        to every feature, completely free.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mx-auto max-w-5xl"
                >
                    <div className="group relative">
                        {/* Animated Glowing Border */}
                        <div className="from-primary absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r via-cyan-500 to-blue-600 opacity-40 blur-lg transition-all duration-500 group-hover:opacity-100" />
                        <div className="from-primary absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r via-cyan-500 to-blue-600 opacity-50 transition-all duration-500 group-hover:opacity-100" />

                        <div className="relative overflow-hidden rounded-[1.9rem] border border-zinc-200 bg-white/80 p-8 backdrop-blur-2xl md:p-16 dark:border-transparent dark:bg-zinc-950/90">
                            {/* Inner Glow */}
                            <div className="bg-primary/10 pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
                            <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

                            <div className="relative grid items-center gap-16 lg:grid-cols-2">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-white">
                                            Community Edition
                                        </h3>
                                        <p className="text-primary font-medium">
                                            Everything you need to build.
                                        </p>
                                    </div>

                                    <div className="flex items-baseline gap-2">
                                        <span className="text-8xl font-bold tracking-tighter text-zinc-900 dark:text-white">
                                            ₹0
                                        </span>
                                        <span className="text-muted-foreground text-2xl font-light">
                                            / forever
                                        </span>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <Button
                                            size="lg"
                                            className="h-14 w-full rounded-xl bg-zinc-900 px-8 text-lg text-white transition-transform hover:scale-105 hover:bg-zinc-800 active:scale-90 md:w-auto dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                                            asChild
                                        >
                                            <a
                                                href="#"
                                                rel="nofollow noopener noreferrer"
                                                className="!no-underline"
                                            >
                                                <Zap className="mr-2 h-5 w-5 fill-white dark:fill-black" />
                                                Download Now
                                            </a>
                                        </Button>
                                        <p className="text-muted-foreground pl-1 text-center text-sm md:text-left">
                                            No credit card required • Open Source
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 left-0 hidden h-full w-[1px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent lg:block dark:via-white/5" />

                                    <div className="space-y-6 lg:pl-12">
                                        <div className="mb-6 text-sm font-semibold tracking-widest text-zinc-900 uppercase dark:text-white">
                                            What's included
                                        </div>
                                        <ul className="space-y-5">
                                            {[
                                                'Unlimited Local Models (Ollama)',
                                                'Bring Your Own Key (OpenAI, Anthropic)',
                                                'Unified Chat Interface',
                                                'Markdown & Code Highlighting',
                                                'Chat History',
                                                'Dark Mode',
                                                'Regular Updates',
                                            ].map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.4 + i * 0.05 }}
                                                    className="group/item flex items-center gap-4"
                                                >
                                                    <div className="bg-primary/10 group-hover/item:bg-primary/20 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors">
                                                        <Check className="text-primary h-5 w-5" />
                                                    </div>
                                                    <span className="text-lg text-zinc-600 transition-colors group-hover/item:text-zinc-900 dark:text-zinc-300 dark:group-hover/item:text-white">
                                                        {feature}
                                                    </span>
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
