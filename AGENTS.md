<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# castilloquesada.com — project conventions

Personal portfolio site for Andrés "Cato" Castillo Quesada — Senior Frontend
Engineer / Creative Technologist. Primary purpose: hiring artifact for a
remote job search (target $70-85K) and freelance client acquisition. Every
technical choice here is also evaluated as a signal to a technical reviewer,
not just an engineering decision — favor the fluent, expected answer for a
senior React/Next.js candidate over the clever one.

## Stack

- Next.js (App Router), TypeScript
- Tailwind CSS v4 (`@theme` tokens) + SCSS modules for animation machinery
- GSAP + `@gsap/react`, Lenis for smooth scroll
- Deployed on Vercel

## Token system — single source of truth

**`lib/theme.css`** is the only place design tokens are defined, inside a
Tailwind v4 `@theme` block. It's imported once, at the very top of
`app/globals.css`:

```css
@import "tailwindcss";
@import "../lib/theme.css";
```

Rules:
- **Never hardcode a raw hex, px value, or font name in a component.**
  Every color, font size, spacing value, and font family goes through a
  token: `text-[var(--color-accent)]`, `text-[length:var(--text-display)]`,
  etc. If a needed value doesn't exist as a token yet, add it to
  `theme.css` first, then reference it — don't inline it "just this once."
- **`globals.css` must not define its own competing tokens.** We've
  already hit this bug once: a leftover scaffold `:root { --color-accent }`
  block in `globals.css` silently overrode `theme.css`'s real value because
  it was declared later in the cascade (last-defined-wins on `:root`).
  Before adding anything to `globals.css`, grep for `:root` blocks across
  the CSS files to confirm there's no shadow duplicate.
- Type scale uses fluid `clamp()` values interpolated between mobile (390px)
  and desktop (1440px) design specs — not fixed breakpoints. When a new
  text size is needed, get both the mobile and desktop px value from the
  design and convert to a clamp, don't guess a single fixed size.
- Colors are semantic, not raw scale names: `--color-base`, `--color-surface`,
  `--color-primary`, `--color-accent`, etc. — never `--color-gray-800` style
  naming. This is what lets a full palette swap touch one file.

## Fonts

**`lib/fonts.ts`** loads all fonts via `next/font/google` and exports
`displayFont`, `bodyFont`, `monoFont`, each with a `variable` (e.g.
`--font-display`). These variable classNames must be applied on the
`<html>` tag in `app/layout.tsx`:

```tsx
<html className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
```

Without that, the CSS variables never exist in scope and every `font-*`
utility silently falls back to system fonts. If a heading renders in the
wrong family, check in this order: (1) is the relevant `.variable` on
`<html>`, (2) does the element have an explicit `font-display` /
`font-sans` / `font-mono` utility (size utilities like `text-[length:...]`
do NOT set family — they're independent), (3) is there a competing
`font-family` declaration elsewhere in the cascade.

Current pairing: Space Grotesk (display/headings) / Hanken Grotesk (body) /
Space Mono (labels, tags, meta, eyebrows).

## Motion

**`lib/motion.ts`** holds all GSAP timing values (`dur`, `ease`, `stagger`,
`triggerStart`). Mirrors the CSS-side motion tokens in `theme.css`
(`--duration-*`, `--ease-*`) — if you change a value in one, change it in
the other; there's no automated sync between them yet. Don't invent a
one-off `duration: 0.5` inline in a component; pull from `motion.ts` so the
whole site shares one motion rhythm.

## Components

Reusable UI elements (buttons, etc.) are components with a `variant` prop,
not BEM-style CSS classes. Example pattern (`components/ui/Button.tsx`):

```tsx
const variants = {
  main: "bg-[var(--color-accent)] text-[var(--color-accent-ink)] ...",
  secondary: "border border-[var(--color-line-strong)] ...",
};
```

Usage: `<Button variant="main" href="#contact">Get in touch</Button>`.
Prefer this over a hand-rolled `.button--main` CSS class — it gets
TypeScript checking on the variant name and stays wired to the token
system automatically.

## Branching & deploy

- `main` — always what's live on castilloquesada.com. Never break it.
- `build/launch` — active development branch for this launch cycle. Every
  push gets a Vercel preview URL; verify GSAP/Lenis behavior there, not
  just on `next dev` (hydration and smooth-scroll can behave differently
  on a deployed build vs. local dev).
- Launch = merge `build/launch` → `main`, push. Nothing else to configure.
- Post-launch, the same pattern continues: feature branches per cycle
  (`feat/case-study-pages`, `feat/hero-polish`), preview-tested, merged
  when ready. `main` stays deployable at all times.

## Content & scope (v1, this launch cycle)

- Single scrolling page: hero, three case study sections (Vans 3D
  Customizer, Walmart Connect Design System, Uniwatch — all NDA-safe,
  narrative case study format, no client screenshots/logos as hero
  imagery), about, contact.
- Case study **detail pages are out of scope for this cycle** — full
  narratives live inline in the landing page sections. Don't build routing
  or templates for them yet; that's a deliberate cycle-2 item.
- No Three.js / 3D configurator in this cycle. Also deliberately deferred.

## NDA constraint

Vans, Walmart, and other enterprise client work is under NDA via Publicis
Global Delivery. Content must stay at the narrative level — role, scope,
technical decisions made — never actual client assets, screenshots, or
proprietary deliverables.

## When in doubt

If a design value (color, spacing, radius, font weight) isn't specified
here or in `theme.css`, don't guess — check the Claude Design standalone
HTML export via browser devtools computed styles for ground truth before
inventing a value.
