# Cosmo Studio - Website & Documentation

Welcome to the official repository for the **Cosmo Studio** web platform. This project features **Docusaurus 3** for comprehensive documentation and blogging.

## 🚀 About Cosmo Studio

**Cosmo Studio** is your "All-in-One AI Command Center." It's a native application that allows you to chat with multiple AI models (GPT, Claude, local Ollama models) in one place.
- **Privacy First**: Bring your own API keys and own your data.
- **Native Experience**: Fast, responsive, and cross-platform (macOS, Windows, Linux).
- **Extensible**: Supports a wide range of AI providers.

## 🛠️ Tools & Technologies

This repository leverages a modern, dual-framework stack:

- **[Docusaurus 3](https://docusaurus.io/)**: Handles the technical documentation and product blog with a robust markdown-based system.
- **[React 19](https://react.dev/)**: The underlying UI library for both frameworks.
- **[Tailwind CSS 4](https://tailwindcss.com/)**: A utility-first styling system used across the entire site.
- **[Framer Motion](https://www.framer.com/motion/)**: For smooth, high-quality animations on the homepage.
- **[TypeScript](https://www.typescriptlang.org/)**: Ensuring type-safe development throughout the codebase.
- **[Radix UI](https://www.radix-ui.com/)**: For accessible and consistent UI primitives.

## 🏁 Getting Started

To run this project locally, follow these simple steps:

### Prerequisites

- **Node.js**: Version `20.0` or higher is required.
- **NPM**: Standard package manager included with Node.js.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Cosmo-CP/website-studio.git
   cd website-studio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Local Development

Run the development server to see the site in action:

```bash
npm start
```

Once started, the site will be available at `http://localhost:3000`. Docusaurus supports hot-reloading, so any changes you make will be reflected immediately.

## 📂 Project Structure

- `src/`: Contains React components, pages, and custom styles.
  - `components/`: Reusable UI elements like Hero, Stats, and FAQ sections.
  - `pages/`: The main landing page (`index.tsx`).
- `docs/`: Markdown files for the product documentation.
- `blog/`: Weekly updates and articles.
- `static/`: Assets like images, icons, and logos.
- `docusaurus.config.ts`: The main configuration file for the site.

## 📦 Build & Deployment

To build the project for production:

```bash
npm run build
```

This generates a `build/` directory with static files ready to be served.

## 🔗 Useful Links

- **Main Website**: [cosmocp.com](https://cosmocp.com)
- **App Releases**: [Download Cosmo Studio](https://github.com/Cosmo-mcp/cosmocp-desktop/releases)
- **Documentation**: Accessible via the "Docs" tab on the website.

---

Built with ❤️ by the **Cosmo Studio** team.