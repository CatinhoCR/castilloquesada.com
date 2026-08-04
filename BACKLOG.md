# castilloquesada.com — deferred to next week (cycle 2)

Everything below was intentionally cut from this weekend's launch scope.
Nothing here blocks Sunday's ship — review and prioritize once the site
is live and the Monday post is out.

## Tooling

- [ ] Install Vercel coding-agent plugin (`npx plugins add vercel/vercel-plugin`)
      — run in the terminal Claude Code uses. Gives the agent direct
      access to deployment status/logs/env vars instead of manual
      copy-paste between browser and terminal.
- [ ] Enable Vercel Speed Insights on the project — tracks real-user
      performance over time. Low effort, worth turning on once the site
      has real traffic post-launch (no signal before then).

## Dynamic accent color switcher (post-v1, showcase feature)

- [ ] Let visitors pick a different accent color live on the site —
      swaps --color-accent (and dependent tokens: --color-accent-hover,
      --color-accent-subtle) across the whole page in real time.
      Doubles as a design-system proof point (echoes the "design token
      playground" idea from the research review) and a nice interactive
      touch for a Creative Technologist portfolio.
- [ ] Scope as a curated swatch picker, not a full color wheel — reuse
      the three accent options already defined from the original
      Claude Design pass (Electric Lime, Signal Coral, Ice Blue) so
      every option is pre-verified for contrast against the dark
      background. A free-form picker risks landing on an
      inaccessible/ugly combo.
- [ ] Technical approach: since colors are already CSS custom
      properties in theme.css, swap via
      document.documentElement.style.setProperty('--color-accent', ...)
      at runtime — no rebuild needed, just a small client component +
      a bit of state. Persist the choice for the session (real
      localStorage is fine here — this is the live site, not a Claude
      artifact/widget, so the artifact-only localStorage restriction
      doesn't apply).
- [ ] Keep it visually minimal — a small swatch row somewhere
      unobtrusive (e.g. near the footer/contact area), not a prominent
      UI element competing with the actual content.

- [ ] A full case study detail page template already exists in the
      Claude Design HTML export (design-reference/ folder) — role/
      tenure/client/stack meta row, full-bleed abstract band, overview/
      challenge/approach sections, animated outcome stats. When detail
      pages get built, start from that template rather than designing
      from scratch.

## Case study visuals (post-v1)

- [ ] v1 ships with pure typography + stat + stack-tag treatment, no
      imagery — consistent with the original NDA constraint (no
      client screenshots/logos), not a fallback.
- [ ] Cycle 2 option: original abstract visuals per case study,
      generated in code (SVG/canvas), representing the technical
      concept not the product — e.g. a warped-grid motif for Vans'
      UV-mapping, a token/swatch grid for Walmart Connect, a
      node-graph pattern for Uniwatch's similarity matching.
- [ ] Cycle 2 option, especially strong for Uniwatch: a real
      architecture diagram (Express BFF → NestJS API → TensorFlow →
      PostgreSQL). Not client IP — it's original system design. Also
      directly answers the "lacks complex architecture demonstration"
      gap from the Gemini research review.
- [ ] **Publicis Groupe Careers as case study #4 — fast follow, do
      Tuesday/Wednesday right after launch, not before.** Now cheap:
      the section/row/mark component pattern already exists, this is
      just a new CaseStudy object + one new mark component, not a
      rebuild. Don't let this delay the initial launch — it's a
      strong, quick addition once live, not a reason to hold.
- [ ] **Wegmans React Native — needs fact-finding first, hold
      separately from Publicis.** Resume's actual wording doesn't
      specifically call out React Native for Wegmans — verify exactly
      what was built and what's defensible before drafting a case
      study, same accuracy pass Uniwatch/Vans already went through.

## From external research review (Gemini deep research, Jul 28) — validated, not new scope

- [ ] **Positioning: lead with "Senior Frontend Engineer," keep "Creative
      Technologist" as the supporting line** — reorders hero copy for
      ATS/recruiter keyword scanning without abandoning the
      differentiator. Low-effort, worth doing before launch.
- [ ] **Document the Tailwind/SCSS boundary explicitly** — one line in
      the README explaining SCSS is reserved for continuous keyframe
      animation, Tailwind tokens for everything else, so a reviewer
      sees the deliberate boundary rather than assuming inconsistency.
- [ ] **Core Web Vitals / performance HUD** — surface live CLS/INP/LCP
      via the web-vitals library, paired with a visible passing-tests
      badge. Cheap, high-signal addition — good candidate for a
      focused cycle-2 session.
- [ ] **Interactive WebGL showcase** — validates and merges with the
      already-planned Three.js configurator differentiator; could
      specifically echo the Vans UV-mapping/warping logic as the demo.
- [ ] **Resume ATS pass** — verify plain-text contact info is not
      trapped in a header/footer, links are visible plain text (not
      hyperlinked anchor text) if the ATS in question strips those,
      dates are consistent format, skills are plain comma-separated
      lists not visual meters. Separate task from the site, low effort,
      can happen anytime.
- [ ] **Correction (Jul 28):** USAA and the "3 years on Vans" claim were
      NOT fabricated — confirmed real against the actual resume. My
      earlier flag on these two was wrong (made without having the
      resume in context). The stats table and LatAm compensation
      formula from that research are still unverified/likely
      fabricated and should not be used or repeated.
- [ ] **New from resume review (Jul 28): elevate Publicis Groupe Careers
      site.** Currently buried in a one-line "Additional Engagements"
      bullet, but it's built in Next.js/React — the exact stack being
      targeted, and notably the only piece of real work in Next.js/React
      specifically (Vans is Vue, Walmart Connect is SCSS/AEM, Uniwatch
      is backend-heavy). Two actions: (1) pull it into its own
      standalone resume bullet with real detail/impact, not grouped
      with Wegmans — quick, do this soon; (2) consider as a 4th
      portfolio case study in cycle 2 — it's arguably the single most
      directly relevant proof point for the roles being targeted.

- [ ] Bump GitHub Actions versions in tests.yml (checkout, setup-node,
      upload-artifact) — currently showing a "Node.js 20 deprecated,
      forced to run on Node 24" warning. Not an error, tests still
      pass, but worth a quick version bump to the latest majors when
      there's time. Unrelated to the app's own Node 20 target.

- [ ] **About section: add portrait photo.** v1 ships without one (no
      good photo on a dark background available yet). When ready:
      circle back to Claude Design to reintroduce the image slot
      alongside the framework badges + concept grid, without
      disrupting that layout.

- [ ] **Move to andres.castilloquesada.com as primary, apex redirects
      to it.** Decided post-launch, not urgent — zero SEO cost since
      the site has no indexing history yet. Three pieces: (1) DNS —
      new CNAME for `andres` pointing at Vercel, same pattern as the
      existing `www` record; (2) Vercel — add the subdomain, set it as
      primary/production, repoint the apex redirect (currently →
      www) to go to the subdomain instead; (3) CODE — update
      metadataBase in layout.tsx from castilloquesada.com to the
      subdomain (drives OG tags + canonical URLs, easy to miss since
      it's not DNS-visible). Verify propagation + the full redirect
      chain (apex → subdomain, no loop) before considering it done.

## Deferred polish (post-v1)

- [ ] **Hero reveal: replay on nav-click.** v1 ships with a simple
      "fires once, ever" hero animation (ScrollTrigger + once: true —
      first viewport entry, however it happens, triggers it; never
      again after). Nice-to-have upgrade: clicking a nav item that
      scrolls back to the hero (e.g. logo/"Home") replays the reveal
      every time, while organic scroll-past still only plays it once.
      Needs a ref-based flag (navTriggeredRef) set in the nav click
      handler and checked/reset inside the ScrollTrigger's onEnter —
      NOT useState, since nothing here should force a re-render.
      Also remember: SplitText instance must be .revert()'d before
      each re-split on replay, or stale wrapper spans accumulate.

## Cut from v1 during the Tue/Wed hard-deadline sprint (Jul 28-29)
Applications paused until launch per family advice on first-impression
risk — this made "ship, not perfect" the explicit priority, so scope
was cut hard rather than quality. These are the specific cuts:

- [ ] **Contact form (serverless + SendGrid)** — v1 ships with the
      InfoCard contact-block variant instead (mailto + LinkedIn +
      GitHub links only, no actual form/backend). Real form + SendGrid
      integration deferred — still valuable as a practice item, just
      not blocking launch.
- [ ] **Dedicated About section** — v1 folds a short bio paragraph into
      the hero/contact area instead of a full standalone section with
      its own layout and scroll choreography.
- [ ] **Full ship-quality passes** — v1 ships with essentials only
      (basic meta/OG tags, favicon, a quick Lighthouse sanity check).
      Deferred: a real accessibility audit (WCAG-level pass, not just
      basic contrast/alt text) and deeper performance tuning.

## This launch (not deferred — noted for the Contact block)

- [ ] Resume download: static PDF in `public/`, link with `download`
      attribute. No API needed. (Optional later: `/api/resume` route
      that logs a download count before redirecting to the file.)
- [ ] Contact form: serverless via a Next.js route handler + SendGrid API
      — deliberate choice over a separate backend, both to keep launch
      scope small and as practice with the SendGrid integration pattern
      (validate input server-side, send via API key stored in env vars,
      never expose the key client-side).

## Separate project — not part of this site's launch scope

- [ ] Full-stack NestJS (or Express) API + database build. Purpose still
      open — leading candidates: admin dashboard (view contact
      submissions, resume download counts), blog/CMS layer, or simply
      portfolio/practice value of a full-stack NestJS build on its own.
      Revisit once the portfolio's live and there's room to scope it as
      its own mini-project rather than a website "phase."

## Content / structure

- [ ] Case study **detail pages** — v1 ships all three narratives inline
      on the landing page; dedicated `/work/[slug]` pages with a reusable
      template are the cycle-2 upgrade.
- [ ] Vans LinkedIn video embed — reach out to the former colleague for
      permission before embedding.

## Design

- [ ] Export the Claude Design file as Standalone HTML → import via
      html.to.design into Figma, for your partner to review/tweak
      editable frames. Do this *after* she's seen the live preview URL,
      not instead of it — motion doesn't transfer to Figma.
- [ ] Work through your parked review notes from the first Claude Design
      pass (the ones set aside the day the prototype came back).
- [ ] Verify: card border-radius value (wasn't in the extracted token
      list — currently a guess in `theme.css`, confirm against the HTML
      export's computed styles).
- [ ] Verify: outcome-stat mobile font size (also a guess, same reason).

## DNS

- [ ] Revert `castilloquesada.com` and `www.castilloquesada.com` DNS
      record TTLs from 5 min back to 24h once the site is confirmed
      stable — 5 min was set temporarily during launch weekend for
      fast troubleshooting feedback.

## GitHub

- [ ] Profile README (`CatinhoCR/CatinhoCR` special repo) — positioning
      line + links.
- [ ] Bulk-privatize old/junk repos via `gh` CLI loop (private beats
      archive — fully hidden from public view).
- [ ] Pin the portfolio repo once it's in better shape, plus 5 other
      presentable repos.

## Possible longer-horizon

- [ ] Three.js product configurator — identified as the strongest
      differentiator project; not started.
- [ ] Koyu Studio site — deferred until after this portfolio ships;
      reuse its components/patterns to build faster.
