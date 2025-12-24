'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { motion, useInView } from 'framer-motion';
import { Apple, Monitor, Terminal, Send, MessageSquare, Plus, ChevronDown } from 'lucide-react';

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

const DOWNLOAD_OPTIONS = {
  macOS: {
    label: 'Download for macOS',
    icon: Apple,
    href: 'https://github.com/Cosmo-mcp/cosmocp-desktop/releases',
  },
  Windows: {
    label: 'Download for Windows',
    icon: Monitor,
    href: 'https://github.com/Cosmo-mcp/cosmocp-desktop/releases',
  },
  Linux: {
    label: 'Download for Linux',
    icon: Terminal,
    href: 'https://github.com/Cosmo-mcp/cosmocp-desktop/releases',
  },
};

export function HeroSection() {
  const [os, setOs] = useState<'macOS' | 'Windows' | 'Linux'>('macOS');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [concept, setConcept] = useState(CONCEPTS[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    setConcept(CONCEPTS[Math.floor(Math.random() * CONCEPTS.length)]);

    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('win')) {
      setOs('Windows');
    } else if (userAgent.includes('linux')) {
      setOs('Linux');
    } else {
      setOs('macOS');
    }
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15] dark:opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative inline-flex overflow-hidden rounded-full p-[1px] mb-8"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,var(--primary)_50%,#00000000_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-primary backdrop-blur-3xl">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Cosmo Studio v1.0.0 has landed 🚀
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
          >
            Your All-in-One <br />
            <span className="text-primary">AI Command Center</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
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
                  href={DOWNLOAD_OPTIONS[os].href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {os === 'macOS' && <Apple className="h-5 w-5" />}
                  {os === 'Windows' && <Monitor className="h-5 w-5" />}
                  {os === 'Linux' && <Terminal className="h-5 w-5" />}
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
                <div className="absolute top-full left-0 mt-2 w-full min-w-[240px] rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md z-50">
                  {Object.entries(DOWNLOAD_OPTIONS).map(([key, option]) => {
                    if (key === os) return null;
                    const Icon = option.icon;
                    return (
                      <a
                        key={key}
                        href={option.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors text-left"
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
            <span className="inline-block rounded-md bg-white/7 border border-white/10 px-3 py-1 backdrop-blur-sm text-muted-foreground">
              We never see your messages. You bring the API keys.
            </span>
          </motion.p>
        </div>
      </div>

      {/* 3D Mockup */}
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
              <div className="flex items-center gap-2 px-2 py-3 mb-4 rounded-lg border border-white/10 bg-white/5 text-sm font-medium text-muted-foreground hover:bg-white/10 cursor-pointer transition-colors">
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
                      className="flex items-center gap-3 px-2 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 cursor-pointer transition-colors"
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
                    {concept.question}
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
                      text={concept.answer}
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
    </section>
  );
}

function Typewriter({
  text,
  shouldStart = false,
  delay = 0,
}: {
  text: string;
  shouldStart?: boolean;
  delay?: number;
}) {
  const [displayedText, setDisplayedText] = React.useState('');
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    if (shouldStart && !hasStarted) {
      const delayTimer = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    }
  }, [shouldStart, delay, hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;

    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [text, hasStarted]);

  return <p className="mb-2 leading-relaxed">{displayedText}</p>;
}
