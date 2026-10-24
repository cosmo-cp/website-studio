import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { HeroSection } from '@site/src/components/hero-section';
import { LogoCarousel } from '@site/src/components/logo-carousel';
import { AboutSection } from '@site/src/components/about-section';
import { FeaturesSection } from '@site/src/components/features-section';
import { PricingSection } from '@site/src/components/pricing-section';
import { FaqSection } from '@site/src/components/faq-section';
import { CTASection } from '@site/src/components/cta-section';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
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
            <main className="marketing-page">
                <HeroSection />
                <LogoCarousel />
                <AboutSection />
                <FeaturesSection />
                <PricingSection />
                <FaqSection />
                <CTASection />
            </main>
        </Layout>
    );
}
