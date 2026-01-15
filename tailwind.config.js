const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}", "./blog/**/*.{md,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                figtree: ["var(--font-sans)", ...fontFamily.sans],
                spectral: ["var(--font-serif)", ...fontFamily.serif],
                "plex-mono": ["var(--font-mono)", ...fontFamily.mono],
            },
        },
    },
    plugins: [],
    darkMode: ["class", '[data-theme="dark"]'], // Support dark mode
    corePlugins: { preflight: false, container: false }, // Prevent Docusaurus defaults to be overwritten
}