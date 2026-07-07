# Sunny Kumar — Data Analyst & AI/ML Data Associate Portfolio

Welcome to the source code repository of my professional portfolio. This web application features a modern, responsive **Neo-Brutalist UI design** with high-contrast elements, custom cursor tracking, interactive animations, and deep-link navigation. 

It showcases projects, certifications, professional experience, and provides a direct resume downloader and contact details.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (Full-stack React with SSR, Nitro, and Vinxi)
- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Bundler & Server**: [Vite](https://vitejs.dev/) & [Nitro Engine](https://nitro.unjs.io/)
- **Icons & Graphics**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`, and custom neo-brutalist custom theme variables

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 20+** installed. You can also use **Bun** if preferred (a `bun.lock` is included).

### 1. Installation

Install dependencies using `npm` (or `bun install`):

```bash
npm install
```

### 2. Run the Development Server

Start the app locally with hot module replacement (HMR):

```bash
npm run dev
```

The application will launch on your local host (usually `http://localhost:8080` or `http://localhost:8081` if port 8080 is occupied).

### 3. Production Build & Preview

To compile the application for production using Nitro:

#### Build (defaults to Cloudflare presets in this environment, or uses target environment config):
```bash
npm run build
```

#### Build for standard Node.js server environment:
To bundle it for standard Node.js environments (which compiles a production server to `.output/server/index.mjs`):
```bash
# On Linux/macOS
NITRO_PRESET=node-server npm run build

# On Windows (PowerShell)
$env:NITRO_PRESET="node-server"; npm run build
```

#### Preview the Build:
```bash
npm run preview
```

---

## 🐳 Docker Deployment

The project is fully containerized using a multi-stage **Dockerfile** to produce a lightweight runner image containing only production assets.

### Prerequisites
- Install [Docker](https://www.docker.com/products/docker-desktop/)

### Method 1: Using docker-compose (Recommended)

To build and run the containerized portfolio in a single command:

```bash
docker-compose up --build -d
```

This will build the image, name it `sunny-portfolio`, and spin up the container, mapping it to port `3000`. You can visit it at `http://localhost:3000`.

To stop the container:
```bash
docker-compose down
```

### Method 2: Raw Docker Commands

#### 1. Build the Docker Image
```bash
docker build -t sunny-portfolio .
```

#### 2. Run the Container
```bash
docker run -d -p 3000:3000 --name sunny-portfolio-app sunny-portfolio
```

The container runs on port `3000` by default. Access it at [http://localhost:3000](http://localhost:3000).

---

## 📂 Project Structure

```
├── .output/                 # Compiled production bundle (gitignored)
├── public/                  # Static assets (favicons, images)
├── src/
│   ├── assets/              # PDFs, images, and JSON metadata
│   ├── components/          # Reusable React components
│   │   ├── ui/              # Base Neo-Brutalist UI components
│   │   └── CustomCursor.tsx # Custom micro-animated cursor tracker
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries and helpers
│   ├── routes/              # TanStack router page paths
│   │   ├── __root.tsx       # Root layout and head configurations
│   │   └── index.tsx        # Main homepage (Portfolio component)
│   ├── router.tsx           # Router registration
│   ├── server.ts            # SSR server entry point
│   ├── start.ts             # React client entry initiator
│   └── styles.css           # Global CSS and Neo-brutalist tokens
├── package.json             # Scripts and npm dependencies
├── vite.config.ts           # Bundler settings
└── Dockerfile               # Production multi-stage Docker builder
```

---

## 🛡️ License

Private portfolio repository. All rights reserved.
