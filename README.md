# forts.world

Walkable 3D reconstructions of the world's forts, castles and fortified settlements. Every fort is shown two ways:
the **documented** model (only what plans, maps, surveys and photographs support, with heights left unknown where no
source gives them) and a tinted **constructed** version (what written sources describe, drawn schematically with
assumed heights and the rule for each). The ledger tracks about 86,000 sites from Wikidata, OpenStreetMap and
heritage lists, and the world map adds about 67,000 further OpenStreetMap markers. About 78,000 sites have an
automatic model (32,000 of them terrain and surroundings only, where no outline is mapped); a few dozen have
hand-built or plan-traced scenes.

## What is where

| Path | Contents |
|---|---|
| `src/`, `build.mjs` | The game: each fort at dated moments, walkable, with people, animals, guns, farming, battles and campaigns (three.js) |
| `src/levels/` | Fort scenes: hand-built levels (`*-hand.js` kept beside newer ones), traced levels (`<id>.trace.js` from `tools/trace/curation/<id>.mjs`) |
| `tools/` | Pipelines and checks: site universe, geometry fetch, auto-T1 traces (`build-t1.mjs`), curation (`trace/`), smoke tests, wiki (`wiki/`), map bundle and reconstructions (`world/`) |
| `web/home/` | The home page and time map: the site's front page (`/`). Viewpoint layers, relief contours, a fisheye timeline. Data built by `tools/world/build-home.mjs` |
| `web/forts-of-the-world/` | The atlas (`/atlas/`): every site, search, filters, records and a 3D viewer (its data bundle is generated) |
| `web/wiki/` | The public wiki (`/wiki/`): search, country pages and a page for every site, with history only where it can be sourced. Data built by `tools/wiki/build-site.mjs` into `web/wiki/data/` |
| `web/fort-search/` | Fort search with a Leaflet map |
| `data/` | Site tables (`sites.csv`, `world/`), plans and photos with their licences (`plans/`), open geometry (`geometry/`), traces (`traces/`) |
| `docs/fort-fidelity/` | The programme: `WORKFLOW.md`, `STANDARD.md`, the ledger (`ledger.csv`, one row per site), pipeline design, run notes |
| `docs/research/` | Per-fort research passes (documented versus inferred) |
| `docs/wiki/` | Generated wiki, one page per site, with sources |
| `docs/game/`, `docs/history/` | Game notes (level guide, changes, handoff) and earlier handoffs |
| `tests/` | Node tests |

## Quick start

Node 22 and pnpm (`corepack enable`). Everything runs from the repository root.

```sh
pnpm i
node build.mjs --level src/levels/agra-fort.js        # one fort  -> dist/test-agra-fort.html
node build.mjs --min                                    # the game  -> dist/index.html (+ dist/traces/)
node tools/world/build-reconstructions.mjs              # the ten hand-built forts -> dist/reconstructions.html
node tools/world/build-home.mjs                         # site data for the home page and time map (web/home/data)
node tools/world/build-atlas.mjs web/forts-of-the-world # data bundle for the atlas page
node tools/smoke.mjs agra-fort                          # build every period of a fort and check it can be walked
node --test tests/*.mjs tests/*.cjs
```

Open the HTML files directly, or serve `web/forts-of-the-world/` over HTTP for the map page.

## How forts get better

`docs/fort-fidelity/WORKFLOW.md` is the method: fetch open geometry, research plans and descriptions, trace the
documented layer, add the constructed layer, smoke-test, record the result in the ledger. A scheduled run takes the
next forts every day. Data that the sandbox cannot reach (OpenStreetMap, Wikidata, Wikimedia Commons, terrain tiles)
comes in through GitHub Actions, started by editing a request file and pushing to `dev`:

| Request file | Workflow | Result |
|---|---|---|
| `data/geometry/REQUEST.txt` | `fetch-geometry` | OSM and terrain for listed sites, then `build-traces` |
| `data/traces/MODEL-REQUEST.txt` | `model-all` | Auto-T1 models for every queued site, ledger updated |
| `data/plans/SEARCH.txt`, `data/plans/REQUEST.csv` | `search-plans`, `fetch-plans` | Wikimedia Commons plans with their licences |
| `data/sites-raw/REQUEST.txt`, `data/world-raw/REQUEST.txt` | `fetch-sites`, `fetch-world` | The site universe |

## Branches and publishing

- `dev` is the working branch: sessions, the daily run and the pipelines all commit there.
- `main` is what the site serves. It changes only by merging a pull request from `dev`.
- `deploy-pages` builds the site on every push to either branch and deploys it to Cloudflare Pages once the
  repository has the secrets `CLOUDFLARE_API_TOKEN` (Account, Cloudflare Pages: Edit) and `CLOUDFLARE_ACCOUNT_ID`.
  `main` becomes production; `dev` becomes a preview. Then add `forts.world` as a custom domain of the Pages project.

### Before launch

- The full game page bundles the 50 MB trace index, which is over Pages' 25 MiB file limit. Split the index into
  shards loaded on demand (or serve it from R2) before the game itself goes on the site. The map page and the
  ten-forts page fit.
- `web/fort-search` draws its base map from `tile.openstreetmap.org`, whose usage policy does not allow heavy public
  traffic. Switch to a free tile service meant for it (for example OpenFreeMap) or self-hosted tiles.
- 30 legacy tests fail, as they did in IN-RTS before the move (outdated counts and scene expectations from earlier
  phases). New work should not add to them.

## Licences

Code and writing: Apache License 2.0 (`LICENSE`). Open data keeps its own licences: OpenStreetMap-derived data is
ODbL, Wikidata CC0, and so on. `LICENSES.md` maps every directory to its licence and lists what was deliberately
left out (0 A.D. models, GPL historical borders, HydroRIVERS, an unlicensed photo tint). `NOTICE` carries the
attribution lines the site must show.

## History

Split out of IN-RTS on 2026-11-21 from branch `fort-fidelity` at commit `e0fbef17f`: the `experiments/fort-world`
game (now the repository root), the Forts of the World and fort search pages, the fort-fidelity programme, its data,
research and wiki. The earlier git history stays in IN-RTS.
