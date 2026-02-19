# GitHub Pages Deployment Guide

## Option 1: GitHub Actions (Recommended - Automatic)

This repository is set up with GitHub Actions to automatically deploy when you push to the `main` branch.

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in repository settings:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save

3. **That's it!** After pushing, GitHub Actions will automatically:
   - Build your site
   - Deploy it to GitHub Pages
   - Your site will be available at: `https://yourusername.github.io/Portfolio/`

## Option 2: Manual Deployment with gh-pages

If you prefer manual deployment:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select branch: `gh-pages` and folder: `/ (root)`
   - Save

## Important Notes:

- The base path is set to `/Portfolio/` in `vite.config.js`
- If your repository name is different, update the `base` path in `vite.config.js`
- After deployment, your site URL will be: `https://yourusername.github.io/Portfolio/`
- Make sure all your internal links use relative paths (they already do!)

## Troubleshooting:

- If assets don't load, check that the `base` path in `vite.config.js` matches your repository name
- Clear browser cache after deployment
- Check GitHub Actions tab for build errors

