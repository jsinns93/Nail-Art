# Shanail.co - Luxury Nail Art & Beauty

## Overview
A luxury beauty website built with React, TypeScript, and Vite. Features services for Nails, Lash, Brow, and Hair across multiple salon locations.

## Tech Stack
- Frontend: React 19, TypeScript, Vite
- Styling: Tailwind CSS (via CDN)
- Icons: Lucide React

## Project Structure
```
/
├── App.tsx           # Main application component & Footer
├── index.html        # HTML entry point
├── index.tsx         # React entry point
├── vite.config.ts    # Vite configuration
├── components/       # React components (Hero, Navbar, Services, etc.)
├── types.ts          # TypeScript types
└── constants.tsx     # App constants & Location data
```

## Development
- Run: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Environment Variables
- `GEMINI_API_KEY` - Required for AI Stylist feature

## Configuration
- Development server runs on port 5000
- Host set to 0.0.0.0 for Replit compatibility
- All hosts allowed for proxy support
