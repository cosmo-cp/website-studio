import Link from '@docusaurus/Link';
import { ArrowDownRight, HardDrive } from 'lucide-react';
import { DownloadButton, Reveal, TextArrow } from './marketing-ui';
import { HeroChatPreview } from './hero/hero-chat-mockup';

export function HeroSection() {
    return (
        <section className="studio-hero" aria-labelledby="hero-title">
            <div className="hero-intro">
                <Reveal>
                    <h1 id="hero-title">
                        Every model.
                        <br />
                        Your workspace.
                    </h1>
                </Reveal>
                <Reveal className="hero-description" delay={0.08}>
                    <p>
                        Cosmo Studio brings cloud AI and local models into one native desktop app.
                        Your keys. Your conversations. Your call.
                    </p>
                    <DownloadButton />
                    <Link className="studio-text-link" to="/docs/getting-started">
                        Take a look around <TextArrow />
                    </Link>
                </Reveal>
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
                        className="from-foreground to-foreground/70 mb-6 bg-gradient-to-b bg-clip-text font-bold tracking-tight text-transparent"
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
                        <Link to="/docs/faq" className="studio-text-link">
                            How privacy works <TextArrow />
                        </Link>
                    </Reveal>
                    <Reveal className="explore-tile" delay={0.32}>
                        <Link to="#features">
                            <span>Find your flow.</span>
                            <ArrowDownRight size={35} strokeWidth={1.5} aria-hidden="true" />
                        </Link>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
