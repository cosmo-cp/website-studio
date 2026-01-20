import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

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
        version: '1.0.1',
        downloadLinks: {
            mac: 'https://github.com/cosmo-cp/cosmo-studio/releases/download/v1.0.1/Cosmo.Studio-darwin-arm64-1.0.1.zip',
            windows: 'https://github.com/cosmo-cp/cosmo-studio/releases/download/v1.0.1/Cosmo.Studio-1.0.1.Setup.exe',
            linux: 'https://github.com/cosmo-cp/cosmo-studio/releases/download/v1.0.1/cosmostudio_1.0.1_amd64.deb',
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
                    sidebarPath: './sidebars.ts'
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
        colorMode: {
            defaultMode: "light",
            disableSwitch: false,
            respectPrefersColorScheme: false, // ignore system theme
        },
        navbar: {
            title: 'Cosmo Studio',
            logo: {
                alt: 'Cosmo Studio',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/cosmo-cp/cosmo-studio',
                    className: 'header-github-link',
                    position: 'right',
                }, 

                {
                    href: 'https://github.com/Cosmo-mcp/cosmocp-desktop/releases',
                    html: '<span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg> Get Cosmo Studio</span>',
                    position: 'right',
                    className: 'button button--primary button--lg navbar-cta-button',
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
                            href: 'https://github.com/Cosmo-mcp/cosmocp-desktop/releases',
                        },
                        {
                            label: 'Changelog',
                            to: '/blog',
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
                            label: 'GitHub',
                            href: 'https://github.com/cosmo-cp/cosmo-studio',
                        },
                        {
                            label: 'Blog',
                            to: '/blog',
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
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    postcssOptions.plugins = [
                        require("postcss-import"),
                        require("@tailwindcss/postcss"),
                        require("autoprefixer"),
                    ];
                    return postcssOptions;
                },
            }
        },
    ]
};

export default config;
