// Downloads openly licensed plans/photos from Wikimedia Commons into data/plans/<site_id>/ and records provenance.
// Runs in GitHub Actions (the Claude sandbox cannot reach Commons). Input: data/plans/REQUEST.csv with columns
//   site_id,commons_file,role      e.g. gwalior,File:Map of Gwalior Fort.jpg,plan
// A file is kept only if its licence is public domain, CC0, CC BY or CC BY-SA; otherwise only metadata is recorded.
// Output: data/plans/<site_id>/<safe name> and data/plans/<site_id>/manifest.json (url, licence, author, size, sha256, dimensions).
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const UA = 'forts.world-fort-fidelity/1.0 (https://github.com/mbaliga/forts.world; research tracing of public-domain plans)';
const MAX = 40 * 1024 * 1024;
const OK = /(public domain|no restrictions|pd[- ]|cc0|cc[- ]by(?![- ]nc)|cc[- ]by-sa)/i;
const reqPath = path.join(root, 'data/plans/REQUEST.csv');
const rows = fs.readFileSync(reqPath, 'utf8').split(/\r?\n/).filter((l) => l.trim() && !l.startsWith('#') && !l.startsWith('site_id'))
  .map((l) => { const i = l.indexOf(','), j = l.lastIndexOf(','); return { site: l.slice(0, i).trim(), file: l.slice(i + 1, j).trim(), role: l.slice(j + 1).trim() || 'photo' }; });

async function api(params) {
  const u = 'https://commons.wikimedia.org/w/api.php?' + new URLSearchParams({ format: 'json', origin: '*', ...params });
  const r = await fetch(u, { headers: { 'User-Agent': UA } });
  if (!r.ok) throw new Error(`API ${r.status} for ${params.titles || params.list}`);
  return r.json();
}
const strip = (s) => (s || '').replace(/<[^>]+>/g, '').trim();

for (const { site, file, role } of rows) {
  const dir = path.join(root, 'data/plans', site); fs.mkdirSync(dir, { recursive: true });
  const mpath = path.join(dir, 'manifest.json');
  const manifest = fs.existsSync(mpath) ? JSON.parse(fs.readFileSync(mpath, 'utf8')) : { site_id: site, items: [] };
  try {
    const j = await api({ action: 'query', titles: file, prop: 'imageinfo', iiprop: 'url|size|mime|sha1|extmetadata' });
    const page = Object.values(j.query.pages)[0]; const ii = page.imageinfo?.[0];
    if (!ii) { console.log(`MISSING ${file}`); manifest.items = manifest.items.filter((i) => i.file !== file); manifest.items.push({ file, role, status: 'not-found' }); continue; }
    const em = ii.extmetadata || {};
    const licence = strip(em.LicenseShortName?.value) || strip(em.UsageTerms?.value) || 'unknown';
    const item = { file, role, url: ii.url, page: `https://commons.wikimedia.org/wiki/${encodeURIComponent(file.replace(/ /g, '_'))}`, licence, licence_url: strip(em.LicenseUrl?.value), author: strip(em.Artist?.value), credit: strip(em.Credit?.value), date: strip(em.DateTimeOriginal?.value), description: strip(em.ImageDescription?.value).slice(0, 400), width: ii.width, height: ii.height, bytes: ii.size, mime: ii.mime, sha1: ii.sha1, retrieved: new Date().toISOString().slice(0, 10) };
    if (!OK.test(licence)) item.status = 'metadata-only (licence not in allow-list)';
    else if (ii.size > MAX) item.status = 'metadata-only (over size cap)';
    else {
      const r = await fetch(ii.url, { headers: { 'User-Agent': UA } });
      if (!r.ok) throw new Error(`download ${r.status}`);
      const buf = Buffer.from(await r.arrayBuffer());
      const safe = file.replace(/^File:/, '').replace(/[^A-Za-z0-9._-]+/g, '_');
      fs.writeFileSync(path.join(dir, safe), buf);
      item.saved = safe; item.sha256 = crypto.createHash('sha256').update(buf).digest('hex'); item.status = 'downloaded';
    }
    manifest.items = manifest.items.filter((i) => i.file !== file); manifest.items.push(item);
    console.log(`${item.status.padEnd(10)} ${site} ${file} [${licence}] ${ii.width}x${ii.height}`);
  } catch (e) { console.log(`ERROR ${file}: ${e.message}`); manifest.items = manifest.items.filter((i) => i.file !== file); manifest.items.push({ file, role, status: 'error: ' + e.message }); }
  fs.writeFileSync(mpath, JSON.stringify(manifest, null, 1));
}
