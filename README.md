# GreenLeaf Gardening Services

A modern, responsive website for GreenLeaf Gardening Services built with Astro and Tailwind CSS.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_DEPLOY_ID_HERE/deploy-status)](https://app.netlify.com/sites/YOUR_SITE_NAME/deploys)

## 🚀 Features

- 🌱 **Modern & Responsive Design**: Looks great on all devices
- ⚡ **Blazing Fast**: Built with Astro for optimal performance
- 🎨 **Beautiful UI**: Styled with Tailwind CSS
- 📱 **Contact Form**: Integrated with Netlify Forms
- 🔍 **SEO Optimized**: With sitemap and meta tags
- 🐳 **Docker Support**: Easy local development setup

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (LTS recommended)
- npm 7+ or yarn 1.22+
- Docker (optional, for containerized development)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/greenleaf-gardening.git
   cd greenleaf-gardening
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The site will be available at [http://localhost:4321](http://localhost:4321)

### Using Docker

1. **Build and start the containers**
   ```bash
   docker-compose up --build
   ```

2. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Build & Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview the Production Build

```bash
npm run preview
# or
yarn preview
```

### Deploy to Netlify

1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

## 📄 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
