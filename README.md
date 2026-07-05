# Shaurya Pandey Portfolio

A full-stack MERN portfolio for Shaurya Pandey, built with React, Vite, Express, and MongoDB.

## Features

- Recruiter-friendly portfolio sections for profile, skills, projects, experience, education, awards, and contact.
- `backend/` API that can be started directly with `node server.js`.
- Contact API with validation and MongoDB persistence.
- Optional SMTP email notification hook for contact form submissions.
- Render-ready single service deployment where Express serves the built React app.

## Local Setup

```bash
npm install
npm run dev
```

The React app runs on `http://localhost:5173` and proxies `/api` requests to the Express server on `http://localhost:5000`.

To run only the backend:

```bash
cd backend
node server.js
```

For a production-style local run:

```bash
npm run build
npm start
```

## Environment

Copy `.env.example` to `.env` and set `MONGODB_URI` before using the contact form with persistence.

```bash
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/shaurya_portfolio
CLIENT_ORIGIN=http://localhost:5173
```

## Deployment

Use `render.yaml` or create a Render Web Service with:

- Build command: `npm install && npm run build`
- Start command: `npm start`
- MongoDB Atlas connection string in `MONGODB_URI`
