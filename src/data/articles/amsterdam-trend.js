const SHOP = 'https://www.sonofjohnlabel.com/products/';

export default {
  slug: 'amsterdam-trend',
  partner: true,
  featured: true,
  kicker: 'The list',
  title: 'The 5 Biggest Amsterdam Fashion Trends Going Global',
  dek: 'What the city is actually wearing this season — and the one detail underneath it that nobody was talking about a year ago.',
  description:
    'Five Amsterdam street-style trends now spreading beyond the city: the visible boxer, low-rise baggy denim, the shirt over the longsleeve, indoor-football sneakers and short socks.',
  author: 'The Style News Editors',
  date: '2026-09-04',
  dateLabel: '4 September 2026',
  readingTime: '4 min read',
  hero: null,

  blocks: [
    { type: 'p', html: `Amsterdam dresses for a bike, not a runway. Everything the city is wearing right now follows from that — loose, flat-soled, layered for weather that changes twice before lunch. Here are the five that have started turning up well outside the ring road, counting down from the one nobody saw coming.` },

    { type: 'trend', num: '01', h2: 'The boxer short you are meant to see',
      img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/3_570429f0-82c8-47e0-83aa-63f18140d2c7.png?v=1776248760&width=900',
      alt: 'Blue and white striped cotton boxer shorts',
      caption: 'Shirting patterns on the one layer that used to be hidden.' },
    { type: 'p', html: `Start at the bottom of the stack, because that's where the interesting change happened. Jeans now sit low and loose enough that the waistband is part of the outfit whether you planned it or not — and once something is visible, what it looks like starts to matter.` },
    { type: 'p', html: `Hence the shift from grey multipack jersey to actual patterns: pinstripe, gingham, bengal stripe. Shirting patterns, on the layer nobody used to think about. The Amsterdam label <strong>Son of John</strong> builds theirs from two-ply 100s cotton — the construction that makes a good shirt outlast a t-shirt — cut wide, with the label on the outside so nothing sits against skin.` },

    {
      type: 'pick',
      label: 'Number one · the pick',
      name: '2-Pack · Striped Duo',
      price: '',
      href: SHOP + '2-pack-i-striped-duo',
      img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/2-PACKISTRIPEDDUO_7e18a749-b10c-4f0d-9b8a-5b1f39fa06ab.png?v=1769527481&width=900',
      alt: 'Son of John two-pack of striped cotton boxer shorts',
      blurb: `Royal Pinstripe and Oxford Stripe — the two that look most like the shirting they're descended from. Ships worldwide.`,
      ctaText: 'View at Son of John',
    },

    { type: 'trend', num: '02', h2: 'Low-rise, wide-leg denim', img: null, alt: null, caption: null },
    { type: 'p', html: `The silhouette everything else hangs off. Baggy through the thigh, breaking hard over the shoe, sitting lower on the hip than anything has in fifteen years. It is the most visible trend on this list and the reason number one exists at all.` },
    { type: 'p', html: `The Amsterdam version is less exaggerated than the London one — wide, but still tailored enough to wear to work. <strong>Denham the Jeanmaker</strong>, founded here in 2008, has been making the case for denim as craft rather than fashion the entire time.` },

    { type: 'trend', num: '03', h2: 'A shirt worn open over a longsleeve', img: null, alt: null, caption: null },
    { type: 'p', html: `The most practical thing on the list. An overshirt or a heavy button-down, left open, over a plain long-sleeved tee. It solves a real problem — mornings that start at nine degrees and end at eighteen — and it reads as considered rather than fussy.` },
    { type: 'p', html: `Stripes under solid, or solid under check. The trick is contrast in weight, not in colour: a thin jersey under something with structure.` },

    { type: 'trend', num: '04', h2: 'Indoor-football sneakers', img: null, alt: null, caption: null },
    { type: 'p', html: `Flat, thin-soled, gum-bottomed. Sambas and their many descendants have replaced chunky sneakers on the cobbles almost completely, and the reason is boringly practical: you can actually feel a pedal through them.` },
    { type: 'p', html: `<strong>Filling Pieces</strong>, Amsterdam, 2009, went at the same category from the materials end — organic leather uppers, soles made using bio-based sugarcane — and treated a hype product as a construction problem.` },

    { type: 'trend', num: '05', h2: 'Short socks, deliberately visible', img: null, alt: null, caption: null },
    { type: 'p', html: `After a decade of no-show socks, the ankle sock is back and it is meant to be seen — a band of white or ribbed grey between a low sneaker and a wide hem. With trousers this loose, the ankle is one of the few places left to put a detail.` },
    { type: 'p', html: `Which is the pattern this whole list keeps repeating: as the clothes get bigger and plainer, the small visible things start carrying the outfit.` },

    { type: 'entry', num: 'The verdict', h2: 'What connects them' },
    { type: 'p', html: `None of these are runway trends. They come from a city where most people are on a bike in unreliable weather, and they spread because they solve something. That is also why they travel — a look that exists for a reason works anywhere the reason exists.` },
    { type: 'p', html: `And they share one more thing: every one of them puts a formerly hidden detail on display. The waistband, the ankle, the layer underneath. Number one is simply the one that went furthest down.` },

    {
      type: 'cta',
      text: 'Number one on the list.',
      href: SHOP + '2-pack-i-striped-duo',
      ctaText: 'See Son of John',
    },
  ],
};
