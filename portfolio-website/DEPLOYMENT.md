# GitHub Pages Deployment Guide

## Option 1: GitHub Actions (Recommended - Automatic)

This repository is set up with GitHub Actions to automatically deploy when you push to the `main` branch.

### Steps:

1. **First, commit and push the workflow file:**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment workflow"
   git push origin main
   ```

2. **Enable GitHub Pages in repository settings:**
   - Go to: https://github.com/Blacklotus89898/Portfolio/settings/pages
   - Under **Source**, select **GitHub Actions** (NOT "Static HTML" or "Jekyll")
   - If you see suggested workflows, you can ignore them - our custom workflow will be used
   - Save

3. **Check the Actions tab:**
   - Go to the **Actions** tab in your repository
   - You should see "Deploy to GitHub Pages" workflow running
   - Wait for it to complete (green checkmark)

4. **Your site is live!**
   - After the workflow completes, your site will be available at:
   - `https://blacklotus89898.github.io/Portfolio/`
   - It may take a few minutes for the first deployment

5. **Future updates:**
   - Just push to `main` branch and it will automatically redeploy!

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

