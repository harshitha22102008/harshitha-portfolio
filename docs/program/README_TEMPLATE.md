# README Template (required for every project)

Copy this into each project’s `README.md`. Replace bracketed placeholders. Keep sections even if short — empty sections look worse than “None yet.”

Screenshots: put images in `docs/screenshots/` inside that repo and link them relatively.

---

```markdown
# [Project Name]

> One-line pitch for club interviews.

**Author:** Harshitha  
**Stack:** React · TypeScript · Vite · Tailwind · Node/Express · Prisma · SQLite · JWT  
**Status:** MVP complete | In progress | Scaffold only

## Problem

[Who has what pain? 2–4 sentences. Campus/student context preferred.]

## Why this project

[Why she built it — learning goal + personal motivation. Not “because it looked cool.”]

## Features (MVP)

- [ ] Feature 1 — …
- [ ] Feature 2 — …
- [ ] Feature 3 — …

## Features (Future)

- Messaging / …
- …

## Architecture

[2–6 sentences + optional ascii diagram]

Example:

```
client (React) --JWT--> server (Express) --> Prisma --> SQLite
```

Describe main folders: `client/`, `server/`, `prisma/`.

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | React + TS + Vite + Tailwind |
| Backend | Node + Express + TS |
| DB | SQLite via Prisma |
| Auth | JWT + bcrypt |

## Database

List models and important fields / relations:

- User — …
- … — …

Mention migration command: `npx prisma migrate dev`

## APIs

| Method | Path | Auth | Description |
|---|---|---|---|
| POST | /api/auth/register | No | … |
| POST | /api/auth/login | No | … |
| GET | /api/… | Yes | … |

## Challenges

1. **[Title]** — what went wrong, how she fixed it.  
2. **[Title]** — …

## What I learned

- …
- …

## Future work

- …
- …

## Screenshots

| Screen | Image |
|---|---|
| Home / Dashboard | ![dashboard](./docs/screenshots/dashboard.png) |
| … | … |

## Demo

- **Live frontend:** [url or “local only”]  
- **API:** [url or “local only”]  
- **Local:** see Setup below  
- **Video (optional):** [link]

## Setup (local)

### Prerequisites

- Node.js 20+  
- npm

### Server

```bash
cd server
cp .env.example .env
npm install
npx prisma migrate dev
npx prisma db seed   # if available
npm run dev
```

### Client

```bash
cd client
cp .env.example .env   # VITE_API_URL=http://localhost:5000
npm install
npm run dev
```

Open the Vite URL (usually http://localhost:5173).

## Repo

- GitHub: https://github.com/[username]/[repo-name]
- Portfolio card: linked from Harshitha’s portfolio
```

---

## Review checklist before marking MVP done

- [ ] All required sections present  
- [ ] Setup commands actually work on a clean clone  
- [ ] At least 2 screenshots  
- [ ] APIs table matches real routes  
- [ ] Challenges are real (not “I learned a lot”)  
- [ ] Future list absorbs cut scope from the program plan  
