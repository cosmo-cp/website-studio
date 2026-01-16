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
        <div className="mt-16 md:mt-24 relative max-w-6xl mx-auto px-4 perspective-1000">
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
                className="relative rounded-xl border border-white/10 bg-background/95 shadow-2xl overflow-hidden group"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />

                {/* Shimmer Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 z-50 pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                />

                {/* Window Controls */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>

                {/* Chat Interface Mockup */}
                <div className="flex h-[400px] md:h-[600px]" ref={ref}>
                    {/* Sidebar */}
                    <div className="w-64 border-r border-white/10 bg-white/5 hidden md:flex flex-col p-4">
                        <div
                            role="button"
                            tabIndex={0}
                            className="flex items-center gap-2 px-2 py-3 mb-4 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-muted-foreground hover:bg-white/10 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            <Plus className="h-4 w-4" />
                            <span>New Chat</span>
                        </div>

                        <div className="text-xs font-medium text-muted-foreground/50 px-2 mb-3 uppercase tracking-wider">
                            Recent
                        </div>

                        <div className="space-y-1">
                            {['Marketing Strategy', 'Refactor Auth', 'Email Drafts', 'SQL Queries', 'Project Alpha'].map(
                                (item, i) => (
                                    <div
                                        key={i}
                                        role="button"
                                        tabIndex={0}
                                        className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    >
                                        <MessageSquare className="h-4 w-4 opacity-50" />
                                        <span className="truncate">{item}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Main Chat */}
                    <div className="flex-1 p-6 flex flex-col min-h-0">
                        <div className="flex-1 space-y-6 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {/* Previous Chat History (Faded) */}
                            <div className="flex justify-end opacity-40">
                                <div className="bg-primary/20 text-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                                    Hey Cosmo Studio, help me with this SQL query.
                                </div>
                            </div>

                            <div className="flex justify-start opacity-40">
                                <div className="bg-muted/50 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] text-sm">
                                    Sure, paste the schema and I'll help you optimize it.
                                </div>
                            </div>

                            <div className="flex justify-end opacity-40">
                                <div className="bg-primary/20 text-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                                    Here it is: SELECT * FROM users WHERE...
                                </div>
                            </div>

                            <div className="flex justify-start opacity-40">
                                <div className="bg-muted/50 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] text-sm">
                                    I see. You should add an index on the email column to speed up lookups.
                                </div>
                            </div>

                            {/* Current Active Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 }}
                                className="flex justify-end"
                            >
                                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg">
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
                                <div className="bg-muted px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm">
                                    <Typewriter
                                        text={answer}
                                        shouldStart={isInView}
                                        delay={1000}
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Input Area */}
                        <div className="mt-4 relative shrink-0">
                            <div className="h-12 rounded-lg border border-white/10 bg-white/5 w-full flex items-center px-4 gap-3">
                                <div className="h-4 w-4 rounded-full border border-white/20" />
                                <div className="h-2 w-32 bg-white/10 rounded-full" />
                                <div className="flex-1" />
                                <Send className="h-4 w-4 text-muted-foreground" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Glow effect behind */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-[50%]" />
        </div>
    );
}
