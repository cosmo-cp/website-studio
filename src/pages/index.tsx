import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {LandingNavbar} from "@site/src/components/landing-navbar";
import {HeroSection} from "@site/src/components/hero-section";
import {LogoCarousel} from "@site/src/components/logo-carousel";
import {StatsSection} from "@site/src/components/stats-section";
import {AboutSection} from "@site/src/components/about-section";
import {FeaturesSection} from "@site/src/components/features-section";
import {PricingSection} from "@site/src/components/pricing-section";
import {TestimonialsSection} from "@site/src/components/testimonials-section";
import {BlogSection} from "@site/src/components/blog-section";
import {FaqSection} from "@site/src/components/faq-section";
import {CTASection} from "@site/src/components/cta-section";
import {ContactSection} from "@site/src/components/contact-section";
import {LandingFooter} from "@site/src/components/landing-footer";

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            {/* Navigation - Fixed/Sticky with Glassmorphism */}
            <LandingNavbar/>

            <main>
                {/* High Impact Hero with Download Buttons */}
                <HeroSection/>

                {/* Infinite scroll of supported provider logos (OpenAI, Meta, etc.) */}
                <LogoCarousel/>

                {/* Performance metrics (e.g., "0ms Latency", "10+ Providers") */}
                <StatsSection/>

                {/* The "Why Cosmo Studio" story */}
                <AboutSection/>

                {/* Grid layout distinguishing "Now Available" vs "Roadmap" */}
                <FeaturesSection/>

                {/* Maker/Dev team profiles */}
                {/* <TeamSection /> */}

                {/* Free vs Power User License */}
                <PricingSection/>

                {/* Social proof/User tweets */}
                <TestimonialsSection/>

                {/* Latest updates */}
                <BlogSection/>

                {/* Technical questions (API keys, privacy, etc.) */}
                <FaqSection/>

                {/* Final "Download Now" push */}
                <CTASection/>

                {/* Links and socials */}
                <ContactSection/>
            </main>

            {/* Standard Footer */}
            <LandingFooter/>
        </Layout>
    );
}
