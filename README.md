# Chaitanya Education

This repository contains a Vite + React frontend and an Express backend under `server/`.

Deployment to Vercel (Frontend)

1. Go to https://vercel.com and sign in with GitHub.
2. Import the repository `Karan-C-Patil/Chaitanya`.
3. For **Framework Preset** choose `Other` or `Vite`.
4. Set the build command to `npm run build` and the output directory to `dist` (the included `vercel.json` already configures this).
5. Deploy — Vercel will run `npm ci` and `npm run build` and serve the `dist` folder.

Notes about the backend

- The backend is an Express server at `server/server.js` that requires a MySQL database and environment variables from `.env`.
- Vercel serverless functions can be used, but the current Express server will not run as-is on Vercel without refactoring into `/api` functions or using a separate host (Render, Heroku, Railway).

If you want, I can:

- Refactor the Express API into Vercel Serverless Functions under `api/`.
- Provide a GitHub Actions workflow to build and deploy, or automated Vercel settings.
