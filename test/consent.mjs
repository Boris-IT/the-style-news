// Regression test for the cookie consent gate.
//
// The guarantee being protected: no advertising or analytics request, and no
// cookie, before a visitor actively opts in — and Accept/Decline rendered with
// identical prominence. Both are legal requirements, not preferences, so this
// is worth re-running after any change to Consent.astro or config.js.
//
//   npm i -D playwright && npx playwright install chromium
//   # set a dummy metaPixelId in src/config.js, then:
//   npx astro build && (cd dist && python3 -m http.server 4488 &)
//   node test/consent.mjs
//   # remember to clear the dummy ID afterwards
//
import { chromium } from 'playwright';
const URL = process.env.TEST_URL || 'http://localhost:4488/amsterdam-trend/';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const fbHits = (page) => { const h = []; page.on('request', r => { if (/facebook|fbevents/i.test(r.url())) h.push(r.url()); }); return h; };
const out = {};

// 1 — fresh visitor, no interaction
let ctx = await b.newContext(); let p = await ctx.newPage(); let h = fbHits(p);
await p.goto(URL, { waitUntil: 'networkidle' }); await p.waitForTimeout(1200);
out['1. fresh visit: banner shown'] = await p.isVisible('#consent');
out['1. fresh visit: pixel requests'] = h.length;
out['1. fresh visit: cookies'] = (await ctx.cookies()).length;

// 2 — click Decline
await p.click('[data-consent="denied"]'); await p.waitForTimeout(1200);
out['2. after Decline: banner hidden'] = !(await p.isVisible('#consent'));
out['2. after Decline: pixel requests'] = h.length;
await p.reload({ waitUntil: 'networkidle' }); await p.waitForTimeout(1200);
out['2. after Decline + reload: banner reappears'] = await p.isVisible('#consent');
out['2. after Decline + reload: pixel requests'] = h.length;
await ctx.close();

// 3 — click Accept
ctx = await b.newContext(); p = await ctx.newPage(); h = fbHits(p);
await p.goto(URL, { waitUntil: 'networkidle' }); await p.waitForTimeout(800);
await p.click('[data-consent="granted"]'); await p.waitForTimeout(1500);
out['3. after Accept: pixel requests'] = h.length;
out['3. after Accept: banner hidden'] = !(await p.isVisible('#consent'));

// 4 — returning visitor who accepted
await p.reload({ waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
out['4. return visit: banner shown'] = await p.isVisible('#consent');
out['4. return visit: pixel requests (cumulative)'] = h.length;
out['4. stored choice'] = await p.evaluate(() => localStorage.getItem('tsn-consent'));

// 5 — equal prominence of the two buttons
out['5. buttons identical style'] = await p.evaluate(() => {
  const [d, a] = ['denied', 'granted'].map(s => document.querySelector(`[data-consent="${s}"]`));
  const cs = el => { const c = getComputedStyle(el); const r = el.getBoundingClientRect();
    return [c.backgroundColor, c.color, c.fontSize, c.fontWeight, c.border, Math.round(r.width), Math.round(r.height)].join('|'); };
  return cs(d) === cs(a) ? 'yes — same colour, size, weight' : 'NO: ' + cs(d) + '  vs  ' + cs(a);
});
await b.close();
for (const [k, v] of Object.entries(out)) console.log(k.padEnd(46), v);
