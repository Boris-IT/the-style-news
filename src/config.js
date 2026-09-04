// ── Site-wide settings. Everything you'd want to change lives here. ──────────

export const SITE = {
  name: 'The Style News',
  tagline: "Men's style, decoded",
  domain: 'https://thestylenews.com',
  publisher: 'Son of John B.V.',
  publisherUrl: 'https://www.sonofjohnlabel.com',
  // Article-level tag, shown under the byline the way magazines mark advertorial.
  // Names the commercial connection — required under the EU unfair-practices
  // rules (advertorial without disclosure is a per-se ban) and by Meta's
  // landing-page policy. Ownership itself is stated on the About page.
  partnerTag: 'Partner content · Son of John',
  disclosure:
    'The Style News is published by Son of John B.V. Articles featuring Son of John products are marked as partner content.',
};

// Tracking. Leave a value empty and its script simply isn't rendered.
export const TRACKING = {
  metaPixelId: '',   // e.g. '123456789012345'
  ga4Id: '',         // e.g. 'G-XXXXXXXXXX'
};

// Every outbound link to the shop gets these, plus whatever UTMs the visitor
// arrived with (see src/components/LinkTracking.astro).
export const OUTBOUND_DEFAULTS = {
  utm_source: 'thestylenews',
  utm_medium: 'advertorial',
};
