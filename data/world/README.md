# data/world

Built by `tools/world/build-world.mjs` from `data/world-raw/` (fetched by the `fetch-world` workflow).

- `sites.csv.gz`: every merged site. `notable=1` rows come from Wikidata (CC0); `notable=0` rows are OpenStreetMap objects tagged `historic=castle|fort|fortress|ruins`.
- `summary.json`: counts and dedupe statistics for the build.

## Licence, plainly

- Wikidata fields (qid, labels, coordinates, sitelink count, classes, designations): CC0.
- OpenStreetMap-derived fields (the `notable=0` rows, and the `osm` object ids on all rows): © OpenStreetMap contributors, ODbL 1.0. Keep that attribution wherever these rows are published, and do not copy OSM rows into a CC0 dataset.
- The merged table is therefore a mixed-licence collection; the `notable` and `osm` columns say which rows are which.

## What is and is not in it

- Notable = Wikidata item that is a fortification, castle or fort (subclasses followed) with coordinates and a Wikipedia sitelink, a heritage designation or a World Heritage id.
- Map-only = OSM `historic=castle`, `historic=fort|fortress`, or `historic=ruins` that is named or tagged `ruins=castle|fort|fortress|fortification|tower`. Unnamed, untagged ruins are not fetched.
- Dedupe: an OSM object is folded into a Wikidata site by its `wikidata` tag, or by being within 300 m with a shared name token (or within 40 m when either side has no name). OSM node+way pairs for one site within 150 m with a shared name are merged. Anything unmatched stays as its own marker, so some duplicates and some missing links are expected.
- Sites in `data/sites.csv` are linked by Wikidata id only; the programme link is `programme_id`.
