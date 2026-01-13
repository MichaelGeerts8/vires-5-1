# Vires-5 Project - AI Coding Agent Instructions

## Project Overview

**Hybrid project** with two distinct components:

1. **Static Marketing Site** (root level) - 11 HTML pages, pure CSS, direct deployment, SEO-critical
2. **React Web Application** (`vires-5/` folder) - React 18 + Webpack, npm build pipeline

Both serve the Vires-5 ionized water brand (pH 7, redox −700 mV, antioxidant).

---

## Part 1: Static Marketing Site (Root Level)

### Architecture

- **11 HTML pages**: `index.html` (homepage), `water.html`, `redox.html`, `product.html`, `bestellen.html` (orders), plus `contact.html`, `ons.html`, `blog.html`, `faq.html`, `zalf.html`, `bedankt.html`
- **Single stylesheet**: `style.css` (276 lines) with CSS custom properties at `:root` (lines 6-30)
- **No build process**: Files deployed directly to production
- **Mobile-first** with breakpoints at 768px (tablet) and 1024px (desktop)

### Critical: SEO Implementation

Every page MUST include (see `index.html` lines 6-90 as template):

1. **Google Tag Manager**: `<!-- Google Tag Manager -->` + `<!-- GTM (noscript) -->` (GTM-N6QGCSL7)
2. **Meta tags**: `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:image`), Twitter cards
3. **Canonical URL**: `<link rel="canonical" href="https://vires-5.com/[page].html">`
4. **Structured Data (JSON-LD)**:
   - Homepage: `WebSite` + `Organization` + `Product` schemas
   - Educational pages (`water.html`, `redox.html`): `Article` schema
   - Product: `Product` schema with price `offers`
   - Order: `WebPage` with `OrderAction` schema
   - Missing (priority): FAQ (`FAQPage`), Blog (`BlogPosting`), Contact (`ContactPage`)

**Known gaps** (from DIAGNOSTIEK_RAPPORT.md):

- Meta descriptions are generic across pages—create unique, page-specific descriptions
- Canonical URLs only on homepage and `bestellen.html`—add to all 11 pages
- Alt text on images incomplete

### Forms (Email-Based)

- `bestellen.html` uses `<form method="mailto:">` with no backend—opens user's email client pre-filled
- Inline `<style>` blocks for form-specific layout (`.form-grid`, `.field`, `.split`)
- No data persistence; orders handled via email

### Contact Information (Brand Identity)

- Primary: **arie@vires-5.com**, +32 474 54 41 96 (Arie Stok, Meer, België)
- Secondary: michael@vires-5.com, +32 486 85 68 74
- Brand message: Antioxidant water, pH 7, ionization process

### When Creating New Static Pages

1. Copy `index.html` lines 1-90 (GTM + meta template)
2. Add nav link to all 11 existing pages (update `<nav>`)
3. Choose appropriate structured data schema + customize
4. Add unique meta descriptions and canonical URLs
5. Update `sitemap.xml` (last modified Dec 9, 2025)
6. Validate at validator.w3.org and schema.org Rich Results Test
7. Test at 375px, 768px, 1024px widths (DevTools responsive design)

---

## Part 2: React Application (`vires-5/` folder)

### Architecture

```
vires-5/
├── src/
│   ├── index.js              # App entry point
│   ├── pages/App.jsx         # Main React component
│   ├── styles/               # CSS files (App.css, index.css)
│   └── utils/helpers.js      # Utility functions
├── public/                   # Static assets
├── webpack.config.js         # Webpack config (port 3000, HMR enabled)
├── package.json              # Dependencies: React 18, Webpack 5
└── tests/unit/               # Jest tests
```

### Build & Development

- **Dev server**: `npm run dev` → Webpack dev-server on `http://localhost:3000` (hot reload enabled)
- **Production build**: `npm run build` → Output to `dist/bundle.js`
- **Testing**: `npm test` (Jest), `npm run test:watch` (watch mode)
- **Code quality**: `npm run lint` (ESLint), `npm run format` (Prettier)

### Code Style & Conventions

- **Indentation**: 2 spaces
- **Quotes**: Single quotes (`'`)
- **Naming**: `camelCase` for variables/functions, `PascalCase` for React components
- **Semicolons**: Required
- **Commits** (CONTRIBUTING.md): Use `feat:`, `fix:`, etc. prefix

### File Organization

- React components in `src/pages/` (e.g., `App.jsx`)
- Styles co-located: `App.jsx` + `App.css`
- Utilities in `src/utils/helpers.js`
- Tests mirror source structure: `src/component.jsx` → `tests/unit/component.test.js`

### Testing Pattern

- Use Jest + React Testing Library (from package.json)
- Test files in `tests/unit/` (e.g., `example.test.js`)
- Command: `npm test` for single run, `npm run test:watch` for development

### Common Pitfalls

- Ensure `.eslintrc.json` and `.gitignore` are respected during development
- Webpack entry is `./src/index.js` → output to `dist/bundle.js` (not `public/`)
- Dev server port is `3000` with `historyApiFallback: true` for SPA routing

---

## Workflow Summary

### For Static Site Changes

→ Edit `.html` or `style.css` → Validate HTML/SEO → Test responsive → Commit and deploy directly

### For React App Changes

→ `npm install` (if dependencies added) → Edit `src/**` → `npm run dev` (test locally) → `npm test` → `npm run lint` → `npm run build` → Commit

---
