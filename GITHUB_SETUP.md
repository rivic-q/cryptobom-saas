# GitHub Repository Setup Guide

## 1. Create GitHub Repository

1. Go to [github.com](https://github.com) and log into your account
2. Click "New repository" or go to https://github.com/new
3. Repository name: `rivic-saas` (or your preferred name)
4. Description: `Quantum-Safe Banking Security Platform for EU Financial Services`
5. Make it **Public** (required for GitHub Pages free tier)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## 2. Add Remote and Push

After creating the repository, run these commands in your terminal:

```bash
cd "/Users/ande/Downloads/Rivic Saas main"

# Add your GitHub repository as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/rivic-saas.git

# Push to GitHub
git branch -M main
git push -u origin main
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

## 7. Site URLs

After deployment, your site will be available at:
- Main site: `https://USERNAME.github.io/rivic-saas/`
- Blog: `https://USERNAME.github.io/rivic-saas/blog`
- Demo: `https://USERNAME.github.io/rivic-saas/demo`
- Documentation: `https://USERNAME.github.io/rivic-saas/docs`

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
