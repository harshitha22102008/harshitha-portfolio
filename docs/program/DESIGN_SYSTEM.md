# Design System — Harshitha Portfolio Program

**Goal:** Simple, professional, neat UI across **all** projects. One visual language so the portfolio feels intentional, not seven random themes.

**Canonical implementation:** `harshitha-portfolio/src/styles/tokens.css` (copy into sibling apps).

**Principles**

1. Light-first (dark is optional via `html.dark`, not the default look).  
2. One composition per section; avoid dashboard clutter on marketing/hero pages.  
3. No purple-on-white / indigo-glow “AI startup” look.  
4. No warm cream + terracotta + display-serif cliché.  
5. No emoji as UI decoration. Prefer clear labels and icons (Lucide or Heroicons).  
6. Cards only when they wrap a real interaction or a project entry — not for every paragraph.

---

## Brand signal

- Primary name lockup: **Harshitha** (wordmark in display font).  
- On the portfolio hero, the name is the strongest text signal; the tagline is secondary.  
- Accent used sparingly: links, primary buttons, focus rings, chart highlight series.

---

## Color tokens (CSS variables)

Light theme is default. Prefer the `--color-*` names already used in the portfolio scaffold.

```css
:root {
  /* Surfaces — cool sage mist (not cream) */
  --color-bg: #f4f7f5;
  --color-surface: #ffffff;
  --bg-muted: #e8efe9;          /* optional secondary wash */

  /* Text */
  --color-ink: #14201c;
  --color-muted: #5a6b64;
  --ink-faint: #8b9b94;

  /* Accent — forest teal (not purple) */
  --color-accent: #1a6b58;
  --color-accent-hover: #145546;
  --color-accent-soft: #dceee8;

  /* Semantic */
  --color-border: #d5e0db;
  --color-footer: #0f1a16;
  --danger: #b91c1c;
  --success: #047857;
  --warning: #b45309;

  /* Charts (restrained) */
  --chart-1: #1a6b58;
  --chart-2: #1d4ed8;
  --chart-3: #0369a1;
  --chart-4: #4b5563;

  --radius: 0.5rem;
  --radius-sm: 6px;
  --shadow-soft: 0 1px 2px rgb(20 32 28 / 0.04), 0 8px 24px rgb(20 32 28 / 0.06);
  --ring: 0 0 0 3px rgb(26 107 88 / 0.35);

  --bg-atmosphere:
    radial-gradient(ellipse 80% 50% at 10% -10%, #dceee8 0%, transparent 55%),
    radial-gradient(ellipse 60% 40% at 100% 0%, #e8efe9 0%, transparent 50%),
    linear-gradient(180deg, #f4f7f5 0%, #eef2f0 100%);
}

/* Optional dark — user preference only */
html.dark {
  --color-bg: #0f1614;
  --color-surface: #1a2420;
  --color-ink: #e8eeeb;
  --color-muted: #9aaba3;
  --color-accent: #3dba9a;
  --color-accent-hover: #5ecfb0;
  --color-accent-soft: #1a332c;
  --color-border: #2a3a34;
  --color-footer: #0a100e;
}
```

**Tailwind:** bridge via `@theme inline` (see portfolio `tokens.css`) so utilities like `bg-surface`, `text-ink`, `font-display` work.

---

## Typography

**Do not use as brand fonts:** Inter, Roboto, Arial (system fallbacks in the stack are fine).

| Role | Font | Why |
|---|---|---|
| Display / name / page titles | [Fraunces](https://fonts.google.com/specimen/Fraunces) | Soft optical-size serif — expressive but calm |
| Body / UI | [Figtree](https://fonts.google.com/specimen/Figtree) | Clean geometric sans; distinct from Inter |

```css
:root {
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
  --font-body: "Figtree", "Segoe UI", sans-serif;
}

h1, h2, h3, .font-display {
  font-family: var(--font-display);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--color-ink);
}

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-ink);
  background: var(--color-bg);
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

Max content width for reading: **42rem**. App shells: **~68rem** (`--max-w`) centered with side padding.

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

---

## Component rules

### Buttons

- **Primary:** `background: var(--color-accent); color: white;` hover → `--color-accent-hover`.  
- **Secondary:** surface bg, `border: 1px solid var(--color-border)`, ink text.  
- **Danger:** `--danger` for destructive only.  
- Height ~40px; padding `0 16px`; radius `--radius-sm`.  
- Never pill-shaped (`rounded-full`) for primary actions — slight radius only.

### Inputs

- Border `--color-border`; focus uses `--ring`.  
- Labels above fields (not placeholder-only).  
- Error text in `--danger` under the field.

### Cards

- Allowed for: project tiles, club/event rows that are clickable, tappable metric summaries.  
- Style: `--color-surface`, 1px border, optional `--shadow-soft`, `--radius`.  
- If removing border/shadow/bg does not hurt understanding, **do not use a card**.

### Navigation

- Simple top bar: name left, links right. Mobile: clear menu — boring is good.  
- Active link: accent underline or accent text — not neon glow.  
- Nav height reference: `--nav-h: 4rem`.

### Tables & lists

- Prefer clean tables/lists for SpendWise and StudyFlow logs.  
- Optional zebra via a soft muted wash.

### Charts

- Max 2–3 series. Use `--chart-*`.  
- Always label axes; no ornamental gradients on bars.

### Empty states

- One short sentence + one primary CTA. No illustrations required.

### Motion (2–3 intentional uses max per app)

1. Page/section fade-in on load (150–250ms opacity).  
2. Button hover / press (color + slight translateY).  
3. Optional subtle chart/list entrance — not noise.  

Avoid continuous glow pulses, parallax, and particle backgrounds.

---

## Layout patterns

| Surface | Pattern |
|---|---|
| Portfolio landing | Soft `--bg-atmosphere` on hero; name + one line + CTA; projects below the fold |
| App auth | Centered form on `--color-bg`, elevated `--color-surface` panel |
| App logged-in | Top nav + main; sidebar only if 4+ destinations |

---

## Accessibility checklist

- Contrast: ink on bg meets WCAG AA.  
- Focus visible on all interactive elements.  
- Buttons are `<button>`; links are `<a>`.  
- Form errors use text, not color alone.  
- Dark theme still readable.

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

1. Treat portfolio `src/styles/tokens.css` as the source of truth.  
2. Copy into each sibling app; do not invent a new palette per project.  
3. Load Fraunces + Figtree from Google Fonts (or self-host later) in each app’s `index.html`.
