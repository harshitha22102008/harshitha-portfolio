# Design System — Harshitha Portfolio Program

**Goal:** Simple, professional, neat UI across **all** projects. One visual language so the portfolio feels intentional, not seven random themes.

**Principles**

1. Light-first (dark is optional toggle, not the default look).  
2. One composition per section; avoid dashboard clutter on marketing/hero pages.  
3. No purple-on-white / indigo-glow “AI startup” look.  
4. No warm cream + terracotta + display-serif cliché.  
5. No emoji as UI decoration. Prefer clear labels and icons (Lucide or Heroicons).  
6. Cards only when they wrap a real interaction or a project entry — not for every paragraph.

---

## Brand signal

- Primary name lockup: **Harshitha** (wordmark in display font).  
- On the portfolio hero, the name is the strongest text signal; the tagline is secondary.  
- Accent color used sparingly: links, primary buttons, focus rings, chart highlight series.

---

## Color tokens (CSS variables)

Light theme is default. Copy these into each app’s global CSS (e.g. `src/index.css`).

```css
:root {
  /* Surfaces */
  --bg: #f4f7fb;           /* cool mist — not cream */
  --bg-elevated: #ffffff;
  --bg-muted: #e8eef6;

  /* Text */
  --ink: #142033;          /* deep navy-ink */
  --ink-muted: #5a6b82;
  --ink-faint: #8b9bb0;

  /* Accent — teal (professional, not purple) */
  --accent: #0f766e;
  --accent-hover: #0d9488;
  --accent-soft: #ccfbf1;

  /* Semantic */
  --border: #d5dee9;
  --danger: #b91c1c;
  --success: #047857;
  --warning: #b45309;

  /* Charts (keep restrained) */
  --chart-1: #0f766e;
  --chart-2: #1d4ed8;
  --chart-3: #0369a1;
  --chart-4: #4b5563;

  /* Radii & shadow */
  --radius: 10px;
  --radius-sm: 6px;
  --shadow: 0 1px 2px rgb(20 32 51 / 0.06), 0 8px 24px rgb(20 32 51 / 0.06);

  /* Focus */
  --ring: 0 0 0 3px rgb(15 118 110 / 0.35);
}

/* Optional dark — user preference only */
[data-theme="dark"] {
  --bg: #0c1220;
  --bg-elevated: #151d2e;
  --bg-muted: #1c263a;
  --ink: #e8eef6;
  --ink-muted: #9aabbf;
  --ink-faint: #6b7c92;
  --accent: #2dd4bf;
  --accent-hover: #5eead4;
  --accent-soft: #134e4a;
  --border: #2a3548;
  --shadow: 0 1px 2px rgb(0 0 0 / 0.4), 0 8px 24px rgb(0 0 0 / 0.35);
}
```

**Tailwind mapping tip:** extend `theme.colors` to these names (`ink`, `accent`, etc.) or use arbitrary values `bg-[var(--bg)]`. Prefer variables so light/dark stay consistent.

---

## Typography

**Do not use:** Inter, Roboto, Arial, system-ui as the intentional brand pair (system fallbacks in the stack are fine).

| Role | Font | Why |
|---|---|---|
| Display / name / page titles | [Fraunces](https://fonts.google.com/specimen/Fraunces) | Soft contrast serif — expressive but calm |
| Body / UI | [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) | Readable, professional, distinct from Inter |

```css
:root {
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-body: "Source Sans 3", "Segoe UI", sans-serif;
}

h1, h2, h3, .font-display {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--ink);
}

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--ink);
  background: var(--bg);
}
```

**Scale (approx.)**

| Token | Size | Use |
|---|---|---|
| `--text-xs` | 0.75rem | Labels, captions |
| `--text-sm` | 0.875rem | Meta, table secondary |
| `--text-base` | 1rem | Body |
| `--text-lg` | 1.125rem | Lead paragraphs |
| `--text-xl` | 1.25rem | Section intros |
| `--text-2xl` | 1.75rem | Section titles |
| `--text-3xl` | 2.25rem | Page titles |
| `--text-hero` | clamp(2.25rem, 5vw, 3.25rem) | Portfolio name / hero |

Max content width for reading: **42rem**. App shells (dashboards): **72rem** centered with side padding.

---

## Spacing

Use an 8px rhythm.

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |

Section vertical padding: `--space-7` mobile, `--space-8` desktop.  
Form field gap: `--space-4`.  
Stack of related controls: `--space-3`.

---

## Component rules

### Buttons

- **Primary:** `background: var(--accent); color: white;` hover → `--accent-hover`.  
- **Secondary:** white/elevated bg, `border: 1px solid var(--border)`, ink text.  
- **Danger:** use `--danger` for destructive only.  
- Height ~40px; padding `0 16px`; radius `--radius-sm`.  
- Never pill-shaped (`rounded-full`) for primary actions — slight radius only.

### Inputs

- Light border `--border`, focus uses `--ring`.  
- Labels above fields (not placeholder-only).  
- Error text in `--danger` under the field.

### Cards

- Allowed for: project tiles, club/event rows that are clickable, metric summary that is tappable.  
- Style: `--bg-elevated`, 1px `--border`, optional soft `--shadow`, radius `--radius`.  
- If removing border/shadow/bg does not hurt understanding, **do not use a card**.

### Navigation

- Simple top bar: name left, links right. Mobile: hamburger or stacked links — keep it boring and clear.  
- Active link: accent underline or accent text — not neon glow.

### Tables & lists

- Prefer clean tables/lists for SpendWise and StudyFlow logs.  
- Zebra optional via `--bg-muted` at very low contrast.

### Charts

- Max 2–3 series. Use `--chart-*`.  
- Always label axes; no ornamental gradients on bars.

### Empty states

- One short sentence + one primary CTA (“Add your first expense”). No illustrations required.

### Motion (2–3 intentional uses max per app)

1. Page/section fade-in on load (150–250ms opacity).  
2. Button hover / press (color + slight translateY).  
3. Optional: chart draw or list stagger on dashboard — **subtle**.  

Avoid continuous glow pulses, parallax, and particle backgrounds.

---

## Layout patterns

| Surface | Pattern |
|---|---|
| Portfolio landing | Full-bleed soft gradient or subtle geometric background on hero; name + one line + CTA; projects below the fold |
| App auth | Centered form on `--bg`, elevated panel |
| App logged-in | Top nav + main content; optional simple sidebar only if 4+ destinations |

Background atmosphere for portfolio: soft diagonal wash from `--bg` to `--bg-muted`, or a very light grid — not a stock photo collage unless she has a real photo of herself/campus.

---

## Accessibility checklist

- Contrast: ink on bg meets WCAG AA.  
- Focus visible on all interactive elements (`--ring`).  
- Buttons are `<button>`; links are `<a>`.  
- Form errors announced with text, not color alone.  
- Dark theme still readable; do not rely on opacity tricks.

---

## Anti-patterns (reject in review)

- Purple / violet primary gradients  
- Glassmorphism stacks and neon borders  
- Cream `#F4F1EA` + terracotta accent pairing  
- Dark mode as the only theme  
- Badge/pill clusters in the hero  
- Multiple competing CTAs above the fold  

---

## Implementation note

Put tokens in each repo’s `src/styles/tokens.css` (or equivalent) and import once. Portfolio ships the canonical copy; other projects **copy** the same file rather than inventing a new palette.
