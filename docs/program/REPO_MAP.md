# Repo Map — Local folders & GitHub names

**Sibling root (local):** `/home/jaynamukesh/Jaynu/harshi/portfolio/`

**Name lock:** **Harshitha** → folder/GitHub slug `harshitha`.

All app repos live as **siblings** of the portfolio (not nested inside it), unless she later chooses a monorepo (not recommended for this program).

---

## Exact local folder names

Create these directories under the sibling root:

```text
/home/jaynamukesh/Jaynu/harshi/portfolio/
├── harshitha-portfolio/     # 01 hub (EXISTS — this repo)
├── studyflow/               # 02
├── spendwise/               # 03
├── campushub/               # 04
├── skillswap/               # 05
├── codequest/               # 06
└── campuspulse/             # 07
```

| # | Local folder | GitHub repository name | Default package/name field |
|---|---|---|---|
| 01 | `harshitha-portfolio` | `harshitha-portfolio` | harshitha-portfolio |
| 02 | `studyflow` | `studyflow` | studyflow |
| 03 | `spendwise` | `spendwise` | spendwise |
| 04 | `campushub` | `campushub` | campushub |
| 05 | `skillswap` | `skillswap` | skillswap |
| 06 | `codequest` | `codequest` | codequest |
| 07 | `campuspulse` | `campuspulse` | campuspulse |

**Rules**

- Lowercase, no spaces, no underscores.  
- No `harshitha-` prefix on apps 02–07 (portfolio already carries the name).  
- One GitHub repo per folder; do not put multiple apps in one git root.

---

## Suggested GitHub remote shape

```text
https://github.com/<her-username>/harshitha-portfolio
https://github.com/<her-username>/studyflow
https://github.com/<her-username>/spendwise
https://github.com/<her-username>/campushub
https://github.com/<her-username>/skillswap
https://github.com/<her-username>/codequest
https://github.com/<her-username>/campuspulse
```

Replace `<her-username>` when her account is ready. Do not push until she asks.

---

## Program docs location

Canonical program docs live **only** in the portfolio repo:

```text
harshitha-portfolio/docs/program/
  PLAN.md
  DESIGN_SYSTEM.md
  STACK.md
  README_TEMPLATE.md
  INTERVIEW_PREP.md
  REPO_MAP.md
  HARSHITA_PERSONA.md
```

Other repos may link back: “See portfolio `docs/program` for stack and design system.”

---

## Optional later

| Idea | Name |
|---|---|
| Shared design tokens package | skip for year one — copy `tokens.css` |
| Umbrella org | `harshitha-labs` — only if she wants an org |

---

## Status (as of program kickoff)

| Folder | Status |
|---|---|
| `harshitha-portfolio` | Exists; placeholder `index.html` only — to be replaced by Vite app |
| Others | Not created yet |
