import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HeroSection } from "@site/src/components/hero-section";
import { LogoCarousel } from "@site/src/components/logo-carousel";
import { StatsSection } from "@site/src/components/stats-section";
import { AboutSection } from "@site/src/components/about-section";
import { FeaturesSection } from "@site/src/components/features-section";
import { PricingSection } from "@site/src/components/pricing-section";
import { FaqSection } from "@site/src/components/faq-section";
import { CTASection } from "@site/src/components/cta-section";
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout>
            <title>{siteConfig.title}</title>
            <meta name="description" content="Chat with GPT, Claude, and local Ollama models in one native app. Bring your own keys. Own your data." />
            <main className="landing-wrapper">
                {/* High Impact Hero with Download Buttons */}
                <HeroSection />

                {/* Infinite scroll of supported provider logos (OpenAI, Meta, etc.) */}
                <LogoCarousel />

                {/* Performance metrics (e.g., "0ms Latency", "10+ Providers") */}
                <StatsSection />

                {/* The "Why Cosmo Studio" story */}
                <AboutSection />

                {/* Grid layout distinguishing "Now Available" vs "Roadmap" */}
                <FeaturesSection />

                {/* Free vs Power User License */}
                <PricingSection />

                {/* Technical questions (API keys, privacy, etc.) */}
                <FaqSection />

                {/* Final "Download Now" push */}
                <CTASection />
            </main>

        </Layout>
    );
}
