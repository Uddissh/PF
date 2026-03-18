# Uddissh Verma — Portfolio

Modern, animated portfolio website showcasing robotics projects, full-stack development, and embedded systems expertise.

## Features

- **Dark mode** with electric amber accents
- **Smooth 2D animations** using Framer Motion
- **Responsive design** - works on all devices
- **Contact form** with backend validation
- **Project showcase** with category filtering
- **Skills section** organized by category
- **Timeline visualization** of project progression

## Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion, Vite
- **Backend**: Node.js, Express, MongoDB
- **Deployment**: Docker, nginx

## Quick Start

### Frontend

```bash
cd portfolio/frontend
npm install
npm run dev
```

Visit http://localhost:5173

### Backend

```bash
cd portfolio/backend
cp .env.example .env
# Edit .env with your settings
npm install
npm start
```

API runs at http://localhost:3001

## Docker Deployment

```bash
cd portfolio/backend
docker-compose up -d
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/uptime` | Server uptime |
| GET | `/api/projects` | List all projects |
| GET | `/api/projects/:id` | Get single project |
| POST | `/api/contact` | Submit contact form |

## Environment Variables

See `backend/.env.example` for configuration options.

## License

MIT
