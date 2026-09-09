// ── Site-wide settings. Everything you'd want to change lives here. ──────────

export const SITE = {
  name: 'The Style News',
  tagline: "Men's style, decoded",
  domain: 'https://thestylenews.com',
  publisher: 'Son of John B.V.',
  publisherUrl: 'https://www.sonofjohnlabel.com',
  contactUrl: 'https://www.sonofjohnlabel.com/pages/contact',
  // Advertorial disclosure, printed at the foot of every article marked
  // partner: true. Advertorial without a disclosure is a per-se ban under
  // the EU unfair commercial practices rules and a rejection trigger for
  // Meta's landing-page review, so this must stay on every partner article.
  disclaimer:
    'Disclaimer: This article is an advertorial. Although we aim to provide valuable and accurate information, the content is intended for commercial purposes and may be designed to promote products and services. The information shown is based on marketing insight and cannot be regarded as independent advice. Always consult a specialist or expert before deciding to purchase a product.',
};

// Tracking. Leave a value empty and its script simply isn't rendered.
export const TRACKING = {
  metaPixelId: '',   // e.g. '123456789012345'
  ga4Id: '',         // e.g. 'G-XXXXXXXXXX'
  clarityId: 'yfiv5hqy5k',   // Microsoft Clarity project id
};

// Every outbound link to the shop gets these, plus whatever UTMs the visitor
// arrived with (see src/components/LinkTracking.astro).
export const OUTBOUND_DEFAULTS = {
  utm_source: 'thestylenews',
  utm_medium: 'advertorial',
};
