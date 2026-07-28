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
