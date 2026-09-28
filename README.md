# French Loaf Bakery & Cafe · Kolkata Sector-V

> Premium editorial web application for **French Loaf Bakery & Cafe**, located at Plot EN-7, Sector-V, Salt Lake Bypass, Kolkata. Featuring artisanal pastries, signature Korean garlic cream cheese buns, celebration cakes, and specialty coffee.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

---

## 🚀 Quick Setup for GitHub & Netlify

This project is pre-configured with **`netlify.toml`** and **`public/_redirects`** for seamless, zero-config deployment on Netlify directly from GitHub.

### Step 1: Push Code to GitHub

If you haven't pushed this project to your GitHub account yet, run the following commands in your terminal:

```bash
# 1. Ensure you are on the main branch
git branch -M main

# 2. Add your GitHub repository as remote origin (replace with your repo URL)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/french-loaf-bakery.git

# 3. Commit all files
git commit -m "feat: initial commit for French Loaf Bakery & Cafe"

# 4. Push to GitHub
git push -u origin main
```

---

### Step 2: Connect GitHub Repository to Netlify

1. Go to [Netlify](https://app.netlify.com/) and log in (or sign up with your GitHub account).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Choose **GitHub** as your Git provider and authorize Netlify.
4. Select your **french-loaf-bakery** repository.
5. Netlify will **automatically detect the build configuration** from the included `netlify.toml` file:
   - **Base directory:** `/` *(leave default)*
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node.js version:** `20`
6. Click **"Deploy Site"**.

> ✨ **Continuous Deployment**: Every time you commit or merge changes into the `main` branch on GitHub, Netlify will automatically build and deploy your updated site in seconds!

---

## 🛠 Project Structure & Configuration

- **`netlify.toml`**: Contains build instructions (`npm run build`, `dist`), Node 20 runtime, static asset caching headers, and SPA routing rewrites.
- **`public/_redirects`**: Ensures clean single-page app (SPA) client-side routing on Netlify with status 200 fallback (`/* /index.html 200`).
- **`vite.config.ts`**: Fast Vite 8 build pipeline with `@tailwindcss/vite` and React plugin.
- **`package.json`**: Dependencies and scripts (`build`, `dev`, `lint`, `preview`).

---

## 💻 Local Development

To run the application locally on your machine:

```bash
# Install dependencies
npm install

# Start development server on http://localhost:3000
npm run dev

# Run TypeScript check
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌟 Key Application Features

- **Korean Garlic Cream Cheese Bun Spotlight**: Rich feature highlight with warm cheese-pull visuals and ingredient breakdown.
- **Infinite Auto-Sliding Customer Reviews**: Horizontal carousel moving smoothly left-to-right with interactive pause-on-hover, speed controls, and verified Google Maps guest reviews.
- **Interactive Menu Browser**: Complete category filter (Cakes, Pastries, Korean Buns, Savory, Specialty Coffee) with prices and descriptions.
- **Product Detail Modal**: Detailed allergen guides, tasting notes, and direct order actions.
- **Visit Us & Directions**: Live operational hours (Open until 11:00 PM), direct Google Maps navigation button (`https://maps.app.goo.gl/ztVw5NEvwHSEU9BFA`), and phone link (`+91 99628 96989`).
- **Custom Inquiry Modal**: Direct reservation and bulk celebration cake inquiry form.

---

## 📄 License
MIT
