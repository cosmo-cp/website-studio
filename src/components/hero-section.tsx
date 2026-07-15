'use client';

import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Apple, ChevronDown, Monitor, Terminal } from 'lucide-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
const Hero3DCard = lazy(() =>
    import('./hero/hero-chat-mockup').then((module) => ({ default: module.Hero3DCard }))
);

const CONCEPTS = [
    {
        question: 'What if you could get hours back every week?',
        answer: ' Stop context-switching between tools. Write emails, debug code, analyze spreadsheets, brainstorm campaigns—all in natural conversation. Your AI assistant learns your style, remembers your projects, and delivers exactly what you need without the back-and-forth.',
    },
    {
        question: 'What would you learn if you had unlimited access to expertise?',
        answer: ' Master new skills at your own pace. Get personalized explanations that click, practice problems that challenge you, interview prep that builds confidence, career guidance from someone who understands your goals. Every conversation builds your knowledge.',
    },
    {
        question: 'What could you create without the self-doubt?',
        answer: " Stop second-guessing yourself and start building. Whether you're writing a novel, launching a startup, or designing a product, have a thinking partner who asks the right questions, spots what you missed, and pushes your ideas further. Real breakthroughs happen in conversation.",
    },
];

type DownloadLinks = Record<'mac' | 'windows' | 'linux', string>;

type StudioCustomFields = {
    version: string;
    downloadLinks: DownloadLinks;
};

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
    const customFields = siteConfig.customFields as StudioCustomFields;
    const downloadLinks = customFields.downloadLinks;
    const intro = `Cosmo Studio v${customFields.version} has landed 🚀`;

    const downloadOptions = useMemo(
        () => ({
            macOS: {
                label: 'Download for macOS',
                icon: Apple,
                href: downloadLinks.mac,
                disabled: true,
            },
            Windows: {
                label: 'Download for Windows',
                icon: Monitor,
                href: downloadLinks.windows,
            },
            Linux: {
                label: 'Download for Linux',
                icon: Terminal,
                href: downloadLinks.linux,
            },
        }),
        [downloadLinks]
    );

    // Prevent hydration mismatch by rendering a consistent state initially or checking for mount
    // In this case, we default to Windows (as set in useState) but the useEffect updates it.
    // The mismatch usually happens if we render different UI based on the initial state vs what the server rendered.
    // Since we are client-side only for this dynamic part (buttons), it's generally fine.

    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-34 md:pb-32">
            <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px] opacity-[0.15] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] dark:opacity-20" />
            </div>
            <div className="relative z-10 container mx-auto px-4">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative mb-8 inline-flex overflow-hidden rounded-full p-[1px]"
                    >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,var(--primary)_50%,#00000000_100%)]" />
                        <span className="bg-background text-primary inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-3xl">
                            <span className="bg-primary mr-2 flex h-2 w-2 animate-pulse rounded-full"></span>
                            {intro}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="from-foreground to-foreground/70 mb-6 bg-gradient-to-b bg-clip-text !text-4xl font-bold tracking-tight text-transparent md:!text-7xl"
                    >
                        Your All-in-One <br />
                        <span className="text-primary">AI Command Center</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground !m-8 max-w-2xl text-lg md:text-xl"
                    >
                        Chat with GPT, Claude, and local Ollama models in one native app. Bring your
                        own keys. Own your data.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative z-20 mb-12 flex flex-col items-center gap-4"
                    >
                        <div className="relative flex items-center">
                            <Button
                                size="lg"
                                className="border-primary-foreground/20 h-12 min-w-[200px] gap-2 rounded-r-none border-r px-8 text-base"
                                asChild
                            >
                                <a
                                    href={downloadOptions[os].href}
                                    className="!text-primary-foreground [color:inherit] !no-underline"
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
                                className="h-12 rounded-l-none px-3"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <ChevronDown className="h-4 w-4" />
                            </Button>

                            {isDropdownOpen && (
                                <div className="border-border bg-popover text-popover-foreground absolute top-full left-0 z-50 mt-2 w-full min-w-[240px] rounded-md border p-1 shadow-md">
                                    {Object.entries(downloadOptions).map(([key, option]) => {
                                        if (key === os) return null;
                                        const Icon = option.icon;
                                        return (
                                            <a
                                                key={key}
                                                href={option.href}
                                                rel="nofollow noopener noreferrer"
                                                className="hover:bg-accent hover:text-accent-foreground flex w-full items-center gap-2 rounded-sm px-3 py-2 text-left text-sm !text-inherit !no-underline transition-colors"
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
                        className="text-muted-foreground/90 text-sm"
                    >
                        <span className="text-muted-foreground inline-block rounded-md border border-white/10 bg-white/7 px-3 py-1 backdrop-blur-sm">
                            We never see your messages. You bring the API keys.
                        </span>
                    </motion.p>
                </div>
            </div>

            <Suspense
                fallback={
                    <div className="text-muted-foreground/20 mx-auto flex h-[400px] w-full max-w-6xl items-center justify-center md:h-[600px]">
                        Loading 3D Preview...
                    </div>
                }
            >
                <Hero3DCard question={concept.question} answer={concept.answer} />
            </Suspense>
        </section>
    );
}
