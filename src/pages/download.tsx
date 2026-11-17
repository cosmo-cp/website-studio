import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function DownloadPage() {
    const { siteConfig } = useDocusaurusContext();
    const { downloadLinks, version } = siteConfig.customFields as {
        downloadLinks: Record<'mac' | 'windows' | 'linux', string>;
        version: string;
    };

    return (
        <Layout
            title="Download Cosmo Studio"
            description="Download Cosmo Studio for macOS, Windows, or Linux."
        >
            <main className="margin-vert--xl container">
                <h1>Download Cosmo Studio</h1>
                <p>Choose the build for your computer. Current version: {version}.</p>
                <ul>
                    <li>
                        <a href={downloadLinks.mac}>macOS — Apple silicon (ZIP)</a>
                    </li>
                    <li>
                        <a href={downloadLinks.windows}>Windows — installer</a>
                    </li>
                    <li>
                        <a href={downloadLinks.linux}>Linux — 64-bit Debian package</a>
                    </li>
                </ul>
                <p>
                    For setup instructions and requirements, see the{' '}
                    <Link to="/docs/installation">installation guide</Link>. For other builds and
                    release details, visit{' '}
                    <a href="https://github.com/cosmo-cp/cosmo-studio/releases">GitHub Releases</a>.
                </p>
            </main>
        </Layout>
    );
}
