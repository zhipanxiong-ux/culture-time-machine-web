# Public web release report · 8 October 2026

## Scope

A clean, standalone browser app is implemented locally under `public-web/`. Its first screen is the globe and time drive. The sole reviewed public comparison is Tang Chang’an and Nara Heijō-kyō around 750 CE, with work, food supply, city/homes and exchange topics. Each topic shows both contexts, source links and evidence limits. Other slider years are explicitly unavailable. No parent media library, archival globe texture or private project history is included.

Frontend: plain HTML/CSS/JavaScript, 2D canvas globe, modern Natural Earth coastlines, place-button fallback, query-string sharing and native browser navigation. Backend: one Cloudflare Worker with `GET /api/health` and JSON API errors. Database, account, AI chat, submissions and persistent user data: none.

## Verification

- `npm test`: four checks pass for BCE/CE display, URL restoration, malformed URL handling and Worker API behavior.
- Local Wrangler preview: `/api/health` returned JSON 200; unknown `/api/missing` returned JSON 404; unknown website path returned 404; root shared query links returned the site and restored state.
- Browser: Chromium desktop at 1440×900 and mobile at 390×844 manually inspected. Safari/WebKit desktop rendering and topic switching also checked. Topic switching, URL update, back/forward, refresh, unsupported-year state and return control worked. The saved [desktop](desktop.png) and [mobile](mobile.png) screenshots show the reviewed view. The mobile comparison stacks places for readable text.
- Output: nine public files, roughly 80 KB uncompressed. The land mask is about 20 KB. No external runtime script, font or image download is required.
- Static package inventory and a focused credential-pattern scan found only the intended app, map, metadata and Worker code. `dist/` is not committed.

## Limits and deployment status

This release has one detailed year, two capital regions and four topics. It does not certify the parent archive's other historical anchors. Some claims are broad because the cited sources are broad, and the UI calls out those limits. The globe uses modern coastlines and capital points, not eighth-century political borders. Canvas-unavailable users can use place buttons and comparison tabs.

Cloudflare Wrangler reports **not authenticated**, so a durable Cloudflare preview and production URL have not yet been verified. No custom domain is selected or purchased. The parent repository has no Git remote; this web package is published as a separate GitHub repository: https://github.com/zhipanxiong-ux/culture-time-machine-web. The owner can complete Cloudflare login and select an owned domain after inspecting this package. Read [deployment.md](deployment.md) for exact commands and recovery.
