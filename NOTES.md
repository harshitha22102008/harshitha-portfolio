# Wave 1 notes — what Harshitha should explain

This portfolio is project **01** in the program (`docs/program/PLAN.md`). Spelling in UI/code: **Harshitha**.

## How to run

```bash
npm install
npm run dev      # local preview
npm run build    # must pass before demos
```

## Interview talking points (Wave 1)

1. **Stack** — React + TypeScript + Vite + Tailwind. Entry is `index.html` → `src/main.tsx` → `App.tsx`.
2. **Design tokens** — Colors/fonts live in `src/styles/tokens.css` (matches `docs/program/DESIGN_SYSTEM.md`). Light is default; `html.dark` flips tokens. Fonts: Fraunces (name/titles) + Figtree (body).
3. **Layout** — Sticky nav with section anchors, footer links, mobile menu. No router yet — single page with `#about`, `#skills`, `#projects`, `#contact`.
4. **Hero** — Brand-first: name is the strongest signal, then one headline line + CTAs to Projects / Contact.
5. **Content is editable** — About placeholders `[Branch]`, `[College]` come from `docs/program/HARSHITHA_PERSONA.md`. Skills/projects data live in `src/data/`.
6. **Projects grid** — Progression labels `01`–`07` link **out** to sibling GitHub repos (placeholders until those apps ship). Do not nest those apps inside this repo.
7. **Theme toggle** — Saves preference in `localStorage`, respects `prefers-color-scheme` on first visit.
8. **Motion** — Only a few: hero fade-up, button hover lift, mobile menu fade-in. She should be able to point at the CSS classes.

## Replace before publishing

- [ ] Real college / branch in About
- [ ] Real email + LinkedIn in `src/data/site.ts`
- [ ] Real résumé PDF at `public/resume.pdf`
- [ ] Live demo URLs + screenshots for projects 02–07 (Wave 2)

## Wave 2 (not in this shell)

- Certifications section
- Case-study pages / deeper project write-ups
- GitHub activity / contribution graph
- Real screenshots and deployed demo links
- Optional blog or CMS
