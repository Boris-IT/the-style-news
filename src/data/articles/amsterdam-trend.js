const SHOP = 'https://www.sonofjohnlabel.com/products/';

export default {
  slug: 'amsterdam-trend',
  partner: true,
  featured: true,
  kicker: 'The list',
  title: 'The 5 Biggest Amsterdam Fashion Trends Going Global',
  dek: 'What the city is actually wearing — and where to start if you want in.',
  description:
    'Five Amsterdam street-style trends now spreading well beyond the city: loose boxer shorts, roomier trousers, the open shirt layer, low-profile sneakers and navy on navy.',
  author: 'The Style News Editors',
  date: '2026-09-04',
  dateLabel: '4 September 2026',
  readingTime: '3 min read',
  hero: null,

  blocks: [
    { type: 'p', html: `Amsterdam dresses for a bike, not a runway — loose, flat-soled, layered for weather that turns twice before lunch. These are the five that have started showing up well outside the ring road.` },

    {
      type: 'trend',
      num: '1',
      h2: 'Loose-fitting boxer shorts',
      img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/3_570429f0-82c8-47e0-83aa-63f18140d2c7.png?v=1776248760&width=900',
      alt: 'Blue and white striped loose-fitting cotton boxer shorts',
      credit: 'Son of John',
      cta: 'View at Son of John',
      href: SHOP + '2-pack-i-striped-duo',
      text: `Trousers got roomier and the layer underneath followed. Woven and cut wide has replaced tight jersey, and once the fit stopped being the point, the fabric became it — shirting patterns, two-ply cotton, the same standards as a good shirt. <strong>Son of John</strong> is the Amsterdam label that pushed it furthest. Ships worldwide.`,
    },

    {
      type: 'trend',
      num: '2',
      h2: 'Trousers with room in them',
      img: null,
      imgNote: 'Wide or pleated trousers, full length, on the street',
      credit: null,
      text: `Not the extreme baggy silhouette of two years ago — just cut with air through the thigh and a proper break over the shoe. Pleats are back and nobody is embarrassed about it. Works because you can actually cycle in them.`,
    },

    {
      type: 'trend',
      num: '3',
      h2: 'A shirt worn open over a longsleeve',
      img: null,
      imgNote: 'Open overshirt or button-down over a plain long-sleeved tee',
      credit: null,
      text: `The most practical thing on the list. An overshirt left open over a plain long-sleeved tee solves mornings that start at nine degrees and end at eighteen. Contrast the weights, not the colours: thin jersey under something with structure.`,
    },

    {
      type: 'trend',
      num: '4',
      h2: 'Low-profile sneakers',
      img: null,
      imgNote: 'Flat, thin-soled gum-bottomed sneakers, close crop on the foot',
      credit: null,
      text: `Flat, thin-soled, gum-bottomed. Chunky is finished on the cobbles and the reason is boringly practical — you can feel a pedal through them. Wear them scuffed; new ones look like you're trying.`,
    },

    {
      type: 'trend',
      num: '5',
      h2: 'Navy on navy',
      img: null,
      imgNote: 'Full navy outfit — shirt and trousers in slightly different tones',
      credit: null,
      text: `Black is out and navy took the whole outfit, top to bottom, in tones that don't quite match. It reads considered rather than severe, and it is the easiest way to look put together with two items.`,
    },

    { type: 'entry', num: 'The verdict', h2: 'What connects them' },
    { type: 'p', html: `None of these came off a runway. They come from a city where most people are on a bike in unreliable weather, and they spread because they solve something — which is also why they travel.` },

    {
      type: 'cta',
      text: 'Number one on the list.',
      href: SHOP + '2-pack-i-striped-duo',
      ctaText: 'See Son of John',
    },
  ],
};
