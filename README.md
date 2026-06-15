# toosharks

A modern personal portfolio website for Tom Sharkey, Engineering Leader based in Waterford, CT.

Built with [Astro](https://astro.build/) and deployed on [Fly.io](https://fly.io/).

## 🚀 Features

- **Interactive Card Stack**: Smooth animations showcasing professional experience
- **Blog System**: Type-safe blog posts using Astro's content collections
- **Responsive Design**: Mobile-first approach with custom Nord theme
- **Performance Optimized**: Static site generation with minimal JavaScript

## 🛠️ Tech Stack

- **Framework**: Astro 5.8.1 with Islands Architecture
- **Styling**: TailwindCSS 4.1.8 + DaisyUI 5.0.43
- **TypeScript**: Strict type checking throughout
- **Deployment**: Docker + Fly.io with automated CI/CD
- **Development**: ESLint + Prettier + Mise for tooling

## 📝 Development

### Prerequisites

- Node.js 22.16.0
- npm
- [mise](https://mise.jdx.dev/) (recommended for tool management)

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or with mise
mise run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Available Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run dev-local` | Start dev server bound to localhost only |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally before deploying |

### Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── cards/          # Card system (BusinessCard, CTACard, Stack)
│   │   └── nav/            # Navigation components
│   ├── content/
│   │   ├── blog/           # Blog posts (Markdown)
│   │   └── config.ts       # Content collection schemas
│   ├── layouts/            # Page layouts
│   ├── pages/              # File-based routing
│   └── styles/
│       └── global.css      # Global styles with custom Nord theme
├── astro.config.mjs        # Astro configuration
├── Dockerfile              # Production container
├── fly.toml                # Fly.io deployment config
└── mise.toml               # Development tools & tasks
```

## 🚢 Deployment

The site is automatically deployed to Fly.io when changes are pushed to the `main` branch.

### Manual Deployment

```bash
# Build and deploy
mise run build-deploy

# Or step by step
npm run build
fly deploy
```

## 📄 License

Personal project - all rights reserved.