# Harshitha Portfolio Program — Refined Plan

**Audience:** 1st-year B.Tech, club interviews, “I built this and can explain it.”  
**Name spelling:** **Harshitha** (matches repo `harshitha-portfolio`). Alternate “Harshita” may appear in speech; keep code, folders, and GitHub handles consistent with **Harshitha**.

**Goal:** One personal hub + 6 project MVPs that prove she ships, understands layers (UI → API → DB), and has growth potential — not fake senior polish she cannot defend.

---

## What was tweaked (and why)

| Original | Tweak | Why |
|---|---|---|
| 7 heavy full-stack apps | Same 7 titles; each cut to a **complete MVP** | Finishable in a semester; every feature must be interview-explainable |
| PostgreSQL default | **SQLite + Prisma** for demos; Postgres noted as upgrade path | Zero Docker/ops tax for a 1st-year laptop demo; she can still explain SQL, ORM, and “why prod might use Postgres” |
| CampusHub messaging / rich social | Out of MVP → Future | Auth + clubs + events is enough vertical slice |
| SkillSwap complex matching / chat | Simple request/accept + profiles → Future for chat/matching algo | Avoid fake ML / incomplete chat |
| CodeQuest judge / many languages | Curated quiz + progress XP only | Real online judges are out of scope |
| CampusPulse “intelligence” / ML recs | **Rule-based** recommendations | Honest “capstone glue,” not fake AI |
| Separate stacks per project | **One locked stack** for all | Reuse patterns; deeper explanation > shiny variety |
| Portfolio as last polish | Portfolio **first shell**, then refreshed after projects | Hub exists early; content stays real |

---

## Locked stack (summary)

- **Frontend:** React + TypeScript + Vite + Tailwind CSS  
- **Backend:** Node.js + Express + TypeScript  
- **Auth:** JWT (access token; refresh optional / Future)  
- **DB:** SQLite file + **Prisma** ORM (local demo default)  
- **Charts:** Recharts (or Chart.js) where needed  
- **Deploy:** Frontend on Vercel/Netlify; API + SQLite on Railway/Render **or** demo via screen recording + local `npm run dev` if free hosting fights SQLite  

Full detail: [`STACK.md`](./STACK.md). UI rules: [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md).

---

## Progression narrative (01 → 07)

Build in this order. Each project adds one “new skill layer” she can name in interviews.

### 01 — Personal Portfolio 2.0 (`harshitha-portfolio`)

**Role:** Public hub for About, skills, project cards, resume link, contact.  
**MVP:** Static-ish React site (no backend required). Sections: Hero, About, Projects (links to sibling repos/demos), Skills, Contact. Shared design tokens from `DESIGN_SYSTEM.md`.  
**New skills:** Layout, responsive UI, routing, deploying a frontend.  
**Not in MVP:** CMS, blog engine, auth, animations that she cannot explain.  
**Later refresh:** After projects 02–07 ship, update cards with real screenshots and live links.

### 02 — StudyFlow

**Role:** Study / productivity tracker with simple charts.  
**MVP:** Register/login → create subjects → log study sessions (duration, date, subject) → dashboard totals + bar/line chart of hours over time.  
**New skills:** First full-stack CRUD + JWT + Prisma models + charts.  
**Cut → Future:** Pomodoro timer, spaced repetition, social leaderboards, calendar sync.

### 03 — SpendWise

**Role:** Personal finance tracker + visualization + CSV.  
**MVP:** Auth → categories → add expenses/income → monthly summary chart → **export CSV** + **import CSV** (same columns).  
**New skills:** Aggregations, file parse/export, clearer data modeling.  
**Cut → Future:** Bank APIs, receipt OCR, budgets with alerts, multi-currency.

### 04 — CampusHub

**Role:** Student campus platform — auth, clubs, events.  
**MVP:** Register/login → browse/create clubs (creator = admin of that club) → create/join events under a club → list “my clubs / my events.”  
**New skills:** Roles (member vs club-admin), relationships (User–Club–Event), protected routes.  
**Cut → Future:** DMs, feed, RSVP waitlists, file uploads, email invites.

### 05 — SkillSwap

**Role:** Peer skill teaching / learning board.  
**MVP:** Profile with “I can teach” / “I want to learn” tags → browse listings → **request** a swap → owner **accept/decline** → status list for both sides.  
**New skills:** Request workflow (state machine: pending → accepted/declined).  
**Cut → Future:** Chat, ratings, smart matching, scheduling, video.

### 06 — CodeQuest

**Role:** Gamified coding **practice** (not a real OJ).  
**MVP:** Curated MCQ / short-answer challenges in categories → submit → immediate correct/incorrect + explanation text → XP + simple level + progress history.  
**New skills:** Seed data, scoring rules, progress persistence.  
**Cut → Future:** Code execution sandbox, multiplayer, custom problem authoring UI, many languages.

### 07 — CampusPulse (capstone)

**Role:** “Campus intelligence” glue — aggregates **demo** campus signals and shows simple insights.  
**MVP:** Auth → seed or enter: events interest tags, club memberships, study hours (manual or optional link concepts from earlier apps as *documented* ideas, not hard coupling) → dashboard of activity + **rule-based recommendations** (e.g. “You study most on Tue → suggest quiet-hour event that day”; “You joined Coding Club → suggest related workshop”).  
**New skills:** Multi-entity dashboard, explainable rules engine (if/else or scored tags — **not ML**).  
**Cut → Future:** Real ML, campus-wide scraping, notifications, cross-app OAuth.

---

## MVP completeness bar (every project)

Before calling a project “done”:

1. Runs locally with README steps (install → migrate → seed → start).  
2. Happy path works end-to-end without console errors.  
3. README filled from [`README_TEMPLATE.md`](./README_TEMPLATE.md).  
4. She can answer: Problem, data model, one API route, one hard bug.  
5. UI follows [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — neat, light-first, no AI-cliché theme.

---

## Suggested build order for feature-by-feature commits

Use small commits that map to interview talking points (“I added auth next…”).

### Shared commit pattern (projects 02–07)

1. `chore: scaffold vite react-ts client + express-ts server`  
2. `chore: add prisma sqlite schema and migrate`  
3. `feat: auth register login jwt middleware`  
4. `feat: core domain CRUD` (subjects / expenses / clubs / …)  
5. `feat: dashboard or primary user flow`  
6. `feat: charts or CSV or rules` (project-specific)  
7. `chore: seed script and sample data`  
8. `docs: readme screenshots and demo notes`  
9. `style: align ui with design system`

### Portfolio-specific (01)

1. `chore: scaffold vite react-ts tailwind`  
2. `feat: layout header footer and routing`  
3. `feat: hero about skills sections`  
4. `feat: projects grid with placeholder cards`  
5. `feat: contact section`  
6. `style: design tokens and responsive polish`  
7. `docs: persona and project links`  
8. *(later)* `content: real screenshots and live urls`

### Recommended calendar spine (flexible)

| Phase | Focus |
|---|---|
| Weeks 1–2 | Portfolio shell + design tokens |
| Weeks 3–5 | StudyFlow MVP |
| Weeks 6–8 | SpendWise MVP |
| Weeks 9–12 | CampusHub MVP |
| Weeks 13–15 | SkillSwap MVP |
| Weeks 16–18 | CodeQuest MVP |
| Weeks 19–22 | CampusPulse + portfolio refresh |

Skip ahead only if a prior MVP is **demo-complete**, not “80% unfinished.”

---

## Interview story (one sentence each)

1. **Portfolio** — “This is how I present my work.”  
2. **StudyFlow** — “I tracked real study data and visualized it.”  
3. **SpendWise** — “I modeled money and moved data in/out via CSV.”  
4. **CampusHub** — “I built campus entities with auth and roles.”  
5. **SkillSwap** — “I implemented a request lifecycle between peers.”  
6. **CodeQuest** — “I gamified practice with rules I can explain.”  
7. **CampusPulse** — “I combined signals into explainable recommendations.”

---

## Out of program scope (do not start)

- Microservices, Kubernetes, GraphQL (unless she already knows it)  
- Native mobile apps  
- Real payment gateways  
- Training custom ML models  
- Copying senior open-source UIs she cannot recreate from scratch  

---

## Related docs

- [`STACK.md`](./STACK.md) — tech lock + deploy  
- [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — UI across all projects  
- [`REPO_MAP.md`](./REPO_MAP.md) — folder & GitHub names  
- [`README_TEMPLATE.md`](./README_TEMPLATE.md) — required README  
- [`INTERVIEW_PREP.md`](./INTERVIEW_PREP.md) — club Q&A outlines  
- [`HARSHITHA_PERSONA.md`](./HARSHITHA_PERSONA.md) — editable About stubs  
