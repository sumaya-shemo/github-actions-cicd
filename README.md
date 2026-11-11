# Express Cloud App

A minimal Express.js project ready for cloud hosting.

## Run locally
```bash
npm install
npm start        # or: npm run dev  (auto-restarts on changes)
```
Open http://localhost:3000

## Project structure
```
server.js                      app entry point
routes/                        URL -> controller mapping
controllers/                   request/response handling
models/                        data access + seed data (products.seed.json)
public/                        static files
```

## Endpoints
- `GET /`            static page from `public/`
- `GET /api/hello`   example JSON API (`?name=You`)
- `GET /api/products`      all products from `models/products.seed.json` (optional `?category=accessories`)
- `GET /api/products/:id`  a single product
- `GET /health`      health check

## Deploy
The app reads the `PORT` environment variable and listens on `0.0.0.0`, which is what cloud platforms expect.

- **Render / Railway / Heroku / Fly.io:** push to GitHub, connect the repo.
  Build command: `npm install` · Start command: `npm start`
- **Docker-based hosts (Cloud Run, ECS, etc.):** use the included `Dockerfile`.
  ```bash
  docker build -t express-cloud-app .
  docker run -p 3000:3000 express-cloud-app
  ```
- Set a health check path to `/health` if your platform supports it.
