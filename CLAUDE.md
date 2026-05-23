# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

GruzUvezu is a freight marketplace (cargo brokerage) for small-tonnage transport. Russian-language product, domain: gruzuvezu.online.

## Commands

### Docker (primary workflow)
```bash
cd project
docker-compose up --build      # Build and run all services
docker-compose down            # Stop
docker-compose logs -f nginx   # Follow logs for a service
```

### Frontend (local dev without Docker)
```bash
cd project/frontend
npm install
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # Production build to ./dist
```

### Backend (local dev without Docker)
```bash
cd project/backend
npm install
npm run dev      # Node with --watch flag
npm start        # Production
```

No linting or test scripts are configured.

## Architecture

Three Docker Compose services in `project/`:

1. **frontend-build** — Node 18 Alpine, runs `npm run build` (Vite), exits after producing `/dist` into the `frontend_dist` shared volume.
2. **backend** — Express 4 on port 5000, currently only has `GET /api/health`. ES modules (`type: module`).
3. **nginx** — Nginx 1.27 Alpine, serves static `/dist`, reverse-proxies `/api/*` to backend, handles SSL termination. Config at `project/nginx/default.conf`. SSL certs expected at `/etc/nginx/ssl/`.

Frontend is React 18 + React Router v6 + Tailwind CSS. `AppLayout.jsx` wraps all routes with Header/Footer. Custom Tailwind theme with brand colors is in `tailwind.config.js`.

## Known Issues

- `Home.jsx` and `Contacts.jsx` are imported in `App.jsx` but the files do not exist (deleted from git, per git status). These routes are broken.
- `PostRequest.jsx` has form state but no API call — form submission is not wired to the backend.
- Carriers data in `Carriers.jsx` is hardcoded; no `/api/carriers` backend endpoint exists.
- CORS in backend allows all origins.

## Deployment

Target: Timeweb (any Docker-capable Linux server). Place SSL certs at `nginx/ssl/fullchain.pem` and `nginx/ssl/privkey.pem`, open ports 80/443, then `docker-compose up --build -d`.
