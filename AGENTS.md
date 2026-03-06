
# Portfolio Project Rules & Guidelines

## Project Overview

This is a personal portfolio website built with **Astro** and **TailwindCSS**, featuring a clean design inspired by the Dracula theme. The project follows a modular architecture with internationalization support and theme switching capabilities.

## Core Requirements

### Design System
- **Dark Mode**: Primary color is purple (Implemented )
- **Light Mode**: Primary color is pink (TODO)
- Clean, minimal design showcasing work and skills
- Responsive design for all screen sizes

### Features
- **Internationalization**: English and Spanish support (TODO)
- **Blog**: Markdown-based blog system (TODO)
- **Landing Page**: Introduction, social media links
- **Projects Page**: Project showcase with external links (TODO)
- **Certificates Page**: Certificates showcase (TODO)
- **Theme Switching**: Dark/light mode toggle (Implemented)

### Content Management
- All content stored in markdown files
- Modular content structure
- SEO-optimized pages

## Architecture Guidelines

### Tech Stack
- **Framework**: Astro
- **Styling**: TailwindCSS
- **Architecture**: Screaming Architecture (modular approach)
- **Content**: Markdown files with frontmatter

### File Organization
```
src/
├── components/          # Reusable UI components
├── layouts/            # Page layouts
├── pages/              # Astro pages
├── content/            # Markdown content (blog, projects, etc.)
├── styles/             # Global styles and Tailwind config
├── utils/              # Helper functions
└── i18n/               # Translation files
```

### Code Standards
- Use TypeScript for type safety
- Follow Astro best practices
- Component-based development
- Semantic HTML5 structure
- Accessibility compliance (WCAG 2.1)

## Development Workflow

### Development Server
```bash
npm run dev
# or pnpm dev, yarn dev
```
- Always use development server while iterating
- Hot-reload is enabled for fast development
- **NEVER** run `npm run build` during development

### Code Quality
Before committing changes, always run:
```bash
npm run lint
npm run test
```

### Git Workflow
- Create feature branches for new functionality
- Write descriptive commit messages
- Ensure all tests pass before PR
- Request code review for significant changes

## Content Management

### Blog Posts
- Stored in `src/content/blog/`
- Markdown format with frontmatter
- Support for images and code blocks
- Automatic slug generation

### Projects
- Stored in `src/content/projects/`
- Include description, tech stack, links
- Thumbnail images support
- Categories and tags

### Internationalization
- Translation files in `src/i18n/`
- Support for en.json and es.json
- Dynamic language switching
- URL-based language routing

## Styling Guidelines

### TailwindCSS Configuration
- Custom color palette for themes
- Responsive breakpoints
- Component-specific utilities
- Dark mode variants

### CSS Architecture
- Utility-first approach
- Custom CSS for complex components
- CSS variables for theme switching
- Minimal custom styles

## Performance Optimization

### Astro Optimizations
- Static site generation where possible
- Image optimization
- Code splitting
- Minimal JavaScript

### Best Practices
- Lazy loading for images
- Optimized fonts
- Minimal dependencies
- Efficient markdown processing

## Deployment Considerations

### Build Process
```bash
npm run build  # Only outside development session
```
- Static site generation
- Asset optimization
- Sitemap generation
- RSS feed for blog

### Environment Setup
- Environment variables for sensitive data
- Production configuration
- CI/CD pipeline readiness

## Security Guidelines

- No sensitive data in client-side code
- Input validation for forms
- Secure external links
- CSP headers configuration
