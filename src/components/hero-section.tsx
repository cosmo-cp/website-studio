'use client';

import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Apple, ChevronDown, Monitor, Terminal } from 'lucide-react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
const Hero3DCard = lazy(() => import('./hero/hero-chat-mockup').then(module => ({ default: module.Hero3DCard })));

const CONCEPTS = [
    {
        question: 'What if you could get hours back every week?',
        answer:
            ' Stop context-switching between tools. Write emails, debug code, analyze spreadsheets, brainstorm campaigns—all in natural conversation. Your AI assistant learns your style, remembers your projects, and delivers exactly what you need without the back-and-forth.',
    },
    {
        question: 'What would you learn if you had unlimited access to expertise?',
        answer:
            ' Master new skills at your own pace. Get personalized explanations that click, practice problems that challenge you, interview prep that builds confidence, career guidance from someone who understands your goals. Every conversation builds your knowledge.',
    },
    {
        question: 'What could you create without the self-doubt?',
        answer:
            ' Stop second-guessing yourself and start building. Whether you\'re writing a novel, launching a startup, or designing a product, have a thinking partner who asks the right questions, spots what you missed, and pushes your ideas further. Real breakthroughs happen in conversation.',
    },
];

export function HeroSection() {
    const [os, setOs] = useState<'macOS' | 'Windows' | 'Linux'>('macOS');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [concept, setConcept] = useState(CONCEPTS[0]);

    useEffect(() => {
        setConcept(CONCEPTS[Math.floor(Math.random() * CONCEPTS.length)]);

        const userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.includes('win')) {
            setOs('Windows');
        } else if (userAgent.includes('linux')) {
            setOs('Linux');
        } else if (userAgent.includes('mac')) {
            setOs('macOS');
        } else {
            setOs('macOS');
        }
    }, []);

    const { siteConfig } = useDocusaurusContext();
    const intro = "Cosmo Studio v" + siteConfig.customFields.version as string + " has landed 🚀";

    const downloadOptions = useMemo(() => ({
        macOS: {
            label: 'Download for macOS',
            icon: Apple,
            href: siteConfig.customFields.downloadLinks["mac"],
            disabled: true,
        },
        Windows: {
            label: 'Download for Windows',
            icon: Monitor,
            href: siteConfig.customFields.downloadLinks["windows"],
        },
        Linux: {
            label: 'Download for Linux',
            icon: Terminal,
            href: siteConfig.customFields.downloadLinks["linux"],
        },
    }), [siteConfig.customFields.downloadLinks]);

    // Prevent hydration mismatch by rendering a consistent state initially or checking for mount
    // In this case, we default to Windows (as set in useState) but the useEffect updates it.
    // The mismatch usually happens if we render different UI based on the initial state vs what the server rendered.
    // Since we are client-side only for this dynamic part (buttons), it's generally fine.

    return (
        <section className="relative pt-32 pb-20 md:pt-34 md:pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15] dark:opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-8"
                    >
                        <span
                            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,var(--primary)_50%,#00000000_100%)]" />
                        <span
                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-primary backdrop-blur-3xl">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            {intro}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="!text-4xl md:!text-6xl lg:!text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                    >
                        Your All-in-One <br />
                        <span className="text-primary">AI Command Center</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground !m-8 max-w-2xl"
                    >
                        Chat with GPT, Claude, and local Ollama models in one native app.
                        Bring your own keys. Own your data.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center gap-4 mb-12 relative z-20"
                    >
                        <div className="relative flex items-center">
                            <Button
                                size="lg"
                                className="h-12 px-8 text-base gap-2 rounded-r-none border-r border-primary-foreground/20 min-w-[200px]"
                                asChild
                            >
                                <a
                                    href={downloadOptions[os].href}
                                    className="!text-primary-foreground !no-underline [color:inherit]"
                                    rel="nofollow noopener noreferrer"
                                >
                                    {os === 'Windows' && <Monitor className="h-5 w-5" />}
                                    {os === 'Linux' && <Terminal className="h-5 w-5" />}
                                    {os === 'macOS' && <Apple className="h-5 w-5" />}
                                    Download for {os}
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                className="h-12 px-3 rounded-l-none"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <ChevronDown className="h-4 w-4" />
                            </Button>

                            {isDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-full min-w-[240px] rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md z-50">
                                    {Object.entries(downloadOptions).map(([key, option]) => {
                                        if (key === os) return null;
                                        const Icon = option.icon;
                                        return (
                                            <a
                                                key={key}
                                                href={option.href}
                                                rel="nofollow noopener noreferrer"
                                                className="!no-underline !text-inherit flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left"
                                                onClick={() => {
                                                    setIsDropdownOpen(false);
                                                }}
                                            >
                                                <Icon className="h-4 w-4" />
                                                {option.label}
                                            </a>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-sm text-muted-foreground/90"
                    >
                        <span
                            className="inline-block rounded-md bg-white/7 border border-white/10 px-3 py-1 backdrop-blur-sm text-muted-foreground">
                            We never see your messages. You bring the API keys.
                        </span>
                    </motion.p>
                </div>
            </div>

            <Suspense fallback={<div className="h-[400px] md:h-[600px] w-full max-w-6xl mx-auto flex items-center justify-center text-muted-foreground/20">Loading 3D Preview...</div>}>
                <Hero3DCard question={concept.question} answer={concept.answer} />
            </Suspense>
        </section>
    );
}
