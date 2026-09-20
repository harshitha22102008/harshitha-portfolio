# Interview Prep — Per Project

Short outlines for club / lab interviews. Harshitha should **practice aloud** and replace bracket notes with her real bugs and numbers.

**Positioning line (use once):**  
“I’m a first-year B.Tech student. These are MVPs I built end-to-end so I can explain every layer — not production clones of big apps.”

---

## 01 — Personal Portfolio 2.0

**Likely questions**

1. Why React + Vite instead of plain HTML?  
2. How is the site structured (routes/components)?  
3. How did you choose colors and fonts?  
4. How do you deploy it?  
5. How will you keep project cards updated?

**Answer outlines**

1. Components reuse layout; Vite gives fast refresh; TypeScript catches prop mistakes early.  
2. `App` → routes → pages (Home, maybe Project detail) → shared `Header`/`Footer`; tokens in CSS variables.  
3. Light-first, teal accent, Fraunces + Source Sans 3 — professional, avoids generic AI purple themes (point to `DESIGN_SYSTEM.md`).  
4. Build static assets → Vercel/Netlify from GitHub.  
5. After each project MVP, add screenshot + repo + demo link; portfolio is the hub.

**Trap:** Don’t claim fancy animations or a CMS you didn’t build.

---

## 02 — StudyFlow

**Likely questions**

1. What is stored in the database?  
2. How does login work (JWT)?  
3. How do you calculate hours for charts?  
4. Why not just use Google Sheets?  
5. What would you add next?

**Answer outlines**

1. User, Subject, StudySession (duration, date, subjectId, userId).  
2. bcrypt hash on register; login returns JWT; client sends Bearer token; middleware verifies.  
3. Group sessions by day/week in API or client; feed Recharts.  
4. Custom app teaches full-stack; Sheets doesn’t teach auth/API design.  
5. Pomodoro, goals, reminders — listed under Future.

**Trap:** Don’t invent “AI study plans.”

---

## 03 — SpendWise

**Likely questions**

1. How do income and expense differ in the model?  
2. How does CSV export/import work?  
3. How do you prevent bad CSV rows?  
4. How do monthly charts get totals?  
5. Security of financial data?

**Answer outlines**

1. Type field (`income` | `expense`) or signed amount — pick one and stick to it.  
2. Export: query → serialize rows → download file. Import: parse → validate → bulk create.  
3. zod/manual checks for required columns, date parse, numeric amount; reject with clear errors.  
4. Aggregate by month server-side (`groupBy`) or reduce in JS for MVP.  
5. Auth required; demo data only; HTTPS on deploy; no real bank linking in MVP.

**Trap:** Don’t claim UPI/bank scraping.

---

## 04 — CampusHub

**Likely questions**

1. How are users, clubs, and events related?  
2. Who can create events?  
3. How do you protect routes?  
4. What is an N:M relationship here?  
5. Why no chat?

**Answer outlines**

1. User creates/joins Club; Event belongs to Club; membership join table.  
2. Club admin/creator only (check membership role in middleware/service).  
3. JWT middleware + ownership/role checks on mutate routes.  
4. Users ↔ Clubs via membership; explain with a sketch.  
5. Messaging cut for MVP scope — Future; auth + clubs + events is the vertical slice.

**Trap:** Don’t describe Discord-level features.

---

## 05 — SkillSwap

**Likely questions**

1. What does a “swap request” lifecycle look like?  
2. How do teach vs learn tags work?  
3. Race: two people accept the same offer?  
4. Why not a matching algorithm?  
5. How is this different from a classifieds site?

**Answer outlines**

1. `pending` → `accepted` | `declined` (owner only transitions).  
2. Profile arrays/tags; listings filter by tag.  
3. On accept, optionally close listing or mark filled; use a transaction if needed.  
4. Rule/browse is honest for year one; ML matching is Future.  
5. Explicit request workflow + status tracking between two authenticated users.

**Trap:** Don’t claim chat or rating systems you didn’t ship.

---

## 06 — CodeQuest

**Likely questions**

1. Do you execute code on the server?  
2. How is XP/level calculated?  
3. How are questions stored?  
4. How do you stop cheating?  
5. How is this different from LeetCode?

**Answer outlines**

1. **No** — MVP is MCQ/short answer with stored correct answers; say this clearly.  
2. Fixed XP per correct; level = thresholds (e.g. every 100 XP).  
3. Seeded Question model: prompt, choices, answerKey, explanation, category.  
4. Client-side only demos aren’t secure; for portfolio, honesty > anti-cheat theater. Optional: grade only on server.  
5. Learning tool with explanations and progress — not a real online judge.

**Trap:** Never imply a Docker sandbox judge exists if it doesn’t.

---

## 07 — CampusPulse

**Likely questions**

1. Is this machine learning?  
2. What inputs feed recommendations?  
3. Give an example rule.  
4. How does this use ideas from earlier projects?  
5. What would production campus analytics need?

**Answer outlines**

1. **No — rule-based.** If/else or tag scoring she can read line-by-line.  
2. Interests, club memberships, study-hour patterns (manual entry or seeded).  
3. Example: if `coding` tag and evening study streak → recommend evening hackathon event.  
4. Conceptual reuse of campus + study + events domains; not necessarily live microservices.  
5. Real data pipelines, privacy, consent, Postgres at scale — Future / awareness answer.

**Trap:** Don’t say “AI/ML model” unless she trained one (she didn’t in this plan).

---

## Cross-cutting questions (any project)

| Question | Outline |
|---|---|
| Why SQLite? | Easy local demo; real SQL + Prisma; Postgres upgrade path. |
| Why TypeScript? | Catch errors before runtime; clearer props/API types. |
| Biggest bug? | Prepare **one real story** per project (CORS, JWT expiry, Prisma relation, date timezone). |
| How long did it take? | Be honest; speak in weeks/features, not inflated months. |
| Show me the code for auth | Open `middleware/auth.ts` + login route; walk line by line. |
| Group project? | Solo MVPs; she owns every line she demos. |

---

## 60-second demo script (template)

1. Problem in one sentence.  
2. Register/login (or portfolio navigate).  
3. Create one core record.  
4. Show the “wow” (chart / CSV / accept request / recommendation).  
5. Open README architecture + one code file.  
6. Stop. Ask if they want deeper dive.
