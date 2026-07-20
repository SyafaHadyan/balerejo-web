# Balerejo Web

Official web presence for Desa Balerejo, Kecamatan Panggungrejo, Kabupaten Blitar, Jawa Timur. Built as part of MMD FILKOM Universitas Brawijaya 2026.

This monorepo contains two separate Next.js applications deployed to their respective subdomains, along with a shared package for common components.

---

## Applications

| App | Domain | Description |
|-----|--------|-------------|
| `apps/main` | `balerejo.desa.id` | Village profile - Beranda, Profil Desa, Infografis, Galeri |
| `apps/umkm` | `umkm.balerejo.desa.id` | Jelajah Balerejo - UMKM catalog, Peta Digital |

## Packages

| Package | Description |
|---------|-------------|
| `packages/shared` | Shared map components (MapCN/MapLibre GL) and utilities |

---

## Tech Stack

- **Framework** - Next.js 15 (App Router, static export)
- **Language** - TypeScript
- **Styling** - Tailwind CSS v4
- **Maps** - MapLibre GL via MapCN, OpenStreetMap tiles
- **Monorepo** - Turborepo
- **Deployment** - Cloudflare Pages

---

## Getting Started

### Prerequisites

- Node.js 20 or later
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
│   ├── main/                   # balerejo.desa.id
│   │   ├── src/
│   │   │   ├── app/            # Pages (Beranda, Profil Desa, Infografis, Galeri)
│   │   │   └── components/     # Navbar, Footer, sections
│   │   ├── public/
│   │   ├── next.config.ts
│   │   └── package.json
│   └── umkm/                   # umkm.balerejo.desa.id
│       ├── src/
│       │   ├── app/            # Pages (/, /[slug], /peta-digital)
│       │   ├── components/     # NavbarJelajah, FooterJelajah, UmkmMap
│       │   └── data/           # Product catalog data
│       ├── public/
│       │   └── data/           # GeoJSON boundary, map styles
│       ├── next.config.ts
│       └── package.json
├── packages/
│   └── shared/                 # @balerejo/shared
│       └── src/
│           ├── map.tsx         # MapCN components
│           └── utils.ts        # Utility functions
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

---

## Deployment

Both applications are deployed as separate Cloudflare Pages projects from this repository.

### Cloudflare Pages Configuration

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

## License

© 2026 Pemerintah Desa Balerejo · MMD FILKOM Universitas Brawijaya
