# GreenLeaf Gardening Services

A modern, responsive website for GreenLeaf Gardening Services built with Astro and Tailwind CSS.

[![CI](https://github.com/MichaelFisher1997/greenleaf-gardening/actions/workflows/ci.yml/badge.svg)](https://github.com/MichaelFisher1997/greenleaf-gardening/actions/workflows/ci.yml)

## 🚀 Features

- 🌱 **Modern & Responsive Design**: Looks great on all devices.
- ⚡ **Blazing Fast**: Built with Astro for optimal performance.
- 🎨 **Beautiful UI**: Styled with Tailwind CSS.
- 🐳 **Dockerized**: Includes configurations for both development and production environments.
- 🔄 **CI/CD**: Automated testing with GitHub Actions on every push.
- 🔍 **SEO Optimized**: With sitemap and meta tags.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm 9+ or yarn
- Docker

### Local Development (Without Docker)

1.  **Clone the repository**
    ```bash
    git clone https://github.com/MichaelFisher1997/greenleaf-gardening.git
    cd greenleaf-gardening
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

    The site will be available at [http://localhost:4321](http://localhost:4321).

## 🐳 Dockerized Environments

This project includes two Docker setups: one for local development and one for production.

### Development with Docker

This setup provides a hot-reloading development environment.

1.  **Build and start the container**
    ```bash
    docker-compose up --build
    ```

2.  **Access the application**
    Open [http://localhost:4321](http://localhost:4321) in your browser.

### Production with Docker

This setup builds a lightweight, optimized static site served by Nginx.

1.  **Build and start the container**
    ```bash
    docker-compose -f docker-compose.prod.yml up -d --build
    ```

2.  **Access the application**
    Open [http://localhost:8080](http://localhost:8080) in your browser (or whichever port you've set in your `.env` file).

## 🔄 Continuous Integration

This repository uses GitHub Actions to run tests automatically on every push to a non-master branch and on every pull request to `master`. This ensures code quality and prevents regressions.

## 📄 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── ci.yml
├── nginx/
│   └── nginx.conf
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── Dockerfile
├── docker-compose.yml
├── Dockerfile.prod
├── docker-compose.prod.yml
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run test`            | Runs the test suite with Vitest                  |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
