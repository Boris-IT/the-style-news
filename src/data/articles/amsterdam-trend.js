const SHOP = 'https://www.sonofjohnlabel.com/products/';

export default {
  slug: 'amsterdam-trend',
  partner: true,
  featured: true,
  kicker: 'The list',
  title: 'The 5 Biggest Amsterdam Fashion Trends Going Global',
  dek: "Five things guys in Amsterdam are wearing right now that the rest of Europe hasn't caught onto yet.",
  description:
    'Five things men in Amsterdam are wearing right now: loose boxer shorts, relaxed-fit trousers, the henley, flat sneakers and navy on navy. What they are and how to wear them.',
  author: 'The Style News Editors',
  date: '2026-09-04',
  dateLabel: '4 September 2026',
  readingTime: '2 min read',
  hero: null,

  blocks: [
    { type: 'p', html: `Amsterdam has a way of dressing that everyone is starting to copy. Nothing loud, nothing complicated — just comfortable clothes that happen to look good. Here are the five you'll see all over the city right now, and how to wear them.` },

    {
      type: 'trend',
      num: '1',
      h2: 'Loose-fitting boxer shorts',
      img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/3_570429f0-82c8-47e0-83aa-63f18140d2c7.png?v=1776248760&width=900',
      alt: 'Blue and white striped loose-fitting cotton boxer shorts',
      cta: 'View at Son of John',
      href: SHOP + '2-pack-i-striped-duo',
      text: `Tight trunks are on the way out. Loose woven boxers are more comfortable and they just look better — more grown up, less teenager. The best ones we found are from <strong>Son of John</strong>. They're made from shirt fabric, which makes them thin but strong, and they come with a warranty. It's a small upgrade that lifts your whole outfit. Their own patterns, and a small logo on the back that finishes them off.`,
    },

    {
      type: 'trend',
      num: '2',
      h2: 'Relaxed-fit trousers',
      img: null,
      imgNote: 'Wide or pleated trousers, full length, on the street',
      text: `Skinny is done. You want space through the leg and a hem that falls straight over your shoe. Pleats are fine again. Keep the top half simple and it works with almost anything.`,
    },

    {
      type: 'trend',
      num: '3',
      h2: 'The henley',
      img: null,
      imgNote: 'Henley in waffle or fine knit, top buttons open, on body',
      text: `A t-shirt with a few buttons at the neck. That's it — and it looks a lot better than a plain tee without you doing anything extra. Leave the top buttons open. Waffle knit in winter, thin cotton the rest of the year.`,
    },

    {
      type: 'trend',
      num: '4',
      h2: 'Flat, low sneakers',
      img: null,
      imgNote: 'Flat, thin-soled gum-bottomed sneakers, close crop on the foot',
      text: `Chunky trainers are over. Flat ones with a thin sole, in white or gum, are what you'll see everywhere. They go with everything, and they look better once they've been worn in a bit.`,
    },

    {
      type: 'trend',
      num: '5',
      h2: 'Navy on navy',
      img: null,
      imgNote: 'Full navy outfit — shirt and trousers in slightly different tones',
      text: `Black got boring. Navy top, navy trousers, slightly different shades so it isn't a suit. It looks put together without much thought, which is the whole point.`,
    },

    { type: 'entry', num: 'The verdict', h2: 'Why it works' },
    { type: 'p', html: `None of this is complicated and none of it is expensive to try. It's comfortable clothes that look good, which is why it's spreading. Start with number one — it's the one nobody sees coming.` },

    {
      type: 'cta',
      text: 'Number one on the list. Ships worldwide.',
      href: SHOP + '2-pack-i-striped-duo',
      ctaText: 'See Son of John',
    },
  ],
};
