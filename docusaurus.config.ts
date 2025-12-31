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
            disableSwitch: true,
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'Cosmo Studio',
            logo: {
                alt: 'Cosmo Studio',
                src: 'img/logo.svg',
            },
            items: [
                {to: '/', label: 'Home', position: 'right'},
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'right',
                    label: 'Docs',
                },
                {to: '/blog', label: 'Blog', position: 'right'},
                {
                    href: 'https://github.com/cosmo-cp/website-studio',
                    className: 'header-github-link',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Docs',
                            to: '/docs/home',
                        },
                    ],
                },
                /*{
                    title: 'Community',
                    items: [
                        /!*{
                            label: 'X',
                            href: 'https://x.com/docusaurus',
                        },*!/
                    ],
                },*/
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/cosmo-cp/website-studio',
                        },
                    ],
                },
            ],
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
