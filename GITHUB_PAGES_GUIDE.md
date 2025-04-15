# GitHub Pages Deployment Guide

This document provides step-by-step instructions on how to deploy your resume website to GitHub Pages.

## Option 1: Manual Deployment

1. **Build the static website**
   ```
   ./github-pages-deploy.sh
   ```
   This creates a `dist` folder with all static files.

2. **Create a new GitHub repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it something like `my-resume` or `portfolio`

3. **Initialize Git in the dist folder**
   ```
   cd dist
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Wait a few minutes for your site to be published

5. **Access your website**
   - Your website will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Option 2: Automated Deployment with GitHub Actions

1. **Push your code to GitHub**
   Initialize Git in the root folder of the project (not the dist folder):
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **The included GitHub Action will automatically:**
   - Build your website
   - Deploy it to the gh-pages branch
   - Make it available on GitHub Pages

3. **Enable GitHub Pages for the gh-pages branch**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "gh-pages" branch
   - Click "Save"

4. **Access your website**
   - Your website will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Custom Domain (Optional)

To use a custom domain:

1. Purchase a domain from a domain registrar (e.g., Namecheap, GoDaddy)
2. In your repository settings, under Pages:
   - Enter your custom domain name
   - Click "Save"
3. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub's IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `YOUR_USERNAME.github.io`

## Updating Your Website

Whenever you want to update your website:

1. Make your changes to the codebase
2. If using manual deployment:
   - Run `./github-pages-deploy.sh` again
   - Push the new dist folder to GitHub
3. If using GitHub Actions:
   - Simply commit and push your changes to the main branch
   - The actions workflow will automatically rebuild and redeploy

## Troubleshooting

If your website is not appearing:
- Check that GitHub Pages is enabled in repository settings
- Ensure your repository is public
- Wait a few minutes for changes to propagate
- Check for any errors in the GitHub Actions tab

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)