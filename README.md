# Lalit | React & MERN Stack Developer Portfolio

A production-grade, highly optimized, and visual-first software engineering portfolio designed to showcase projects, technical architecture, and clean development philosophies.

---

## 🛠️ Technology Stack

- **Frontend Core**: [React 19](https://react.dev/) (Strict Mode Enabled)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Interactions**: [Framer Motion v12](https://www.framer.com/motion/)
- **Build System**: [Vite v8](https://vite.dev/)
- **Smooth Scrolling**: [Lenis Scroll v1](https://lenis.darkroom.engineering/)
- **Linter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

---

## ⚡ Production Optimizations

1. **Route-Level Code Splitting**:
   - Every Case Study page module is loaded lazily using `React.lazy()` and `<Suspense>`.
   - Homepage components below the fold are split into dynamic chunks to reduce initial bundle weights.
   - Initial load remains instant as only above-the-fold elements (Loader, Hero, Navbar) are bundled statically.

2. **Manual Vendor Chunking**:
   - Rollup's manual chunks output configurations are configured in `vite.config.js` to split heavy libraries:
     - `vendor-react` (React, React-DOM runtimes for caching)
     - `vendor-framer` (Framer motion system)
     - `vendor-others` (other auxiliary libraries)

3. **Performance Throttling & Visibility Observers**:
   - Scroll updates are throttled using `window.requestAnimationFrame()` to eliminate main-thread layout thrashing from DOM size queries.
   - Typing simulators in `EngineeringWorkspace` and `DeveloperCommandCenter` utilize `IntersectionObserver` to automatically pause execution when offscreen, reducing CPU usage to 0%.

4. **Resource Hints & Fonts**:
   - Preconnected to Google Fonts hosts (`https://fonts.googleapis.com` and `https://fonts.gstatic.com` with CORS).
   - Removed render-blocking CSS `@import` statements and replaced them with preconnected HTML header `<link>` elements.

5. **Image Optimizations**:
   - Automated layout lazy loading (`loading="lazy"`) across all case study screenshots.
   - Built-in aspect ratio anchoring (`aspect-video` and `aspect-[9/19]`) on mockups to guarantee zero layout shifts before image resolution.

---

## 📁 Repository Structure

```
├── dist/                         # Production build output
├── src/
│   ├── assets/                   # Active visual assets (Favicons, Icons)
│   ├── components/               # React components
│   │   ├── case-study/           # Case study modular sections
│   │   └── ui/                   # Reusable atomic elements (Buttons, Cards, Dividers)
│   ├── constants/                # Global layout tokens, grids, spacing parameters
│   ├── data/                     # Modular dataset definitions
│   ├── App.jsx                   # Application routing and theme syncs
│   ├── index.css                 # Custom globals, scrolls, utilities
│   └── main.jsx                  # Main initialization file
├── index.html                    # Root HTML document with resource preconnections
├── package.json                  # NPM packages dependencies and scripts
└── vite.config.js                # Vite build and manual chunking rules
```

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

### Production Build & Compilation
```bash
npm run build
```

### Local Preview of Production Build
```bash
npm run preview
```

### Code Quality Check
```bash
npm run lint
```

---

## 🌐 Production Deployment & SEO Guide

Before deploying this portfolio to a production domain, make sure to customize the SEO and metadata properties located in the following configurations:

### 1. Update Production Domain & Open Graph URLs
Open [index.html](file:///C:/Users/abc/.gemini/antigravity/scratch/lalit-portfolio/index.html) and search for the following placeholder values to replace them with your actual domain URL:
- Canonical link: `<link rel="canonical" href="https://yourdomain.com" />`
- Open Graph URL: `<meta property="og:url" content="https://yourdomain.com" />`
- Twitter Card URL: `<meta property="twitter:url" content="https://yourdomain.com" />`

### 2. Update Social Preview Image
- Place your final Open Graph preview image (recommended dimensions: `1200x630` pixels) in the public folder at: `public/images/og-preview.png`.
- If you change the file type or path, update the following head elements in `index.html`:
  - `<meta property="og:image" content="https://yourdomain.com/images/og-preview.png" />`
  - `<meta property="twitter:image" content="https://yourdomain.com/images/og-preview.png" />`

### 3. Update JSON-LD Structured Data
Open the `<script type="application/ld+json">` section in `index.html` and update the personal details, social URLs, and skill configurations:
- `"url"`: Replace `"https://yourdomain.com"` with your actual site URL.
- `"sameAs"`: Replace Github (`https://github.com/yourusername`) and LinkedIn (`https://linkedin.com/in/yourusername`) profile URLs with your real profiles.

### 4. Update Sitemap & Robots Indexes
- **Sitemap**: Open [public/sitemap.xml](file:///C:/Users/abc/.gemini/antigravity/scratch/lalit-portfolio/public/sitemap.xml) and replace all occurrences of `https://yourdomain.com` with your production URL.
- **Robots**: Open [public/robots.txt](file:///C:/Users/abc/.gemini/antigravity/scratch/lalit-portfolio/public/robots.txt) and update the Sitemap URL path to your production domain: `Sitemap: https://yourdomain.com/sitemap.xml`.

---

## ⚡ Vercel Deployment Guide

To deploy this portfolio to Vercel with correct environment handling and server routing:

### Step 1: Initialize Git and Push to GitHub
If you haven't already, push the codebase to a GitHub repository:
```bash
git init
git add .
git commit -m "feat: portfolio production release"
git remote add origin https://github.com/yourusername/your-repository.git
git branch -M main
git push -u origin main
```

### Step 2: Set Up Environment Variables in Vercel
1. Log in to the [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
2. Import your GitHub repository.
3. Under the **"Environment Variables"** dropdown, add the following parameters (found in `.env.example`):
   - `VITE_EMAILJS_SERVICE_ID` (Your EmailJS Service ID)
   - `VITE_EMAILJS_TEMPLATE_ID` (Your EmailJS Template ID)
   - `VITE_EMAILJS_PUBLIC_KEY` (Your EmailJS Public API Key)
4. Leave other default build configurations as-is:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (or `vite build`)
   - **Output Directory**: `dist`

### Step 3: Configure Single Page App Redirection (Vercel Routes)
Because this application is a Single Page App (SPA), Vercel requires routing overrides to redirect all paths back to `index.html` (avoiding `404` errors when refreshing non-root paths):
- We have pre-configured routing override rules in Vercel to route traffic seamlessly. If you experience raw routing errors, create a `vercel.json` file in the project root containing:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
*(Note: Since this portfolio uses client-side Hash Routing `#/projects/...`, standard requests automatically map directly to `index.html` without needing custom rewrites, making it 100% resilient out-of-the-box!)*

### Step 4: Deploy
Click **"Deploy"**. Vercel will build the optimized production bundles and allocate a secure SSL domain link.


