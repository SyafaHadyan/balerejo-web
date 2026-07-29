# Balerejo Web

Official web presence for Desa Balerejo, Kecamatan Panggungrejo, Kabupaten Blitar, Jawa Timur. Built as part of MMD FILKOM Universitas Brawijaya 2026, Group 46.

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/SyafaHadyan/balerejo-web)](https://github.com/SyafaHadyan/balerejo-web/commits/main)
[![CI](https://github.com/SyafaHadyan/balerejo-web/actions/workflows/ci.yml/badge.svg)](https://github.com/SyafaHadyan/balerejo-web/actions/workflows/ci.yml)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/SyafaHadyan/balerejo-web/pulls)
[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red.svg)](https://github.com/SyafaHadyan/balerejo-web)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/Node.js-22-green?logo=node.js)](https://nodejs.org)
[![npm](https://img.shields.io/badge/npm-11-red?logo=npm)](https://npmjs.com)
[![Repo Size](https://img.shields.io/github/repo-size/SyafaHadyan/balerejo-web)](https://github.com/SyafaHadyan/balerejo-web)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-deployed-f38020?logo=cloudflare)](https://pages.cloudflare.com)
[![Turbo](https://img.shields.io/badge/Turbo-monorepo-EF4444?logo=turborepo)](https://turbo.build)
[![Playwright](https://img.shields.io/badge/Playwright-tested-45ba4b?logo=playwright)](https://playwright.dev)

| Site | Uptime |
|------|--------|
| Main (`balerejo.com`) | [![balerejo.com uptime](https://uptime.betterstack.com/status-badges/v1/monitor/2tnsw.svg)](https://uptime.betterstack.com/?utm_source=status_badge) |
| UMKM (`umkm.balerejo.com`) | [![umkm.balerejo.com uptime](https://uptime.betterstack.com/status-badges/v1/monitor/2tnt1.svg)](https://uptime.betterstack.com/?utm_source=status_badge) |

Status page: [status.balerejo.com](https://status.balerejo.com)

This monorepo contains two separate Next.js applications deployed to their respective subdomains, along with a shared package for common components.

---

## Applications

| App | Domain | Description |
|-----|--------|-------------|
| `apps/main` | `balerejo.com` | Village profile - Beranda, Profil Desa, Infografis, Galeri |
| `apps/umkm` | `umkm.balerejo.com` | Jelajah Balerejo - UMKM catalog, Peta Digital |

## Packages

| Package | Description |
|---------|-------------|
| `packages/shared` | Shared map components (MapLibre GL via MapCN) and utilities - imported directly as source, not pre-built |

---

## Tech Stack

- **Framework** - Next.js 15 (App Router, static export)
- **Language** - TypeScript
- **Styling** - Tailwind CSS v4
- **Maps** - MapLibre GL via MapCN, OpenStreetMap tiles
- **Monorepo** - Turborepo
- **Testing** - Playwright (E2E)
- **CI/CD** - GitHub Actions + Cloudflare Pages

---

## Getting Started

### Prerequisites

- Node.js 22 or later
- npm 10 or later

### Installation

```bash
git clone https://github.com/SyafaHadyan/balerejo-web.git
cd balerejo-web
npm install
```

### Environment Variables

Each application requires its own `.env` file. Copy the example and fill in the values:

```bash
cp apps/main/.env.example apps/main/.env
cp apps/umkm/.env.example apps/umkm/.env
```

See the respective `.env.example` files for all available variables and their defaults.

### Development

Run both applications simultaneously:

```bash
npm run dev
```

Or run individually:

```bash
# Main site - http://localhost:3000
cd apps/main && npm run dev

# UMKM site - http://localhost:3001
cd apps/umkm && npm run dev
```

---

## Project Structure

```txt
balerejo-web/
├── apps/
│   ├── main/                   # balerejo.com
│   │   ├── src/
│   │   │   ├── app/            # Pages (Beranda, Profil Desa, Infografis, Galeri)
│   │   │   └── components/     # Navbar, Footer, sections
│   │   ├── public/
│   │   ├── next.config.ts
│   │   └── package.json
│   └── umkm/                   # umkm.balerejo.com
│       ├── src/
│       │   ├── app/            # Pages (/, /[slug], /peta-digital)
│       │   ├── components/     # NavbarJelajah, FooterJelajah, UmkmMap
│       │   └── data/           # Product catalog data
│       ├── public/
│       │   └── data/           # GeoJSON boundary, map styles
│       ├── next.config.ts
│       └── package.json
├── e2e/
│   ├── main/                   # E2E tests for main site
│   └── umkm/                   # E2E tests for UMKM site
├── packages/
│   └── shared/                 # @balerejo/shared
│       └── src/
│           ├── map.tsx         # MapCN components
│           └── utils.ts        # Utility functions
├── playwright.config.ts
├── turbo.json
└── package.json
```

---

## Available Scripts

Run from the repository root:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start both apps in development mode |
| `npm run build` | Build both apps for production |
| `npm run lint` | Lint all packages |
| `npm run type-check` | Type-check all packages |
| `npm run test:e2e` | Run Playwright E2E tests (headless) |
| `npm run test:e2e:ui` | Run Playwright E2E tests with interactive UI |

---

## Testing

E2E tests are written with Playwright and cover both apps across desktop and mobile (iPhone 14) viewports.

### Running locally

Make sure the dev servers are running first, then:

```bash
npm run test:e2e
```

Playwright will reuse the existing dev servers (`reuseExistingServer: true`). To open the interactive test UI:

```bash
npm run test:e2e:ui
```

### Installing browsers

Playwright uses Chromium and WebKit. Install them once after cloning:

```bash
npx playwright install chromium webkit
```

---

## CI/CD

### GitHub Actions

| Workflow | Trigger | Jobs |
|----------|---------|------|
| `ci.yml` | Every push & PR | Type check, Lint, Build |
| `checks.yml` | Every push & PR | Bundle size, Spell check |
| `e2e.yml` | Every push, PR & nightly | Playwright E2E tests |
| `lighthouse.yml` | Every push & PR | Lighthouse CI (main & UMKM) |
| `codeql.yml` | Every push, PR & weekly | CodeQL security analysis |

### Cloudflare Pages

Both applications are deployed as separate Cloudflare Pages projects from this repository.

**Main site (`balerejo-main`)**

| Setting | Value |
|---------|-------|
| Build command | `cd apps/main && npm run build` |
| Build output directory | `apps/main/out` |
| Root directory | *(leave blank)* |

**UMKM site (`balerejo-umkm`)**

| Setting | Value |
|---------|-------|
| Build command | `cd apps/umkm && npm run build` |
| Build output directory | `apps/umkm/out` |
| Root directory | *(leave blank)* |

> Cloudflare Pages runs `npm install` from the repository root, which correctly resolves all workspace dependencies including `@balerejo/shared`.

### Environment Variables

Set environment variables in each Cloudflare Pages project under **Settings > Environment Variables**. Use scope **All environments** to apply to both production and preview deployments.

Refer to `apps/main/.env.example` and `apps/umkm/.env.example` for the complete list of variables.

---

## Security

To report a vulnerability, see [SECURITY.md](SECURITY.md).

---

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
