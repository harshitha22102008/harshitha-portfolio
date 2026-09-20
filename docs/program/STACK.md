# Locked Tech Stack — Harshitha Portfolio Program

One stack for every app (01–07). Variety comes from **problem domain**, not from chasing frameworks.

---

## Decision summary

| Layer | Choice | Notes |
|---|---|---|
| Language | TypeScript (strict-ish) | Same language client + server |
| UI | React 18+ | Function components |
| Bundler | Vite | Fast local DX |
| Styling | Tailwind CSS + CSS variables from `DESIGN_SYSTEM.md` | Utility + tokens |
| Routing (FE) | React Router | |
| Server | Node.js + Express | REST JSON APIs |
| Auth | JWT in `Authorization: Bearer` header | Store token in memory + `localStorage` for MVP demos |
| Password hashing | bcrypt | |
| ORM | Prisma | Migrations + typed client |
| Database (default) | **SQLite** (`file:./dev.db`) | See rationale below |
| Database (upgrade story) | PostgreSQL | Same Prisma schema provider swap when needed |
| Validation | zod (optional but recommended) | Shared request shapes |
| Charts | Recharts | StudyFlow, SpendWise, CampusPulse |
| CSV | papaparse or hand-rolled for small files | SpendWise |
| Icons | lucide-react | Consistent, no emoji UI |
| HTTP client | fetch or axios | Pick one per repo and stick to it |
| Monorepo? | **No** — sibling repos | Simpler for 1st-year Git story |

---

## SQLite + Prisma (default) — why

**Choice:** SQLite via Prisma for local demos and club interviews on a laptop.

**Why this is right for year one**

1. `npx prisma migrate dev` + a single `dev.db` file — no Docker, no Postgres install fights.  
2. She still writes **real SQL concepts**: tables, relations, foreign keys, migrations.  
3. Prisma schema is portable; switching `provider = "postgresql"` later is an explainable upgrade.  
4. Interview line: “I used SQLite so anyone can clone and run; production-scale apps often use Postgres for concurrency and hosting — same schema ideas.”

**What she must be able to say**

- Difference between SQLite (embedded file) and Postgres (server).  
- Why Prisma (migrations, type-safe queries) vs raw SQL.  
- Tradeoff: SQLite is weaker for many concurrent writers / some hostings; fine for demos and single-user-ish campus apps.

**When to use Postgres instead**

- A host forces it (e.g. some free tiers).  
- She needs simultaneous multi-user write demos and hits SQLite locks.  
Document the change in that project’s README; do not fork a second stack casually.

---

## Standard project layout (apps 02–07)

```text
project-name/
  client/                 # Vite React TS
    src/
      components/
      pages/
      lib/                # api.ts, auth.ts
      styles/tokens.css
  server/                 # Express TS
    src/
      index.ts
      routes/
      middleware/
      lib/prisma.ts
    prisma/
      schema.prisma
      seed.ts
  README.md
```

Portfolio (01) may be **client-only** until a contact form backend is needed (not required for MVP).

---

## Auth pattern (repeat everywhere)

1. `POST /api/auth/register` — hash password, create user, return `{ token, user }`.  
2. `POST /api/auth/login` — verify, return `{ token, user }`.  
3. `GET /api/auth/me` — protected.  
4. Middleware: read Bearer token, `jwt.verify`, attach `req.userId`.  

Keep payloads small. Role fields only where the domain needs them (e.g. CampusHub club admin).

---

## API conventions

- Prefix: `/api/...`  
- JSON only.  
- Errors: `{ "error": "message" }` with proper HTTP status (400/401/403/404/500).  
- No GraphQL in this program.

---

## Environment

```bash
# server/.env
DATABASE_URL="file:./dev.db"
JWT_SECRET="change-me-in-real-deploy"
PORT=5000
CLIENT_ORIGIN="http://localhost:5173"
```

Never commit real secrets. Provide `.env.example`.

---

## Scripts (suggested)

**Client:** `dev`, `build`, `preview`  
**Server:** `dev` (tsx watch), `build`, `start`, `prisma:migrate`, `prisma:seed`

Root optional `concurrently` to run both — nice to have, not required.

---

## Deployment approach

| Piece | Suggested | Notes |
|---|---|---|
| Portfolio + static FE | Vercel or Netlify | Connect GitHub repo |
| API | Render / Railway / Fly.io | Free tiers change often — pick one and document |
| SQLite on host | Fragile on ephemeral disks | Prefer: (A) demo locally + video, or (B) managed Postgres when deploying API |
| Honest MVP path | Local demo for clubs + screenshots on portfolio | Better than a broken production URL |

**Recommended story for interviews:** “Frontend is deployed; backend I run locally for demos / or hosted with Postgres.” Do not claim production scale she does not have.

### Deploy checklist (when she tries hosting)

1. Set `JWT_SECRET`, `DATABASE_URL`, `CLIENT_ORIGIN`.  
2. Run migrations on boot or release command.  
3. CORS allows the frontend origin.  
4. Smoke-test register → create one record → logout/login.

---

## Versions (flexible pins)

Prefer current stable at scaffold time; lock in each repo’s `package.json`. Do not upgrade mid-MVP without a reason.

---

## Explicitly out of stack

- Next.js (unless she later rewrites portfolio alone — not required)  
- NestJS, Django, Spring  
- MongoDB (avoid dual mental models)  
- Redux (Context + simple state is enough)  
- Docker-first workflows for every app  

---

## Learning path mapped to stack

1. React components + Tailwind → Portfolio  
2. Express routes + Prisma CRUD + JWT → StudyFlow  
3. Aggregations + files → SpendWise  
4. Relations + roles → CampusHub  
5. Status workflows → SkillSwap  
6. Seeded content + rules → CodeQuest / CampusPulse  
