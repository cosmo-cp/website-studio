import type { ReactNode } from 'react';
import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';

type SocialMediaConfig = {
    x?: {
        href?: string;
        handle?: string;
    };
};

export default function XPage(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    const socialMedia = siteConfig.customFields.socialMedia as SocialMediaConfig;
    const xUrl = socialMedia.x?.href ?? 'https://x.com/cosmocp';
    const xHandle = socialMedia.x?.handle ?? '@cosmocp';

    useEffect(() => {
        window.location.replace(xUrl);
    }, [xUrl]);

    return (
        <Layout title="X" description={`Follow Cosmo Studio on X at ${xHandle}.`}>
            <Head>
                <meta name="robots" content="noindex,follow" />
                <meta httpEquiv="refresh" content={`0; url=${xUrl}`} />
                <link rel="canonical" href={xUrl} />
            </Head>
            <main className="social-redirect-page">
                <a href={xUrl}>Continue to Cosmo Studio on X</a>
            </main>
        </Layout>
    );
}
