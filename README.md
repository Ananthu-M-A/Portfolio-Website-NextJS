# Personal Portfolio Website

> A showcase of full-stack development skills and projects.

![CI](https://github.com/Ananthu-M-A/Portfolio-Website-NextJS/actions/workflows/ci.yml/badge.svg) ![license](https://img.shields.io/badge/license-Proprietary-blue)

## About

This portfolio showcases my skills, projects, and experience as a full-stack engineer and technical trainer. It is a single-page Next.js App Router site, server-rendered by default, with small client components only where interaction is needed.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)
- [Author](#author)

## Features

- Project case studies (problem, architecture, decisions, scaling, teaching value)
- Teaching and engineering "dual-value" sections
- Grouped tech stack and certifications
- Pre-filled email inquiries and a copy-email fallback
- Downloadable resume
- SEO: metadata API, JSON-LD, generated Open Graph image, `robots.txt` and `sitemap.xml`
- Accessible navigation (skip link, active-section highlighting, keyboard-friendly mobile menu)
- Vercel Analytics

## Tech Stack

- Next.js 16 (App Router, Server Components)
- React 19 and TypeScript
- Tailwind CSS
- lucide-react icons
- Vercel (hosting and analytics)

## Project Structure

```
app/                 layout, page, 404, robots, sitemap, OG image
components/          Navbar, Spotlight, ContactForm, CopyEmailButton, SectionHeader
components/sections/ one server component per page section
config/projects.ts   project case studies and "More builds" (from GitHub repos)
config/constants.ts  other site content (stack, testimonials, certifications, contact)
lib/mailto.ts        mailto link helpers
public/              resume, profile photo, project screenshots (WebP)
```

Most content changes only require editing `config/projects.ts` or `config/constants.ts`.

## Getting Started

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/Ananthu-M-A/Portfolio-Website-NextJS.git
cd Portfolio-Website-NextJS
cp .env.example .env   # then fill in your links
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command             | Description                     |
| ------------------- | ------------------------------- |
| `npm run dev`       | Start the development server    |
| `npm run build`     | Create a production build       |
| `npm start`         | Serve the production build      |
| `npm run lint`      | Run ESLint                      |
| `npm run typecheck` | Run the TypeScript compiler     |

## Deployment

The site is deployed on Vercel. Add the variables from `.env.example` to the Vercel project's environment settings; they are inlined at build time, so redeploy after changing them. Analytics appear once Web Analytics is enabled for the project in the Vercel dashboard.

GitHub Actions (`.github/workflows/ci.yml`) runs lint, type-check and build on every push and pull request.

## License

This project is licensed under Proprietary terms. Specific licensing details will be provided upon request. Contact the author for more information.

## Author

**Ananthu M A**

- GitHub: [Ananthu-M-A](https://github.com/Ananthu-M-A)
- Portfolio: [https://ananthuma.com](https://ananthuma.com)
- Email: ananthumapookkad@gmail.com
