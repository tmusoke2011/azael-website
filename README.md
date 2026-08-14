# Azael Public Website v1

Production-oriented Next.js implementation of the approved Azael public website.

## Routes
- `/` — Home
- `/enterprise-intelligence`
- `/capital-intelligence`
- `/how-azael-works`
- `/about`
- `/explore-the-fit`
- `/privacy` and `/terms` — launch placeholders

The deeper **Prepare for Capital** and **Access Quality Pipeline** journeys are intentionally not implemented yet.

## Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- `next/font` for Poppins + Inter

## Run locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Production assets
The current landscape hero assets are cropped from the approved Azael design concepts generated during the design process. They are local, optimized JPGs and can be swapped later without changing page structure.

## Deployment
Designed for Vercel. After dependencies install successfully:
```bash
npm run build
```
Then deploy the repository to Vercel.
