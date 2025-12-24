'use client';

import {SUPPORTED_PROVIDERS} from '@site/src/constants/constants';
import {cn} from '@site/src/lib/utils';
import {motion} from 'framer-motion';

export function LogoCarousel() {
    return (
        <section className="py-15 border-y border-white/5 bg-white/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm text-muted-foreground font-medium">Powering your workflow with top-tier models</p>
            </div>

            <div className="flex overflow-hidden mask-image-linear-gradient">
                <motion.div
                    className="flex gap-16 items-center pr-16"
                    animate={{x: "-50%"}}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {[...SUPPORTED_PROVIDERS, ...SUPPORTED_PROVIDERS, ...SUPPORTED_PROVIDERS, ...SUPPORTED_PROVIDERS].map((provider, index) => (
                        <div
                            key={`${provider.id}-${index}`}
                            className="flex items-center gap-3 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer min-w-max"
                        >
                            <div className={cn(
                                "relative h-10 w-11 rounded-md flex items-center justify-center",
                                provider.needsBg
                                    ? "bg-foreground/10 dark:bg-foreground/20"
                                    : "bg-transparent"
                            )}>
                                <img
                                    src={provider.logo}
                                    alt={provider.name}
                                    className="object-contain"
                                />
                            </div>

                            <span className="text-3xl font-semibold tracking-tight">{provider.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
