import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import { HeroSection } from '@site/src/components/hero-section';
import { LogoCarousel } from '@site/src/components/logo-carousel';
import { StatsSection } from '@site/src/components/stats-section';
import { AboutSection } from '@site/src/components/about-section';
import { FeaturesSection } from '@site/src/components/features-section';
import { PricingSection } from '@site/src/components/pricing-section';
import { FaqSection } from '@site/src/components/faq-section';
import { CTASection } from '@site/src/components/cta-section';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': 'https://cosmocp.com/#organization',
                name: 'Cosmo Studio',
                url: 'https://cosmocp.com/',
                logo: 'https://cosmocp.com/img/android-chrome-512x512.png',
                email: 'support@cosmocp.com',
                sameAs: [
                    'https://github.com/cosmo-cp/cosmo-studio',
                    'https://x.com/cosmocp',
                    'https://www.linkedin.com/company/cosmo-studio-in',
                ],
            },
            {
                '@type': 'WebSite',
                '@id': 'https://cosmocp.com/#website',
                name: 'Cosmo Studio',
                url: 'https://cosmocp.com/',
                inLanguage: 'en',
                publisher: { '@id': 'https://cosmocp.com/#organization' },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'Cosmo Studio',
                url: 'https://cosmocp.com/',
                applicationCategory: 'ProductivityApplication',
                operatingSystem: 'macOS, Windows, Linux',
                description: 'A local-first desktop app for chatting with multiple AI providers.',
                publisher: { '@id': 'https://cosmocp.com/#organization' },
            },
        ],
    };
    return (
        <Layout
            title="Local-First AI Chat for GPT, Claude & Ollama"
            description="Chat with GPT, Claude, and Ollama in Cosmo Studio, a local-first desktop app. Switch providers, bring your own keys, and keep chat history on your device."
        >
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(structuredData).replace(/</g, '\\u003c')}
                </script>
            </Head>
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
