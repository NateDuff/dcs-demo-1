# GitHub Copilot Instructions for VitePress Demo Site

This is a demo site for **Duff Cloud Services (DCS)** CMS integration. It showcases the VitePress framework with runtime content management.

## Project Overview

- **Framework**: VitePress
- **CMS Package**: `@duffcloudservices/cms`
- **Site Slug**: `demo`
- **Purpose**: Demonstration of DCS CMS content editing capabilities

## Technology Stack

- VitePress 1.5+ (Vue-based static site generator)
- Tailwind CSS for styling
- DCS CMS integration for runtime content management
- TypeScript for type safety

## How This Site Works

### Content Management

This site uses DCS's CMS system where text content can be edited at runtime without code changes:

1. **Default content** is defined in components using `useTextContent()`
2. **Runtime overrides** are loaded from the DCS API based on `VITE_SITE_SLUG`
3. **Portal users** can edit text via the DCS Portal without deploying

### Text Key Pattern

```vue
const { text } = useTextContent({
  'hero.title': 'Welcome to Our Site',
  'hero.subtitle': 'Build amazing things'
})
```

- Text keys are hierarchical: `component.element.modifier`
- Default values render during SSG/SSR
- Overrides take precedence at runtime

## Project Structure

```
docs/
├── .vitepress/
│   └── config.ts    # VitePress configuration
├── index.md         # Home page
└── about.md         # About page
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview the built site
pnpm preview
```

## Making Changes

### For Copilot (Automated)

When processing development requests:

1. **Read this file first** for project patterns
2. **Use `useTextContent()`** for any user-editable text
3. **Follow existing component patterns** in the codebase
4. **Run `pnpm build`** to verify changes compile

### Text Key Guidelines

When adding new editable text:

- Use descriptive, hierarchical keys: `section.element.purpose`
- Provide meaningful default values
- Keep keys consistent with component names

## Deployment

Deployments use GitHub Actions triggered by pushes to `master` or `release/**` branches.
The site is hosted on Azure Blob Storage with static website hosting enabled.

## DCS Integration Files

| File | Purpose |
|------|---------|
| `.dcs/site.yaml` | Site configuration (slug, storage account) |
| `.dcs/pages.yaml` | Page definitions for portal visual editor |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_BACKEND_URI` | DCS Portal API URL |
| `VITE_SITE_SLUG` | Site identifier for content loading |

## Important Notes

1. **This is a PUBLIC repository** - do not add secrets or sensitive data
2. **Demo content only** - use placeholder text, not real customer data
3. **MIT License** - all code is open source

## Support

For questions about DCS integration:
- **Portal**: https://portal.duffcloudservices.com
- **Documentation**: https://docs.duffcloudservices.com
