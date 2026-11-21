// Searches Wikimedia Commons for plan / map / survey / drawing files about a fort and lists them with licence, so a plan can be chosen
// for data/plans/REQUEST.csv. Runs in GitHub Actions (the Claude sandbox cannot reach Commons).
// Input: data/plans/SEARCH.txt, one line per site:  site_id|search phrase|search phrase...   (phrases are Commons full-text queries)
// Output: data/plans/search/<site_id>.json  [{title, url, w, h, licence, author, date, desc, query}] sorted: open licence first, plans first.
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const UA = 'forts.world-fort-fidelity/1.0 (https://github.com/mbaliga/forts.world; research tracing of public-domain plans)';
const OK = /(public domain|no restrictions|pd[- ]|cc0|cc[- ]by(?![- ]nc)|cc[- ]by-sa)/i;
const PLANISH = /\b(plan|map|survey|sketch|drawing|elevation|section|layout|chart|ground ?plan|atlas|gazetteer|diagram|lithograph|engraving|aerial)\b/i;
const strip = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

async function api(params) {
  const u = 'https://commons.wikimedia.org/w/api.php?' + new URLSearchParams({ format: 'json', origin: '*', ...params });
  const r = await fetch(u, { headers: { 'User-Agent': UA } });
  if (!r.ok) throw new Error(`API ${r.status}`);
  return r.json();
}

const lines = fs.readFileSync(path.join(root, 'data/plans/SEARCH.txt'), 'utf8').split(/\r?\n/).filter((l) => l.trim() && !l.startsWith('#'));
fs.mkdirSync(path.join(root, 'data/plans/search'), { recursive: true });
for (const line of lines) {
  const [site, ...queries] = line.split('|').map((s) => s.trim());
  const found = new Map();
  for (const q of queries) {
    try {
      const s = await api({ action: 'query', list: 'search', srnamespace: '6', srsearch: q, srlimit: '40' });
      const titles = (s.query?.search || []).map((x) => x.title);
      for (let i = 0; i < titles.length; i += 20) {
        const d = await api({ action: 'query', prop: 'imageinfo', iiprop: 'url|size|extmetadata', titles: titles.slice(i, i + 20).join('|') });
        for (const p of Object.values(d.query?.pages || {})) {
          const ii = p.imageinfo?.[0]; if (!ii || found.has(p.title)) continue;
          const m = ii.extmetadata || {};
          found.set(p.title, { title: p.title, url: ii.url, w: ii.width, h: ii.height, licence: strip(m.LicenseShortName?.value) || strip(m.UsageTerms?.value),
            author: strip(m.Artist?.value).slice(0, 120), date: strip(m.DateTimeOriginal?.value || m.DateTime?.value).slice(0, 40), desc: strip(m.ImageDescription?.value).slice(0, 200), query: q });
        }
      }
    } catch (e) { console.error(site, q, e.message); }
  }
  const list = [...found.values()].map((x) => ({ ...x, open: OK.test(x.licence), planish: PLANISH.test(x.title + ' ' + x.desc) }))
    .filter((x) => !/\.(ogg|webm|oga|wav|mp3|ogv)$/i.test(x.title))
    .sort((a, b) => (b.planish - a.planish) || (b.open - a.open) || (b.w * b.h || 0) - (a.w * a.h || 0));
  fs.writeFileSync(path.join(root, 'data/plans/search', `${site}.json`), JSON.stringify(list, null, 1));
  console.log(site, queries.length, 'queries ->', list.length, 'files,', list.filter((x) => x.planish).length, 'plan-like,', list.filter((x) => x.planish && x.open).length, 'plan-like and open');
}
