# Public web edition

This is the isolated Culture Time Machine public web package. The first screen is the working time-machine interface. Preserve the native app in the parent repository; do not copy its full asset directory into this package.

Run `npm ci`, `npm test`, `npm run build`, then `npm run dev` for local Worker preview. `dist/` is an allowlisted output from `build.py`. Keep `public/index.html` directly openable with `file://`; use ordinary scripts and no required framework build.

Historical claims belong in `public/content.js` with named, directly linked sources and explicit limits. Use modern country names only as location references, never as timeless historical states. The date encoding is astronomical: 0 displays as 1 BCE, 1 as 1 CE. Reviewed coverage currently means 750 CE only. Do not silently fill other years.

Use the existing dark globe and editorial paper panel direction. Keep keyboard and touch access, reduced-motion support, readable mobile cards, clear source links and URL state. Public images or data need item-level provenance and a reuse grant. Do not include unreviewed source assets, private notes, secrets or the parent repository's Git history.

Cloudflare Worker hosts static assets and `/api/health`; unknown `/api/*` must return JSON 404. Use preview deployment before production. A custom domain needs an owned Cloudflare zone and DNS review; never buy one or enable a paid plan without authorization.
