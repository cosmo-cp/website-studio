import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const socialMedia = {
    x: {
        href: 'https://x.com/cosmocp',
        handle: '@cosmocp',
    },
    linkedin: {
        href: 'https://www.linkedin.com/company/cosmo-studio-in',
    },
    github: {
        href: 'https://github.com/cosmo-cp/cosmo-studio',
    },
};

const socialLinks = [
    {
        label: 'GitHub',
        href: socialMedia.github.href,
        className: 'footer-social-link footer-social-link--github',
        'aria-label': 'Cosmo Studio on GitHub',
    },
    {
        label: 'X',
        href: socialMedia.x.href,
        className: 'footer-social-link footer-social-link--x',
        'aria-label': 'Cosmo Studio on X',
    },
    {
        label: 'LinkedIn',
        href: socialMedia.linkedin.href,
        className: 'footer-social-link footer-social-link--linkedin',
        'aria-label': 'Cosmo Studio on LinkedIn',
    },
];

const config: Config = {
    title: 'Cosmo Studio',
    tagline: 'Your All-in-One AI Command Center',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    //https://softuts.com/css-not-loading-docusaurus-3-8/
    future: {
        v4: {
            useCssCascadeLayers: false,
            removeLegacyPostBuildHeadAttribute: true,
        },
    },

    stylesheets: [
        'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=IBM+Plex+Mono:wght@400;500;600&family=Spectral:wght@400;500;600;700&display=swap',
    ],

    // Set the production url of your site here
    url: 'http://cosmocp.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Cosmo-CP', // Usually your GitHub org/user name.
    projectName: 'cosmo-studio', // Usually your repo name.

    onBrokenLinks: 'throw',

    customFields: {
        version: '1.1.2',
        downloadLinks: {
            mac: 'https://github.com/cosmo-cp/cosmo-studio/releases/download/v1.1.2/Cosmo.Studio-darwin-arm64-1.1.2.zip',
            windows:
                'https://github.com/cosmo-cp/cosmo-studio/releases/download/v1.1.2/Cosmo.Studio-1.1.2.Setup.exe',
            linux: 'https://github.com/cosmo-cp/cosmo-studio/releases/download/v1.1.2/cosmostudio_1.1.2_amd64.deb',
        },
        socialMedia: {
            ...socialMedia,
            links: socialLinks,
        },
    },

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        metadata: [
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: socialMedia.x.handle },
            { name: 'twitter:creator', content: socialMedia.x.handle },
            { property: 'og:site_name', content: 'Cosmo Studio' },
        ],
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false, // ignore system theme
        },
        navbar: {
            title: 'Cosmo Studio',
            logo: {
                alt: 'Cosmo Studio',
                src: 'img/logo.svg',
                srcDark: 'img/logo-dark.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: socialMedia.github.href,
                    className: 'header-github-link',
                    position: 'right',
                    'aria-label': 'Cosmo Studio on GitHub',
                },
            ],
        },
        footer: {
            links: [
                {
                    title: 'Product',
                    items: [
                        {
                            label: 'Features',
                            to: '/#features',
                        },
                        {
                            label: 'Download',
                            href: 'https://github.com/cosmo-cp/cosmo-studio/releases/tag/v1.1.2',
                        },
                        {
                            label: 'Changelog',
                            to: '/docs/release-notes',
                        },
                    ],
                },
                {
                    title: 'Resources',
                    items: [
                        {
                            label: 'Documentation',
                            to: '/docs/home',
                        },
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                    ],
                },
                {
                    title: 'Social',
                    className: 'footer-social-column',
                    items: socialLinks,
                },
                {
                    title: 'Support',
                    items: [
                        {
                            label: 'support@cosmocp.com',
                            to: 'mailto:support@cosmocp.com',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Cosmo Studio`,
        },
        prism: {
            theme: prismThemes.okaidia,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,

    plugins: [
        async function myPlugin(context, options) {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins = [
                        require('postcss-import'),
                        require('@tailwindcss/postcss'),
                        require('autoprefixer'),
                    ];
                    return postcssOptions;
                },
            };
        },
    ],
};

export default config;
