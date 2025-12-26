# GitHub Repository Setup Guide

## ✅ Repository Already Created!

Your repository is already available at: **https://github.com/rivic-q/cryptobom-saas.git**

## 🔗 Connect to Existing Repository

Since the repository already exists, you just need to connect your local code:

```bash
cd "/Users/ande/Downloads/Rivic Saas main"

# Add the existing GitHub repository as remote
git remote add origin https://github.com/rivic-q/cryptobom-saas.git

# Push to GitHub (force push since repo exists)
git branch -M main
git push -u origin main --force
```

## 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow is already configured in `.github/workflows/deploy.yml`

## 4. Update Package.json URLs

Before deploying, update the URLs in `package.json`:

```json
{
  "homepage": "https://USERNAME.github.io/rivic-saas",
  "repository": {
    "type": "git",
    "url": "https://github.com/USERNAME/rivic-saas.git"
  }
}
```

Replace `USERNAME` with your actual GitHub username.

## 5. Deploy to GitHub Pages

Once you've pushed to GitHub and enabled Pages:

```bash
# Deploy using gh-pages
npm run deploy
```

Or push any changes to main branch to trigger automatic deployment via GitHub Actions.

## 6. Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the `public` directory
2. Add your domain (e.g., `rivic.io`) to the file
3. Configure DNS with your domain provider
4. Update URLs in the codebase accordingly

## 🌐 **Your Live Site URLs**
- **Homepage**: `https://rivic-q.github.io/cryptobom-saas/`
- **Blog**: `https://rivic-q.github.io/cryptobom-saas/blog`
- **Demo**: `https://rivic-q.github.io/cryptobom-saas/demo`
- **Documentation**: `https://rivic-q.github.io/cryptobom-saas/docs`

## Troubleshooting

### If deployment fails:

1. Check GitHub Actions tab for error details
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility (18.x or later)
4. Check that `out` directory is created during build

### If pages don't load correctly:

1. Check browser console for errors
2. Verify asset paths are relative
3. Ensure `basePath` in `next.config.mjs` matches repository name
4. Clear browser cache and try again

### Common Issues:

- **404 errors**: Check that `basePath` is set correctly
- **CSS not loading**: Verify asset paths in build output  
- **JavaScript errors**: Check for environment-specific code
- **Images not displaying**: Ensure images are in `public` directory

## Repository Information

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + shadcn/ui components
- **Deployment**: GitHub Pages with static export
- **Build Output**: Static HTML/CSS/JS files
- **CI/CD**: GitHub Actions automated deployment

The site is fully static and optimized for GitHub Pages hosting.
