# Portfolio Improvement Plan

## Phase 1: Infrastructure & Content System

### 1.1 Set up Astro Content Collections
- Create `src/content/config.ts` with schemas for:
  - `blog` - title, description, date, image, tags, draft
  - `projects` - title, description, image, technologies[], links {demo, repo}, featured
  - `certificates` - title, date, entity, description, link, image

### 1.2 Create Markdown Content Files
- Create `src/content/blog/` with 2-3 sample posts
- Create `src/content/projects/` with 3-4 sample projects
- Create `src/content/certificates/` with your existing certificates

---

## Phase 2: Theme System

### 2.1 Update TailwindCSS Configuration
- Add light mode color palette (pink-based primary)
- Keep dark mode colors (Dracula purple-based)
- Configure `darkMode: 'class'` strategy

### 2.2 Create Theme Toggle Component
- Component: `src/components/ThemeToggle.astro`
- Features:
  - Detect system preference on first load
  - Store user preference in localStorage
  - Toggle button in navbar
  - Smooth transition between themes

---

## Phase 3: Navigation Improvements

### 3.1 Enhance Header Component
- Add theme toggle button (sun/moon icons)
- Update links: Home, Blog, Projects, Certificates
- Add mobile hamburger menu
- Smooth scroll behavior

### 3.2 Update Footer
- Add links to new pages (Blog, Projects, Certificates)
- Consistent styling with header

---

## Phase 4: Home Page Improvements

### 4.1 Contact Form
- Create `src/components/ContactForm.astro`
- Form fields: name, email, subject, message
- On submit: opens mailto link with filled fields
- Styling matching Dracula theme

### 4.2 Update Hero Section
- Add "Contáctame" CTA button that scrolls to form

### 4.3 Refactor Experience Section
- Move to markdown content (`src/content/experience/`)
- Load dynamically

---

## Phase 5: New Pages

### 5.1 Certificates Page (`/certificates`)
- New file: `src/pages/certificates.astro`
- Load from content collection
- Timeline layout with all certificates
- Link to verification URLs

### 5.2 Blog Page (`/blog`)
- New file: `src/pages/blog/index.astro` - list of posts
- New file: `src/pages/blog/[slug].astro` - individual post
- Post list with cards (image, title, date, excerpt, tags)
- Individual post: full markdown rendering
- Tags support

### 5.3 Projects Page (`/projects`)
- New file: `src/pages/projects.astro`
- Grid layout with project cards
- Each card shows: image, title, description, tech tags
- Links to demo/repo (open in new tab)

---

## Phase 6: GSAP Animations

### 6.1 Enhance Animations
- Add entrance animations for sections
- Staggered animations for lists (certificates, projects)
- Hover effects with GSAP
- Page transition animations (optional - requires View Transitions)

### 6.2 Animation Components
- Create reusable animation directives or components

---

## Phase 7: Refactoring & Clean Code

### 7.1 Modular Architecture
- Extract common patterns into reusable components
- Create `src/components/ui/` for buttons, cards, tags
- Create `src/components/layout/` for section wrappers

### 7.2 Best Practices
- Use TypeScript interfaces for content schemas
- Consistent import ordering
- Semantic HTML
- Accessibility (aria-labels, focus states)

---

## File Structure After Implementation

```
src/
├── components/
│   ├── ui/           # Button, Card, Tag, etc.
│   ├── layout/       # SectionWrapper, etc.
│   ├── icons/        # Existing icons
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ContactForm.astro
│   ├── ThemeToggle.astro
│   └── ...
├── content/
│   ├── config.ts
│   ├── blog/         # .md files
│   ├── projects/     # .md files
│   ├── certificates/ # .md files
│   └── experience/   # .md files
├── layouts/
│   ├── Layout.astro
│   └── BuildingPage.astro
├── pages/
│   ├── index.astro
│   ├── blog/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── projects.astro
│   └── certificates.astro
└── styles/
    └── global.css
```

---

## Priority Order

1. **Phase 1** - Content System (foundation)
2. **Phase 2** - Theme System
3. **Phase 3** - Navigation
4. **Phase 5** - New Pages (Blog, Projects, Certificates)
5. **Phase 4** - Home Page Improvements
6. **Phase 6** - GSAP Animations
7. **Phase 7** - Refactoring
