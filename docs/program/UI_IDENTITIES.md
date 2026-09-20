# UI Identities — One Look Per Project

**Why this exists:** User feedback — every app felt like a plain forest-teal clone of StudyFlow. Shared tokens made the portfolio look unintentional, not cohesive.

**Rule:** Each repo owns a **unique visual identity**. Do **not** copy `harshitha-portfolio/src/styles/tokens.css` or StudyFlow’s dashboard shell into sibling apps. Shared stack (React/Vite/Tailwind/Express) is fine; shared *look* is not.

**Global bans (all projects)**

- No forest teal `#1a6b58` / sage-mist clone as the “brand accent”
- No purple-on-white / indigo glow “AI startup” look
- No warm cream + terracotta + display-serif cliché
- No emoji as decoration; no Inter / Roboto / Arial / system-ui as primary fonts
- No sparse “lots of whitespace + three cards” marketing dashboard
- **Anti-clone:** Do not reuse StudyFlow’s layout skeleton (left sidebar + top bar + muted sage cards + teal CTAs) on any other product

**Density default:** Prefer compact rhythm (tight section gaps, dense tables/lists, useful chrome). Empty space must earn its keep — usually it does not.

---

## Summary

| Project | Mood | Accent idea | Font pair | Density |
|---|---|---|---|---|
| harshitha-portfolio | Editorial / personal brand | Ink + signal vermillion | Fraunces + Manrope | Magazine columns, tight hero |
| studyflow | Focused productivity | Graphite + sky focus | Space Grotesk + IBM Plex Sans | Tool-dense, chart-forward |
| spendwise | Confident personal finance | Midnight navy + ledger gold | Sora + IBM Plex Mono | Dense ledgers & KPIs |
| campushub | Energetic campus social | Ice blue + rose social | Syne + Figtree | Feed + event grid packed |
| skillswap | Craft marketplace | Slate + trade amber | Bricolage Grotesque + Karla | Catalog + request rails |
| codequest | Arcade / gamified learning | Night void + cyan XP | Chakra Petch + Exo 2 | HUD panels, XP strips |
| campuspulse | Live campus intelligence | Graphite + pulse crimson | Barlow Condensed + Source Sans 3 | Newsroom feed density |

---

## 1. harshitha-portfolio — Editorial / personal brand

### Mood
Magazine cover meets personal manifesto. Confident, typed, human — not a SaaS landing page. The **name** is the hero; projects read like a feature well, not a card grid of clones.

### Color CSS variables

```css
:root {
  --color-bg: #f7f5f2;           /* cool paper, not warm cream */
  --color-surface: #ffffff;
  --color-ink: #121212;
  --color-muted: #5c5c5c;
  --ink-faint: #8a8a8a;

  --color-accent: #c81e1e;       /* editorial vermillion — not teal */
  --color-accent-hover: #9f1515;
  --color-accent-soft: #fde8e8;

  --color-border: #e4e0da;
  --color-footer: #121212;
  --danger: #b91c1c;
  --success: #166534;
  --warning: #a16207;

  --radius: 0.25rem;             /* sharper, print-like */
  --shadow-soft: 0 1px 0 rgb(18 18 18 / 0.06);

  --bg-atmosphere:
    linear-gradient(180deg, #f7f5f2 0%, #efece7 100%),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 23px,
      rgb(18 18 18 / 0.03) 24px
    );
}
```

### Fonts
- **Display / wordmark:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (optical size high for hero name)
- **Body / UI:** [Manrope](https://fonts.google.com/specimen/Manrope)
- Do not use Space Grotesk here (reserved for StudyFlow)

### Layout density
- Hero: name + one line + one CTA group — but **reduce vertical padding**; pull projects into the first scroll sooner
- Projects as a **tight editorial list or 2-col feature well** (title, one line, link) — not three floating sparse cards
- Skills as a dense wrap list / small chips with hairline borders, not icon rows with huge gaps
- Section gap target: `2.5–3.5rem` mobile / `3.5–5rem` desktop (not 8rem+)

### Required motion (min. 4)
1. **Page load:** Wordmark fades up ~12px with 400–600ms ease-out; supporting line follows 80ms later
2. **Project rows:** Hover slides a vermillion hairline / underline and slight ink darken (150ms)
3. **Nav:** Active section indicator slides horizontally
4. **Scroll:** Subtle fade-in of About / Skills blocks (once, `prefers-reduced-motion` respected)
5. **CTA:** Button press scale `0.98` + color snap to `--color-accent-hover`

### Anti-patterns
- No forest-teal tokens, no sage mist wash
- No “product dashboard” chrome on the portfolio
- No inset rounded hero image card; brand typography is the visual
- No StudyFlow sidebar shell

---

## 2. studyflow — Productivity

### Mood
Calm operator’s desk. Linear/Notion energy: focused, keyboard-friendly, **tool-dense**. Feels like work happening — charts and session logs earn the screen.

### Color CSS variables

```css
:root {
  --color-bg: #f4f6f8;
  --color-surface: #ffffff;
  --color-ink: #0f172a;
  --color-muted: #64748b;
  --ink-faint: #94a3b8;

  --color-accent: #0284c8;       /* sky focus — not forest teal */
  --color-accent-hover: #0369a1;
  --color-accent-soft: #e0f2fe;

  --color-border: #e2e8f0;
  --color-sidebar: #0f172a;      /* dark rail OK — product chrome */
  --color-sidebar-ink: #e2e8f0;
  --danger: #dc2626;
  --success: #15803d;
  --warning: #ca8a04;

  --chart-1: #0284c8;
  --chart-2: #0f172a;
  --chart-3: #38bdf8;
  --chart-4: #64748b;

  --radius: 0.375rem;
  --shadow-soft: 0 1px 2px rgb(15 23 42 / 0.06);

  --bg-atmosphere: linear-gradient(180deg, #f4f6f8 0%, #eef2f6 100%);
}
```

### Fonts
- **UI / headings:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- **Body / data:** [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans)
- Numbers in charts/tables: tabular figures via Plex

### Layout density
- **This is the only app allowed a classic app shell** (sidebar + main) — own it; don’t leave huge empty main panes
- Dashboard: KPI strip + chart + recent sessions in one viewport when possible
- Tables/lists with compact row height (`~2.25–2.5rem`); filters inline, not giant empty filter cards
- Forms: stacked tight labels; avoid half-screen empty cards

### Required motion (min. 4)
1. **Page load:** Sidebar items stagger-in (40ms each); main content opacity 0→1
2. **Chart:** Series draw / rise on first paint (Recharts animation ~600ms)
3. **Session row hover:** Soft sky wash + left accent bar expand
4. **Primary actions:** Sky fill brightens; icon nudges 2px
5. **Route change:** Main pane cross-fade 150–200ms (not full-page blank)

### Anti-patterns
- Do not export this shell as the “portfolio standard”
- No sage/forest palette leftovers
- No sparse 3-card hero pretending to be a dashboard
- Avoid purple progress rings

---

## 3. spendwise — Personal finance

### Mood
Private ledger meets modern fintech. Trustworthy, precise, slightly premium. Money is **tabular** — clarity over decoration.

### Color CSS variables

```css
:root {
  --color-bg: #f3f5f9;
  --color-surface: #ffffff;
  --color-ink: #0a1628;          /* midnight navy */
  --color-muted: #5b6b7c;
  --ink-faint: #8b98a8;

  --color-accent: #c9a227;       /* ledger gold — not teal, not terracotta */
  --color-accent-hover: #a8841b;
  --color-accent-soft: #f7efd2;

  --color-income: #0f766e;       /* distinct teal-green for money in only */
  --color-expense: #b91c1c;
  --color-border: #d8dee8;
  --color-footer: #0a1628;

  --chart-1: #c9a227;
  --chart-2: #0a1628;
  --chart-3: #0f766e;
  --chart-4: #64748b;

  --radius: 0.5rem;
  --shadow-soft: 0 8px 24px rgb(10 22 40 / 0.06);

  --bg-atmosphere:
    radial-gradient(ellipse 70% 45% at 100% 0%, #f7efd2 0%, transparent 50%),
    linear-gradient(180deg, #f3f5f9 0%, #e8ecf3 100%);
}
```

### Fonts
- **UI / headings:** [Sora](https://fonts.google.com/specimen/Sora)
- **Amounts / tables:** [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (tabular)
- Body copy may use Sora at regular weight — keep mono for currency columns

### Layout density
- KPI row + category breakdown + transaction table share the fold
- Transaction list is the star: dense rows, sticky header, inline category chips
- Avoid large empty “welcome” panels; budget progress as slim bars, not giant rings
- Side panels (add expense) overlay or split — don’t push content into lonely whitespace

### Required motion (min. 5)
1. **Page load:** KPI values count-up briefly (300–500ms) then settle
2. **Transaction hover:** Row lift 1px + gold left tick
3. **Add expense CTA:** Gold sheen / fill transition 180ms
4. **Chart category enter:** Staggered bar/pie segment reveal
5. **Balance change:** Flash soft green/red wash on the affected KPI then fade

### Anti-patterns
- No StudyFlow sidebar clone with sky accent swapped
- No forest-teal primary buttons
- No cream + terracotta “lifestyle finance” blog look
- No giant empty pie chart card with no legend density

---

## 4. campushub — Student campus social

### Mood
Bulletin-board energy. Clubs, events, people — social and bright without looking like a dating app or AI purple blob.

### Color CSS variables

```css
:root {
  --color-bg: #eef6ff;
  --color-surface: #ffffff;
  --color-ink: #132033;
  --color-muted: #5a6f86;
  --ink-faint: #8aa0b5;

  --color-accent: #e11d48;       /* rose social pulse */
  --color-accent-hover: #be123c;
  --color-accent-soft: #ffe4e6;
  --color-secondary: #0284c8;    /* ice / campus sky support */

  --color-border: #cfe0f2;
  --color-footer: #132033;

  --radius: 0.75rem;             /* friendlier radii — social */
  --shadow-soft: 0 10px 28px rgb(19 32 51 / 0.08);

  --bg-atmosphere:
    radial-gradient(ellipse 60% 40% at 0% 0%, #ffe4e6 0%, transparent 55%),
    radial-gradient(ellipse 50% 35% at 100% 10%, #cfe0f2 0%, transparent 50%),
    linear-gradient(180deg, #eef6ff 0%, #e4eef9 100%);
}
```

### Fonts
- **Display / club titles:** [Syne](https://fonts.google.com/specimen/Syne)
- **Body / UI:** [Figtree](https://fonts.google.com/specimen/Figtree)

### Layout density
- Home = **packed event grid** (2–3 cols) + club strip — not one lonely featured card
- Club pages: member avatars overlapping, event list compact
- Use masonry or tight CSS grid (`gap-3` / `gap-4`), full-bleed header band with pattern
- Mobile: bottom nav or dense top tabs — maximize feed height

### Required motion (min. 4)
1. **Page load:** Event cards stagger upward (50ms cascade)
2. **Card hover:** Lift + rose border glow; RSVP button reveals or intensifies
3. **Join club:** Accent fill + brief checkmark scale pop
4. **Image/cover:** Slow ken-burns optional on hero band only (subtle)
5. **Tab switch:** Underline slides between Clubs / Events

### Anti-patterns
- No productivity sidebar-as-home
- No forest teal “campus green” fallback
- No purple neon social gradients
- No sparse three-feature marketing layout for the logged-in app

---

## 5. skillswap — Peer learning marketplace

### Mood
Workshop noticeboard + marketplace. Fair trade of skills — handmade craft without rustic cliché. Clear “offer / request” duality.

### Color CSS variables

```css
:root {
  --color-bg: #f2f3f5;
  --color-surface: #ffffff;
  --color-ink: #1c1917;
  --color-muted: #57534e;
  --ink-faint: #a8a29e;

  --color-accent: #d97706;       /* trade amber */
  --color-accent-hover: #b45309;
  --color-accent-soft: #ffedd5;
  --color-offer: #1d4ed8;        /* offer lane — denim, not purple */
  --color-request: #d97706;      /* request lane */

  --color-border: #d6d3d1;
  --color-footer: #1c1917;

  --radius: 0.375rem;
  --shadow-soft: 0 2px 0 rgb(28 25 23 / 0.04), 0 12px 28px rgb(28 25 23 / 0.06);

  --bg-atmosphere:
    linear-gradient(135deg, #f2f3f5 0%, #e7e5e4 100%);
}
```

### Fonts
- **Display / skill titles:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)
- **Body / UI:** [Karla](https://fonts.google.com/specimen/Karla)

### Layout density
- Marketplace **two-rail or split catalog**: Offers | Requests visible together on desktop
- Skill cards: compact (avatar, skill, tags, CTA) in 3–4 col grid — short cards, not tall empty ones
- Profile: skills as dense tag cloud + request status table
- Prefer sticky filter bar over full-page filter card

### Required motion (min. 4)
1. **Page load:** Catalog grid fades in with slight stagger
2. **Card hover:** Amber edge + “Request swap” CTA slides up from card footer
3. **Accept / decline:** Status pill morphs color (pending → accepted)
4. **Offer vs request toggle:** Sliding segmented control (denim ↔ amber)
5. **Empty filter change:** Soft cross-fade of results, not hard cut

### Anti-patterns
- No StudyFlow chart dashboard as the home metaphor
- No cream + terracotta “artisan bakery” theme
- No teal primary
- No oversized single “hero skill” card eating the fold

---

## 6. codequest — Gamified learning

### Mood
Arcade quest log. XP, levels, challenges — playful HUD without childish emoji spam. Intentionally **darker** and more kinetic than the other six.

### Color CSS variables

```css
:root {
  --color-bg: #0b1220;
  --color-surface: #141c2e;
  --color-ink: #e8eefc;
  --color-muted: #94a3b8;
  --ink-faint: #64748b;

  --color-accent: #22d3ee;       /* cyan XP */
  --color-accent-hover: #67e8f9;
  --color-accent-soft: #164e63;
  --color-xp: #fbbf24;           /* gold XP ticks */
  --color-danger: #fb7185;
  --color-success: #4ade80;

  --color-border: #243049;
  --color-footer: #070b14;

  --chart-1: #22d3ee;
  --chart-2: #fbbf24;
  --chart-3: #4ade80;
  --chart-4: #94a3b8;

  --radius: 0.5rem;
  --shadow-soft: 0 0 0 1px rgb(34 211 238 / 0.12), 0 12px 40px rgb(0 0 0 / 0.45);

  --bg-atmosphere:
    radial-gradient(ellipse 50% 40% at 20% 0%, rgb(34 211 238 / 0.12) 0%, transparent 55%),
    radial-gradient(ellipse 40% 30% at 90% 10%, rgb(251 191 36 / 0.08) 0%, transparent 50%),
    linear-gradient(180deg, #0b1220 0%, #070b14 100%);
}
```

### Fonts
- **Display / HUD / level titles:** [Chakra Petch](https://fonts.google.com/specimen/Chakra+Petch)
- **Body / questions:** [Exo 2](https://fonts.google.com/specimen/Exo+2)
- Avoid Press Start 2P as body — too gimmicky for readability

### Layout density
- Quest map / challenge list + XP bar + streak always visible (HUD chrome)
- Quiz view: question dense, options stacked tight; no giant empty margins
- Progress as segmented XP bar / level badge row — not three sparse stat cards only
- Leaderboard (if any): compact table, not podium with huge whitespace

### Required motion (min. 5)
1. **Page load:** HUD chrome slides from top; XP bar fills to current value
2. **Correct answer:** Cyan flash + XP chip flies to bar (200–400ms)
3. **Wrong answer:** Soft red shake 200ms (respect reduced motion → color only)
4. **Level-up:** Gold burst / badge scale pop once
5. **Challenge card hover:** Cyan border pulse + translateY(-2px)
6. **Page transitions:** Short scan-line or wipe optional — keep under 250ms

### Anti-patterns
- No light sage StudyFlow clone with “game” icons stuck on
- No purple nebula AI gradients
- No emoji confetti storms
- Do not lighten the whole app to match portfolio tokens

---

## 7. campuspulse — Campus intelligence feed

### Mood
Newsroom wire + campus ticker. Live, scannable, slightly urgent. Intelligence = **dense information**, not mystical AI.

### Color CSS variables

```css
:root {
  --color-bg: #f4f4f2;           /* cool gray paper — not cream lifestyle */
  --color-surface: #ffffff;
  --color-ink: #111111;
  --color-muted: #525252;
  --ink-faint: #8a8a8a;

  --color-accent: #dc2626;       /* pulse crimson */
  --color-accent-hover: #b91c1c;
  --color-accent-soft: #fee2e2;
  --color-live: #dc2626;
  --color-signal: #2563eb;       /* secondary link/signal */

  --color-border: #d4d4d4;
  --color-footer: #111111;

  --radius: 0.125rem;            /* hard news edges */
  --shadow-soft: none;           /* prefer hairlines over soft cards */

  --bg-atmosphere:
    linear-gradient(180deg, #f4f4f2 0%, #ecece8 100%);
}
```

### Fonts
- **Headlines / tickers:** [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) (semi-bold / bold)
- **Body / meta:** [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3)

### Layout density
- **Feed-first:** multi-item column + rail (trending / rules recs) — Bloomberg/Twitter density, not blog
- Tight headline hierarchy; timestamps and tags on one line
- Recommendations as compact list with hairline dividers — not large soft cards
- Section labels uppercase condensed micro-type

### Required motion (min. 4)
1. **Page load:** Ticker / “LIVE” pulse opacity breathing (slow, 1.5s loop); feed items cascade in
2. **New item (demo):** Slide down into feed top with crimson flash edge
3. **Row hover:** Background `#111` at 4% + condensed headline weight bump
4. **Rail tabs:** Instant underline snap (100ms)
5. **Rec save/pin:** Crimson pin icon scale pop

### Anti-patterns
- No StudyFlow analytics-dashboard-as-home (charts optional secondary)
- No forest teal “insight” accents
- No purple “AI recommendations” glow
- No large empty hero with one headline and no feed

---

## Implementation checklist (every project)

When starting or restyling an app:

1. Create local `src/styles/tokens.css` (or Tailwind theme) from **this file’s section only**
2. Load **that project’s font pair** via `index.html` or Fontsource — never Inter
3. Implement **≥3 required motions** before calling UI “done”
4. Screenshot the fold: if it could be mistaken for StudyFlow after a hue shift, redesign layout
5. Verify `prefers-reduced-motion: reduce` disables transformative animation
6. Update portfolio project card screenshot when the identity is visible

---

## Relationship to `DESIGN_SYSTEM.md`

`DESIGN_SYSTEM.md` documented a **single** forest-teal language. That caused clone fatigue.

- **Portfolio program:** treat **this file** as the source of truth for **per-project look**
- Keep shared rules that still apply: light-first (except CodeQuest), no purple-AI, no cream+terracotta, cards only for interaction, accessible focus rings
- Update or slim `DESIGN_SYSTEM.md` later so it points here for color/type/layout — do not re-impose one accent across all seven repos

---

## Quick “unique enough?” test

Ask for each app:

1. Can you name the accent color without saying “teal”?
2. Are the fonts different from the other six?
3. Would a screenshot still be identifiable if you blurred the logo?
4. Is the first viewport **busy with product**, not empty padding?

If any answer is no, the identity is not shipped yet.
