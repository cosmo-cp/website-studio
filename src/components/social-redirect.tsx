import type { ReactNode } from 'react';
import { useEffect } from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

type SocialLinkConfig = {
    href?: string;
    handle?: string;
};

type SocialMediaConfig = Record<string, SocialLinkConfig>;

type SocialRedirectProps = {
    fallbackUrl: string;
    label: string;
    platform: string;
};

export function SocialRedirect({ fallbackUrl, label, platform }: SocialRedirectProps): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    const socialMedia = siteConfig.customFields.socialMedia as SocialMediaConfig;
    const socialConfig = socialMedia[platform];
    const socialUrl = socialConfig?.href ?? fallbackUrl;
    const socialLabel = socialConfig?.handle ?? label;
    const description = socialConfig?.handle
        ? `Follow Cosmo Studio on ${label} at ${socialLabel}.`
        : `Follow Cosmo Studio on ${label}.`;

    useEffect(() => {
        window.location.replace(socialUrl);
    }, [socialUrl]);

    return (
        <Layout title={label} description={description}>
            <Head>
                <meta name="robots" content="noindex,follow" />
                <meta httpEquiv="refresh" content={`0; url=${socialUrl}`} />
                <link rel="canonical" href={socialUrl} />
            </Head>
            <main className="social-redirect-page">
                <a href={socialUrl}>Continue to Cosmo Studio on {label}</a>
            </main>
        </Layout>
    );
}
