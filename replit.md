# Jezmer Kyle Ramos - Portfolio Website

## Overview
A personal portfolio website for Jezmer Kyle Gliponeo Ramos, a Web3 Developer and Blockchain Engineer. The site is a single-page application showcasing skills, education, and contact information with a dark, cyberpunk-inspired aesthetic.

## Architecture
- **Frontend**: React + TypeScript with Vite
- **Backend**: Express.js (minimal, serves static content)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion for scroll and entrance animations
- **Routing**: wouter (single page, no sidebar needed)

## Key Files
- `client/src/pages/home.tsx` - Main portfolio page with all sections (Hero, About, Skills, Education, Differentiator, Contact, Footer)
- `client/src/App.tsx` - App root with routing
- `client/src/index.css` - Theme tokens (dark-first Web3 aesthetic, purple primary, Space Grotesk font)
- `client/index.html` - SEO meta tags and Google Fonts

## Design Decisions
- Dark mode by default (applied via `document.documentElement.classList.add("dark")`)
- Color palette: Purple primary (#7c3aed-ish via HSL 258 90% 62%), with cyan and pink accents
- Font: Space Grotesk (sans), JetBrains Mono (mono), Playfair Display (serif)
- Particle field and floating orbs for visual depth
- Code editor mockup in About section
- Grid background pattern for tech feel
- No database needed - pure static content
