const SHOP = 'https://www.sonofjohnlabel.com/products/';

export default {
  slug: 'five-gifts-2026',
  kicker: 'Gift guide',
  title: "The Five Gifts You Can't Go Wrong With in 2026",
  dek: "Not the safest gifts — the ones that actually get used. A short list for the man who insists he doesn't need anything.",
  description:
    "Five gifts that survive January: what to buy the man who says he doesn't need anything, and how to pick each one well.",
  author: 'The Style News Editors',
  date: '2026-09-01',
  dateLabel: '1 September 2026',
  readingTime: '6 min read',
  hero: {
    src: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/2-PACKISTRIPEDDUO_7e18a749-b10c-4f0d-9b8a-5b1f39fa06ab.png?v=1769527481&width=900',
    alt: 'A folded pair of striped cotton boxer shorts',
    caption: 'The best gifts are the ones that quietly replace something worn out.',
  },

  blocks: [
    { type: 'p', html: `Every December the same thing happens. You ask him what he wants, he says nothing, and you end up buying a gadget that is charming for four days and in a drawer by February. The problem isn't him. It's that most gift guides optimise for the moment the paper comes off, and almost nothing else.` },
    { type: 'p', html: `So we built this list backwards. We started with a single question — <em>which gifts are still in use in June?</em> — and worked back from there. What survives has almost nothing to do with novelty. It's the things he uses without thinking, that he would never quite get round to upgrading himself.` },
    { type: 'p', html: `Five categories, in the order we'd actually buy them.` },

    { type: 'entry', num: 'One', h2: 'Start with what he wears every single day' },
    { type: 'p', html: `Here is the strange maths of a man's wardrobe. He will spend two hundred euros on a jacket he wears once a week, and keep wearing underwear he bought in 2019 in a multipack. It's not a considered decision. It's that nobody ever replaces underwear on purpose — it just quietly degrades until something gives.` },
    { type: 'p', html: `Which is exactly what makes it a good gift. It's the one upgrade he genuinely notices every morning and would never buy for himself, because spending twenty-four euros on a single pair feels absurd right up until the moment he owns one.` },
    { type: 'pull', html: `Nobody replaces their underwear on purpose. It just quietly degrades until something gives.` },
    { type: 'p', html: `The thing worth paying attention to is the fabric. Most boxer shorts are cut from lightweight single-ply cotton that softens for a month and then pills. Two-ply yarn — the kind used for a good shirt — behaves differently: it starts soft and stays that way through the wash, which is the whole reason a shirt outlives a t-shirt.` },
    { type: 'p', html: `The Amsterdam label <strong>Son of John</strong> builds theirs from a two-ply 100s cotton, cut wide rather than fitted, with the label on the outside so nothing rubs. They arrive in a matching cotton bag, which does most of the wrapping for you.` },

    {
      type: 'pick',
      label: 'Our pick',
      name: '2-Pack · Striped Duo',
      price: '€46',
      href: SHOP + '2-pack-i-striped-duo',
      img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/2-PACKISTRIPEDDUO_7e18a749-b10c-4f0d-9b8a-5b1f39fa06ab.png?v=1769527481&width=900',
      alt: 'Son of John two-pack of striped cotton boxer shorts',
      blurb: `Royal Pinstripe and Oxford Stripe together. Two is the right number for a gift — enough to feel like a proper present, not so many that it reads as a hint.`,
      ctaText: 'View at Son of John',
    },

    { type: 'p', html: `If you'd rather pick a pattern yourself, these three are the ones we'd choose. All €24, all the same fabric.` },

    {
      type: 'grid',
      items: [
        { name: 'Oxford Stripe', price: '€24', href: SHOP + 'blue-white-striped', img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/3_570429f0-82c8-47e0-83aa-63f18140d2c7.png?v=1776248760&width=400', alt: 'Oxford Stripe boxer shorts' },
        { name: 'Navy Gingham', price: '€24', href: SHOP + 'dark-blue-white-checkered-white-medieval-blue-label', img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/2_3638c89d-7992-4c71-9414-4493656a87b3.png?v=1775831719&width=400', alt: 'Navy Gingham boxer shorts' },
        { name: 'Forest Bengal', price: '€24', href: SHOP + 'forrest-pinstripe', img: 'https://cdn.shopify.com/s/files/1/0878/9848/9173/files/3_2772fb69-ab76-41fe-9ac0-29d836c5ddbe.png?v=1771419871&width=400', alt: 'Forest Bengal boxer shorts' },
      ],
    },

    { type: 'entry', num: 'Two', h2: 'A fragrance he would never choose in a shop' },
    { type: 'p', html: `Men are conservative about fragrance for a boring reason: buying one means standing in a bright shop being asked questions by a stranger. So he wears the same bottle he was given at twenty-six.` },
    { type: 'p', html: `Buy something adjacent to what he already wears rather than a reinvention — if his current bottle is fresh and citrus-led, a woodier version of the same idea will feel like an upgrade rather than a correction. And buy the smaller size. A 50ml bottle he finishes is a better gift than a 100ml that stalls at the halfway mark.` },

    { type: 'entry', num: 'Three', h2: 'The replacement he keeps not making' },
    { type: 'p', html: `Every man is carrying around one object that is visibly finished. A card holder with a split seam. A wallet reshaped by a phone. A belt on its last hole with the leather cracking at the fold.` },
    { type: 'p', html: `He knows. He has known for a year. Replacing it is a twenty-minute errand that never makes it to the top of the list, and that is precisely the gap a gift fills. Look at what he actually takes out of his pocket, and buy that thing again in a better version.` },

    { type: 'entry', num: 'Four', h2: 'Something for the twelve bad-weather weeks' },
    { type: 'p', html: `Between November and February the Dutch weather does the same thing to everybody, and most men respond by owning nothing for it. No proper scarf, no gloves that survive a season, an umbrella from a petrol station.` },
    { type: 'p', html: `A lambswool or cashmere scarf in charcoal or navy is the safest thing on this list — it goes with the coat he already owns, and it gets worn roughly a hundred days a year. Judge it by weight rather than by brand: a scarf that feels substantial in the hand will still look right in three winters.` },

    { type: 'entry', num: 'Five', h2: 'A repair instead of a purchase' },
    { type: 'p', html: `The most quietly impressive gift we know isn't a new object at all. It's taking the thing he already loves and having it made right — his boots resoled, his watch serviced, the jacket he wears constantly taken in properly at the shoulders.` },
    { type: 'p', html: `It costs less than the equivalent new item, it says you were paying attention, and he gets back something he already trusts. If you want one idea from this list, take this one.` },

    { type: 'p', html: `None of these will be the loudest gift under the tree. All five will still be in use next summer, which was the only test that mattered.` },
  ],
};
