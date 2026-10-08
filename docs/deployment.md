# Deployment and recovery

This guide reflects Cloudflare documentation checked on 8 October 2026. The release uses Workers Static Assets for nine allowlisted files, one Worker health route and no database or object storage. [Static asset configuration](https://developers.cloudflare.com/workers/static-assets/) and [Worker Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) are the current upstream references.

## Local check

```sh
npm ci
npm test
npm run build
npm run dev
curl -i http://127.0.0.1:8787/api/health
curl -i http://127.0.0.1:8787/api/missing
```

Confirm `/api/health` is JSON 200, unknown `/api/*` is JSON 404, an unknown website path is a normal 404, and a root query URL such as `/?year=750&places=heijo,changan&topic=food` refreshes correctly. The app has no path-based client routes. `build.py` deletes and recreates `dist/` from its explicit allowlist, so the parent repository and local credentials cannot be picked up by a broad directory upload.

## Preview then production

1. Sign in to the owner's Cloudflare account with `npx wrangler login` and confirm `npx wrangler whoami`. Authentication is an owner account step on this machine; do not put a token in source.
2. Run `npm run preview`. This deploys the separate `culture-time-machine-web-preview` Worker from `wrangler.preview.toml`. Keep preview independent of production. It has no shared writable resource. Treat the preview URL as publicly reachable.
3. Inspect preview in desktop and mobile browsers. Check all topics, slider unavailable state, share-link refresh, back/forward, `/api/health`, `/api/missing`, real network errors and console logs. Record its actual URL and the source commit.
4. Run `npm run deploy` only after preview passes. The production Worker name is `culture-time-machine-web` in `wrangler.toml`. Verify the returned `workers.dev` URL from a fresh browser session and record the release commit.
5. In Cloudflare Workers & Pages, connect the production Worker to the public GitHub repository under **Settings → Builds → Connect**. Select the `main` production branch. Because the clean public repo has `wrangler.toml` at its root, use `npm ci && npm test && npm run build` as the build command and `npx wrangler deploy --config wrangler.toml` as the deploy command if prompted. Cloudflare requires the dashboard Worker name to match `wrangler.toml`. Branch previews can use Cloudflare's [preview builds](https://developers.cloudflare.com/workers/ci-cd/builds/) or the separate preview Worker; inspect them before main promotion.

## Custom domain

The free `workers.dev` hostname is enough for initial release. For a custom hostname, first choose or provide an owned domain and inspect its current DNS, including MX/TXT records. Cloudflare [Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) require an active Cloudflare zone and cannot attach to a hostname with an existing CNAME. In Workers & Pages → production Worker → Settings → Domains & Routes → Add → Custom Domain, add the chosen hostname. Cloudflare creates the needed DNS record. Verify HTTPS, canonical redirect choice, share links and email delivery; preserve unrelated DNS records. Do not register or transfer a domain until the owner chooses it and authorizes the charge.

Cloudflare Registrar is a reasonable single-vendor option for a **new** domain: Cloudflare says it sells and renews at registry/ICANN cost without markup, with exact price depending on the TLD and name ([Registrar docs](https://developers.cloudflare.com/registrar/)). If the owner already owns a domain elsewhere, it can stay at that registrar while DNS is configured for Cloudflare. Domain availability and price must be checked at purchase time.

## Updates and rollback

Make changes in a branch, run tests, review the preview, then merge the reviewed commit to `main`. A bad static/code release can be rolled back with Cloudflare's previous Worker version or by redeploying the prior Git commit. Recheck the live site and health endpoint. No D1 migrations or stored user data exist in this release, so code rollback has no data migration step. Keep DNS records untouched during ordinary content updates.

Cloudflare documents static asset requests as free and unlimited and Worker invocations on the Free plan as capped at 100,000/day; `/api/health` consumes Worker requests. This package has no other billable services ([static assets billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/), [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/)). A domain is a separate annual purchase. Recheck current plans and limits before enabling any paid feature.
