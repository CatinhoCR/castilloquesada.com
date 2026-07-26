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
