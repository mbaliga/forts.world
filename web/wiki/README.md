# web/wiki

The public wiki, served at `/wiki/`: a single page (`index.html`) with hash routes `#/`, `#/countries`,
`#/country/<slug>` and `#/site/<id>`. It reads JSON built from the ledger, the world table, the traces and the research
passes; nothing in it is typed by hand.

```sh
node tools/wiki/build-site.mjs                 # writes web/wiki/data/ (gitignored); about 3 minutes, mostly reading ~80,000 traces
WIKI_TRACE_CACHE=/tmp/wiki-cache.json node tools/wiki/build-site.mjs   # reuse the parsed traces on later runs
python3 -m http.server -d web 8000             # then open http://localhost:8000/wiki/
```

## Data (`web/wiki/data/`)

| File | Contents |
|---|---|
| `meta.json` | countries and counts, the kind and tier dictionaries, the source table, the shard list, the featured sites |
| `idx-<n>.json` | search entries `[id, name, native, country, area, kind, lat, lon, tier, 3D (0 none, 1 model, 2 walkable), sitelinks]`, best known first, each under 4 MB |
| `c/<country>.json` | the page record of every site in that country |

About 175 files in all: one per country, never one per site, because Cloudflare Pages allows 20,000 files of at most 25 MiB.
The build fails if a search shard passes 5 MB or any file passes 20 MiB.

## What a page may say

- Identity, designations and dates come from Wikidata (CC0) and the UNESCO extract (ids and inscription years only).
- History comes only from `docs/research/*.md` (our passes, shown as documented, inferred, conflicts or gaps, with a link to
  the full pass and its citations), the ledger notes, and the reconstruction's own era notes. Where there is none the page
  says "Not researched yet". Wikipedia is linked, never copied (CC BY-SA).
- Sites that are not in the ledger (the roughly 67,000 map-only OpenStreetMap markers) have no page; they are on the atlas.
- Walk-in-3D links appear only for the ten forts of `ten-forts.html`.

Style and theme (`fw:theme`) follow `web/home/index.html`; no third-party tiles are used, the locator map draws the Natural
Earth land from `/data/land-110m.json` (the home page's data).
