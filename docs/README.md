# Starlasu Documentation

This directory contains the Docusaurus-based documentation for the Starlasu project.

## Getting Started

### Prerequisites

- Node.js 18.0 or above
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

This will start the documentation site at [http://localhost:3000](http://localhost:3000).

### Building

Build the documentation for production:

```bash
npm run build
```

### Serving

Serve the built documentation locally:

```bash
npm run serve
```

## Project Structure

- `docs/` - Documentation markdown files
- `src/` - React components and pages
- `static/` - Static assets (images, etc.)
- `docusaurus.config.ts` - Docusaurus configuration
- `sidebars.ts` - Sidebar navigation configuration

## Adding Content

### New Documentation Pages

1. Create a new markdown file in the `docs/` directory
2. Add frontmatter with metadata (id, title, sidebar_label)
3. Update `sidebars.ts` to include the new page
4. Add any necessary images to `static/img/`

### Updating Navigation

Edit `sidebars.ts` to modify the documentation structure and navigation.

## Deployment

The documentation can be deployed to GitHub Pages or any static hosting service using the built files from `npm run build`.
