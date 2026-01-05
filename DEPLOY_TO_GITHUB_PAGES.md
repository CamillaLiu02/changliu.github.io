# Deploying to GitHub Pages

Your portfolio is now configured to deploy to GitHub Pages! Follow these steps:

## Prerequisites
- Your project pushed to GitHub
- Node.js installed locally

## Setup Steps

### 1. Initialize Git Repository (if not already done)
```bash
cd /Users/liuchang/Desktop/Website/portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 2. Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Select **Deploy from a branch**
   - Choose **gh-pages** branch
   - Select **/root** folder
4. Save

### 3. Automatic Deployment (Recommended)
The GitHub Actions workflow will automatically build and deploy when you push to `main`:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

The workflow file at `.github/workflows/deploy.yml` will:
- Build your Next.js project
- Export it as static HTML
- Deploy to the `gh-pages` branch

### 4. Manual Deployment (Alternative)
If you prefer to deploy locally:

```bash
npm install
npm run build
```

Then manually push the `out` folder or use the deploy script.

## Configuration Details

### What Changed
- **next.config.mjs**: 
  - Added `output: 'export'` for static HTML export
  - Added `basePath: '/portfolio'` (adjust if your repo name differs)
  - Added `unoptimized: true` for image optimization
  
- **package.json**: 
  - Added `gh-pages` package
  - Added deploy script

### Important Notes
- **Base Path**: Currently set to `/portfolio`. If your GitHub repo is named differently, update `basePath` in `next.config.mjs`
- **Custom Domain**: If using a custom domain, uncomment and set the `cname` field in `.github/workflows/deploy.yml`
- **Build Time**: First deploy may take 2-3 minutes

## Verify Deployment
Your site will be available at:
- `https://YOUR_USERNAME.github.io/portfolio`

You can check the deployment status in the **Actions** tab of your GitHub repository.

## Troubleshooting
- **404 errors**: Ensure `basePath` matches your repository name
- **Images not loading**: Check that image paths use the `basePath` correctly
- **Build fails**: Check GitHub Actions logs in the **Actions** tab
