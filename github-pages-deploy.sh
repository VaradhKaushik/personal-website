#!/bin/bash

# Script for building and deploying the resume website to GitHub Pages

echo "Starting the GitHub Pages deployment process..."

# 1. Build the static website
echo "Building the static website..."
vite build --config vite.config.github.ts

# 2. Create/update the necessary GitHub Pages files
echo "Creating GitHub Pages specific files..."

# Create the .nojekyll file to disable Jekyll processing
touch dist/.nojekyll

echo "Static website has been built and prepared for GitHub Pages deployment!"
echo "The output is in the 'dist' directory."
echo ""
echo "===== DEPLOYMENT INSTRUCTIONS ====="
echo "To deploy to GitHub Pages:"
echo ""
echo "1. Create a GitHub repository for your resume website"
echo "2. Push the content of the 'dist' directory to the main branch or gh-pages branch of your repository"
echo "3. Enable GitHub Pages in repository settings"
echo "   - Go to Settings > Pages"
echo "   - Select the branch where you pushed the dist content"
echo "   - Set the folder to '/ (root)'"
echo "   - Click Save"
echo ""
echo "Your website will be available at: https://your-username.github.io/your-repository-name/"
echo ""
echo "For custom domain setup, refer to GitHub Pages documentation."
echo "====================================="