# Professional Resume Website

A professional and responsive resume website built with React and designed to be hosted on GitHub Pages.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Beautiful animations and transitions using Framer Motion
- Organized sections for experience, education, skills, and projects
- Contact form with client-side validation
- Downloadable resume PDF
- Easy to customize through a central data file

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn UI Components
- React Hook Form with Zod validation

## Getting Started

### Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open http://localhost:5000 in your browser

### Customizing Content

All personal information is stored in `client/src/data/resumeData.ts`. Edit this file to update:

- Personal information (name, title, contact details)
- Work experiences
- Education
- Skills
- Projects

### Deploying to GitHub Pages

1. Run the build script to create a static version of the website:
   ```
   ./github-pages-deploy.sh
   ```
2. Follow the instructions provided by the script to deploy to GitHub Pages.

## Project Structure

- `client/src/components/` - React components for each section of the resume
- `client/src/data/` - Data files containing resume content
- `client/src/hooks/` - Custom React hooks
- `client/src/pages/` - Page components
- `public/assets/` - Static assets like PDFs and images

## Customization

### Styling

The website uses Tailwind CSS for styling. The primary colors and theme can be modified in:

- `theme.json` - For primary color and theme settings
- `tailwind.config.ts` - For advanced Tailwind configuration

### Adding New Sections

To add a new section to the resume:

1. Create a new component in `client/src/components/`
2. Add relevant data to `client/src/data/resumeData.ts`
3. Import and add the component to `client/src/pages/Resume.tsx`

## License

MIT