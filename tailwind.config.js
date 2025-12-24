const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./docs/**/*.{md,mdx}", "./blog/**/*.{md,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', ...fontFamily.sans],
                jakarta: ['"Plus Jakarta Sans"', ...fontFamily.sans],
                mono: ['"Fira Code"', ...fontFamily.mono],
            },
            borderRadius: {
                sm: "4px",
            },
            screens: {
                sm: "0px",
                lg: "997px",
            },
            colors: {},
        }
    },
    plugins: [],
    darkMode: ["class", '[data-theme="dark"]'], // Support dark mode
    corePlugins: {preflight: false, container: false}, // Prevent Docusaurus defaults to be overwritten
}