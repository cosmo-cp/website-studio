'use client';

import { SUPPORTED_PROVIDERS } from '@site/src/constants/constants';
import { motion } from 'framer-motion';

const DURATION_PER_PROVIDER = 4; // seconds each provider adds to the scroll duration

export function LogoCarousel() {
    const duration = SUPPORTED_PROVIDERS.length * DURATION_PER_PROVIDER;
    return (
        <section className="overflow-hidden border-y border-white/5 bg-white/5 py-15">
            <div className="container mx-auto !mb-8 px-4 text-center">
                <p className="text-muted-foreground text-sm font-medium">
                    Powering your workflow with top-tier models
                </p>
            </div>

            <div className="mask-image-linear-gradient flex overflow-hidden">
                <motion.div
                    className="flex items-center gap-16 pr-16"
                    animate={{ x: '-50%' }}
                    transition={{
                        duration,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {[
                        ...SUPPORTED_PROVIDERS,
                        ...SUPPORTED_PROVIDERS,
                        ...SUPPORTED_PROVIDERS,
                        ...SUPPORTED_PROVIDERS,
                    ].map((provider, index) => (
                        <div
                            key={`${provider.id}-${index}`}
                            className="flex min-w-max cursor-pointer items-center gap-3 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:dark:filter-none"
                        >
                            <img
                                src={provider.logo}
                                alt={provider.name}
                                className="logo-carousel-img h-10 w-10 object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />

                            <span className="text-3xl font-semibold tracking-tight">
                                {provider.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
