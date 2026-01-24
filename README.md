# Web CV

Live at [tomaskoli.com](https://tomaskoli.com) (deployed on Cloudflare)

## Tech Stack

- Vue 3 (Composition API with `<script setup>`)
- TypeScript
- Vite
- YAML for content management

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── corporate/    # Corporate theme components
│   ├── developer/    # Developer theme components
│   └── layout/       # Layout components (header, sidebar, main)
├── composables/      # Vue composables (useCvData, useTheme)
├── content/          # YAML files with CV data
├── styles/           # CSS variables and theming
└── types/            # TypeScript type definitions
```

## Customization

Edit the YAML files in `src/content/` to update your CV information:

- `personal.yaml` - Name, links, location
- `summary.yaml` - Professional summary
- `experience.yaml` - Work experience
- `education.yaml` - Education history
- `skills.yaml` - Technical skills and competencies
- `certificates.yaml` - Certifications
- `languages.yaml` - Spoken languages
