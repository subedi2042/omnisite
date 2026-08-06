# OmniSite

OmniSite is a website and operations platform for small businesses, churches, and nonprofit organizations. It combines a guided, protected site editor with an optional done-for-you service workflow.

## Current MVP

- Public product and pricing website
- Responsive starter-theme showcase
- Customer dashboard with launch status and activity
- Easy Edit task flows for routine content updates
- Advanced website structure and theme workspace
- Draft and published-state controls
- Managed-service project review workspace
- Privacy-conscious analytics concept
- Organization and website settings

Commerce, appointments, events, giving, and people management are represented as staged product modules and are not presented as completed production capabilities.

## Technology

- React 18
- TypeScript
- Vite
- Lucide icons
- Plain CSS design system

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run build
```

## Repository structure

```text
src/
  components/
    MarketingHome.tsx
    PlatformWorkspace.tsx
  data/
    themeDataFactory.ts
    themesManifest.ts
  types/
  App.tsx
  index.css
```

## Product direction

The MVP follows the OmniSite product blueprint: safe structured content, separate Easy Edit and Advanced Edit modes, human service collaboration, version-aware publishing, customer ownership, accessible defaults, and staged transactional modules.

## Deployment

The project builds to the `dist/` directory and can be deployed to any static host that supports Vite applications, including GitHub Pages, Cloudflare Pages, Netlify, and Vercel.

## Status

This repository is an interactive front-end MVP. Authentication, durable multi-tenant storage, payment processing, domains, transactional workflows, server-side authorization, and production publishing infrastructure must be implemented before commercial use.

