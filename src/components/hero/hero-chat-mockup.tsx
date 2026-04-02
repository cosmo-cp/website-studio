import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Plus, Send } from 'lucide-react';
import { Typewriter } from '../ui/typewriter';

interface Hero3DCardProps {
    question: string;
    answer: string;
}

export function Hero3DCard({ question, answer }: Hero3DCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div className="perspective-1000 relative mx-auto mt-16 max-w-6xl px-4 md:mt-24">
            <motion.div
                initial={{
                    opacity: 0,
                    rotateX: 20,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        delay: 0.4,
                    },
                }}
                whileHover={{
                    rotateX: 2.5,
                    rotateY: -2.5,
                    scale: 1.02,
                    transition: {
                        type: 'spring',
                        stiffness: 200,
                        damping: 25,
                    },
                }}
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
                className="bg-background/95 group relative overflow-hidden rounded-xl border border-white/10 shadow-2xl"
            >
                <div className="from-primary/10 absolute inset-0 bg-gradient-to-tr via-transparent to-transparent opacity-50" />

                {/* Shimmer Effect */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-50 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                />

                {/* Window Controls */}
                <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-white/5 px-4">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>

                {/* Chat Interface Mockup */}
                <div className="flex h-[400px] md:h-[600px]" ref={ref}>
                    {/* Sidebar */}
                    <div className="hidden w-64 flex-col border-r border-white/10 bg-white/5 p-4 md:flex">
                        <div
                            role="button"
                            tabIndex={0}
                            className="text-muted-foreground focus-visible:ring-primary mb-4 flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-3 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:outline-none"
                        >
                            <Plus className="h-4 w-4" />
                            <span>New Chat</span>
                        </div>

                        <div className="text-muted-foreground/50 mb-3 px-2 text-xs font-medium tracking-wider uppercase">
                            Recent
                        </div>

                        <div className="space-y-1">
                            {[
                                'Marketing Strategy',
                                'Refactor Auth',
                                'Email Drafts',
                                'SQL Queries',
                                'Project Alpha',
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    role="button"
                                    tabIndex={0}
                                    className="text-muted-foreground hover:text-foreground focus-visible:ring-primary flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors hover:bg-white/5 focus-visible:ring-2 focus-visible:outline-none"
                                >
                                    <MessageSquare className="h-4 w-4 opacity-50" />
                                    <span className="truncate">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Chat */}
                    <div className="flex min-h-0 flex-1 flex-col p-6">
                        <div className="scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent flex-1 space-y-6 overflow-y-auto pr-2">
                            {/* Previous Chat History (Faded) */}
                            <div className="flex justify-end opacity-40">
                                <div className="bg-primary/20 text-foreground max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2 text-sm">
                                    Hey Cosmo Studio, help me with this SQL query.
                                </div>
                            </div>

                            <div className="flex justify-start opacity-40">
                                <div className="bg-muted/50 max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2 text-sm">
                                    Sure, paste the schema and I'll help you optimize it.
                                </div>
                            </div>

                            <div className="flex justify-end opacity-40">
                                <div className="bg-primary/20 text-foreground max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2 text-sm">
                                    Here it is: SELECT * FROM users WHERE...
                                </div>
                            </div>

                            <div className="flex justify-start opacity-40">
                                <div className="bg-muted/50 max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2 text-sm">
                                    I see. You should add an index on the email column to speed up
                                    lookups.
                                </div>
                            </div>

                            {/* Current Active Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 }}
                                className="flex justify-end"
                            >
                                <div className="bg-primary text-primary-foreground max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2 shadow-lg">
                                    {question}
                                </div>
                            </motion.div>

                            {/* AI Response */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 1.0 }}
                                className="flex justify-start"
                            >
                                <div className="bg-muted max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2 shadow-sm">
                                    <Typewriter text={answer} shouldStart={isInView} delay={1000} />
                                </div>
                            </motion.div>
                        </div>

                        {/* Input Area */}
                        <div className="relative mt-4 shrink-0">
                            <div className="flex h-12 w-full items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4">
                                <div className="h-4 w-4 rounded-full border border-white/20" />
                                <div className="h-2 w-32 rounded-full bg-white/10" />
                                <div className="flex-1" />
                                <Send className="text-muted-foreground h-4 w-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Glow effect behind */}
            <div className="bg-primary/20 absolute -inset-4 -z-10 rounded-[50%] blur-3xl" />
        </div>
    );
}
