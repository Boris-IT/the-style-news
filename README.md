# The Style News — advertorial pages

Static site (Astro) for thestylenews.com. Ad traffic lands here, reads an
article, and clicks through to sonofjohnlabel.com with attribution intact.

## Add a new article

1. Copy `src/data/articles/five-gifts-2026.js` to a new filename.
2. Change `slug` (this becomes the URL), the copy, and the products.
3. That's it — the page, the homepage listing and the sitemap pick it up
   automatically on the next build.

Block types available in `blocks`: `p`, `pull`, `entry` (numbered heading),
`pick` (single product with CTA), `grid` (three product cards).

## Settings

`src/config.js` — site name, disclosure line, Meta Pixel ID, GA4 ID, and the
default UTMs added to every outbound link.

## Tracking

Links to the shop automatically carry the visitor's own UTMs and click IDs
(fbclid, gclid, ttclid) across to Shopify, so paid sessions don't land in
Shopify as direct traffic. Defaults fill in only what the visitor didn't
arrive with. `utm_campaign` defaults to the article slug.

## Local

    npm install
    npm run dev

## Deploy

Vercel, framework preset "Astro". No environment variables needed.
