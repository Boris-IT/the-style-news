// ── Site-wide settings. Everything you'd want to change lives here. ──────────

export const SITE = {
  name: 'The Style News',
  tagline: "Men's style, decoded",
  domain: 'https://thestylenews.com',
  publisher: 'Son of John B.V.',
  publisherUrl: 'https://www.sonofjohnlabel.com',
  // Shown under every byline and in the footer. Keeps us clean with the ACM
  // and with Meta's landing-page policy.
  disclosure:
    'The Style News is published by Son of John B.V. Articles may feature and link to Son of John products.',
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
