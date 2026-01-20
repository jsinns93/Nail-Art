# Shanail.co - Luxury Nail Art & Beauty

## Overview
A luxury nail art and beauty website built with React, TypeScript, and Vite. Features an AI Stylist powered by Google Gemini that suggests nail art designs based on outfits or moods.

## Tech Stack
- Frontend: React 19, TypeScript, Vite
- Styling: Tailwind CSS (via CDN)
- AI: Google Gemini API (@google/genai)
- Icons: Lucide React

## Project Structure
```
/
├── App.tsx           # Main application component
├── index.html        # HTML entry point
├── index.tsx         # React entry point
├── vite.config.ts    # Vite configuration
├── components/       # React components
├── services/         # API services (Gemini)
├── types.ts          # TypeScript types
└── constants.tsx     # App constants
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
