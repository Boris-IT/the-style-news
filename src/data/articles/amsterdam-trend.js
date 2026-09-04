const SHOP = 'https://www.sonofjohnlabel.com/products/';

export default {
  slug: 'amsterdam-trend',
  partner: true,
  featured: true,   // pinned as the homepage lead regardless of date
  kicker: 'The list',
  title: 'The Biggest Trend Out of Amsterdam Is About to Go Global',
  dek: "It isn't a look. It's a method — one category, made properly — and the five labels pushing it hardest are already leaving the city.",
  description:
    'Amsterdam’s most exportable fashion idea is a way of working, not a silhouette — and it has started to travel. Five labels ranked by how far they take it, from streetwear, footwear and denim to the drawer nobody thinks about.',
  author: 'The Style News Editors',
  date: '2026-09-04',
  dateLabel: '4 September 2026',
  readingTime: '6 min read',
  // Hero left empty until there's a real photograph; a product-on-white shot
  // at the top reads as a shop, not a magazine.
  hero: null,

  blocks: [
    { type: 'p', html: `Search for Amsterdam's biggest fashion trend and you'll get a look: wide-leg denim, low-profile sneakers, everything cut loose enough to cycle in. It isn't wrong — walk down the Haarlemmerstraat on a Saturday and that's exactly what you'll see. But a look is the surface. It changes every few seasons and it travels badly. The thing worth exporting is underneath it.` },
    { type: 'p', html: `Look at the labels that have come out of this city in the last two decades and a pattern shows up that has nothing to do with silhouette. It's a method: <em>pick one category, and refuse to make anything else until you've made that one thing properly.</em> It is almost the opposite of how fashion normally works, where a label establishes a look and then extends it across everything it can print a logo on.` },
    { type: 'p', html: `So here are five Amsterdam labels — Patta, Ace &amp; Tate, Filling Pieces, Denham and Son of John — ranked not by size, which would make this a very different list, but by how completely each one commits to the method. Counting down from the purest example.` },

    { type: 'entry', num: 'Number one', h2: 'Son of John — the drawer nobody opens on purpose' },
    { type: 'p', html: `Follow the method to its logical end and it points somewhere slightly absurd. If the Amsterdam idea is to find the category everyone has stopped thinking about and apply real making standards to it, the destination isn't outerwear or tailoring. Those get plenty of attention already. It's underwear.` },
    { type: 'p', html: `Here is the strange maths of a man's wardrobe: he will spend two hundred euros on a jacket he wears once a week, then keep wearing boxer shorts he bought in a multipack in 2019. Not a decision — the absence of one. Nobody replaces underwear on purpose. It quietly degrades until something gives.` },
    { type: 'pull', html: `Nobody replaces underwear on purpose. It quietly degrades until something gives.` },
    { type: 'p', html: `<strong>Son of John</strong> is a small Amsterdam label that took that gap seriously and built boxer shorts the way you'd build a shirt. The fabric is two-ply 100s cotton — the construction that makes a good shirt outlast a t-shirt, because two-ply yarn starts soft and stays soft through the wash instead of softening for a month and then pilling. Cut wide rather than fitted — the same loose, comfort-first instinct that defines the city's look above the waist, applied underneath it — so it breathes and doesn't ride. Label on the outside, so nothing sits against skin. A cotton bag instead of a plastic sleeve. It's positioned as an investment in the essentials rather than a multipack, and it comes with a warranty — which tells you what the label expects to happen to the fabric, which is nothing. Launched in 2024, it now ships worldwide: for a two-year-old underwear company, that's the kind of growth that usually only happens when the product is doing the talking.` },
    { type: 'p', html: `None of it is clever. All of it is the decision to bother, in a category where nobody else had. That is the method at its purest, which is why it tops the list.` },

    {
      type: 'pick',
      label: 'Number one · the pick',
      name: '2-Pack · Striped Duo',
      price: '',
      href: SHOP + '2-pack-i-striped-duo',
      img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/2-PACKISTRIPEDDUO_7e18a749-b10c-4f0d-9b8a-5b1f39fa06ab.png?v=1769527481&width=900',
      alt: 'Son of John two-pack of striped cotton boxer shorts',
      blurb: `Royal Pinstripe and Oxford Stripe — the two patterns that look most like the shirting they're descended from. Two pairs is enough to notice the difference in the wash.`,
      ctaText: 'View at Son of John',
    },

    { type: 'p', html: `Or start with a single pair and test the fabric argument yourself — the <a href="https://www.sonofjohnlabel.com/products/blue-white-striped" rel="sponsored noopener">Oxford Stripe</a> is the one to begin with.` },

    // Three-pattern product grid, removed 4 Sep 2026: too shop-like for an
    // editorial page and it split attention after the main pick. Restore
    // by uncommenting if testing says a choice of patterns converts better.
    //     { type: 'p', html: `Or start with a single pair and test the fabric argument yourself. All €24, all the same cotton.` },

    //     {
    //       type: 'grid',
    //       items: [
    //         { name: 'Oxford Stripe', price: '€24', href: SHOP + 'blue-white-striped', img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/3_570429f0-82c8-47e0-83aa-63f18140d2c7.png?v=1776248760&width=400', alt: 'Oxford Stripe boxer shorts' },
    //         { name: 'Navy Gingham', price: '€24', href: SHOP + 'dark-blue-white-checkered-white-medieval-blue-label', img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/2_3638c89d-7992-4c71-9414-4493656a87b3.png?v=1775831719&width=400', alt: 'Navy Gingham boxer shorts' },
    //         { name: 'Forest Bengal', price: '€24', href: SHOP + 'forrest-pinstripe', img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/3_2772fb69-ab76-41fe-9ac0-29d836c5ddbe.png?v=1771419871&width=400', alt: 'Forest Bengal boxer shorts' },
    //       ],
    //     },

    { type: 'entry', num: 'Number two', h2: 'Denham — the argument for obsession' },
    { type: 'p', html: `<strong>Denham the Jeanmaker</strong> was founded in Amsterdam in 2008 by the English jean maker Jason Denham. Not a fashion house that also sells jeans — a jean maker, which is a different job description and a narrower one.` },
    { type: 'p', html: `The company's stated principle is "the truth is in the details," which would be a marketing line anywhere else. Here it reads more like a production spec: fabric from mills in Italy and Japan, and a seal embroidered onto every pair in 691 stitches. Somebody counted. Somebody decided the number mattered. It set the local standard — that the interesting work happens at the fabric and the seam, not the campaign — and most of this list is downstream of it.` },

    { type: 'entry', num: 'Number three', h2: 'Filling Pieces — treating hype as a materials problem' },
    { type: 'p', html: `<strong>Filling Pieces</strong> arrived in 2009 into the one category where the method should have been impossible. Sneakers are sold on scarcity and collaboration; the shoe itself is often the least discussed part.` },
    { type: 'p', html: `They went at it from the other end — organic leather uppers, soles made using bio-based sugarcane — and treated a hype category as a materials question. That's Denham's move applied somewhere it had no business working, which is exactly why it did.` },

    { type: 'entry', num: 'Number four', h2: 'Ace & Tate — the unglamorous middle' },
    { type: 'p', html: `<strong>Ace &amp; Tate</strong> started in 2013 with eyewear: frames in premium acetate, designed in-house in Amsterdam. Glasses are a category most people buy once every few years, badly, under fluorescent light, from someone paid to upsell them.` },
    { type: 'p', html: `Making that specific experience better is not a glamorous ambition. It is, however, precisely the pattern — find a category people have stopped paying attention to, and pay attention to it.` },

    { type: 'entry', num: 'Number five', h2: 'Patta — where it started' },
    { type: 'p', html: `<strong>Patta</strong> is the oldest name here, and it began in 2004 not as a brand but as a supply line. Edson Sabajo and Guillaume Schmidt — a DJ and an MC in the city's hip-hop scene — were hunting sneakers abroad and bringing them back to Amsterdam for people who couldn't get them here. The demand became a business, the business became a shop, and only then did the shop become a label.` },
    { type: 'p', html: `That order is the whole point. Patta spent years obsessed with one category as buyers and sellers before it made a single garment, which is why the label that came out of it had something to say. It sits at five not because the idea was weak but because it was first — the proof, before anyone else had tried, that an Amsterdam label could know one thing completely and build on that. Everything above it on this list is a more concentrated version of the same bet.` },

    { type: 'entry', num: 'The verdict', h2: 'Why this counts as a trend' },
    { type: 'p', html: `Trend undersells it, honestly. A trend is something you can spot from across the street, and nobody is going to walk past you and identify what you're wearing as Amsterdam. There's no logo doing the work and no silhouette to spot.` },
    { type: 'p', html: `What's spreading is the premise — that a small label can pick one unfashionable category, take it seriously at the level of the fabric, and build a business on being the one company that bothered. Streetwear, eyewear, footwear, denim, and now the last drawer anyone thought to look in.` },
    { type: 'p', html: `It's the least photogenic thing the city has produced. It's also the one that travels best — which is why, quietly, it has started to. Number one on the list is the easiest place to begin, since it's the thing you'll wear tomorrow regardless.` },

    {
      type: 'cta',
      text: 'Number one on the list.',
      href: SHOP + '2-pack-i-striped-duo',
      ctaText: 'See Son of John',
    },
  ],
};
