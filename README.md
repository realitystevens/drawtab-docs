# drawtab-docs

Drawtab's public API documentation site, built with [Nextra](https://nextra.site) (Next.js + MDX).

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Structure

Each page lives at `app/<route>/page.mdx`. Sidebar order and labels for a directory are set in that directory's `_meta.js`.

```
app/
  page.mdx                    /
  quickstart/page.mdx         /quickstart
  authentication/page.mdx     /authentication
  api-reference/
    render/page.mdx           /api-reference/render
    layers/page.mdx           /api-reference/layers
    errors/page.mdx           /api-reference/errors
  rate-limits/page.mdx        /rate-limits
  billing-and-credits/page.mdx
  templates/page.mdx
  webhooks/page.mdx
  sdks-examples/page.mdx
```

## Keeping this accurate

This site documents `workspace.drawtab.app`'s public API (`src/app/api/v1/render/route.ts` and the modules it depends on: `src/lib/apiKeyAuth.ts`, `src/lib/apiKeyRateLimit.ts`, `src/lib/renderService.ts`, `src/lib/engineClient.ts`, `src/lib/billingStore.ts`). When those change, update the corresponding page here in the same PR — don't let this drift into documenting behavior that no longer exists (see `/webhooks` for why that matters: it's marked "not available" because it genuinely isn't wired up yet, not as a placeholder).

## Build

```bash
npm run build
npm start
```

## Patched dependency

`patches/nextra-theme-docs+4.6.1.patch` fixes a real bug in `nextra-theme-docs` (reproduced across 4.3.0–4.6.1): its compiled `Layout` component destructures `children` out of its props into a rest-spread object, then validates that rest object against a schema that still requires `children` — so every page 500s with `Invalid input: expected nonoptional, received undefined → at children`. The patch passes the original, unstripped props object to the validator instead. It's applied automatically via `postinstall` (`patch-package`). If a `nextra-theme-docs` upgrade includes an upstream fix, drop this patch and remove the `postinstall` script.
