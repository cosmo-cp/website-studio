import type { ReactNode } from 'react';
import Head from '@docusaurus/Head';
import { HeroSection } from '@site/src/components/hero-section';
import { LogoCarousel } from '@site/src/components/logo-carousel';
import { AboutSection } from '@site/src/components/about-section';
import { FeaturesSection } from '@site/src/components/features-section';
import { CostIntelligenceSection } from '@site/src/components/cost-intelligence-section';
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
                description:
                    'An open-source, local-first AI workspace for models, agents, and connected tools, with Cost Intelligence in development for Cosmo Professional.',
                publisher: { '@id': 'https://cosmocp.com/#organization' },
            },
        ],
    };
    return (
        <Layout
            title="Cosmo — AI Workspace with Cost Intelligence"
            description="Cosmo is an open-source AI workspace for multiple models, ACP agents, and MCP tools. Cost Intelligence is in development for Cosmo Professional."
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
                <CostIntelligenceSection />
                <PricingSection />
                <FaqSection />
                <CTASection />
            </main>
        </Layout>
    );
}
