# Castle Roggwil

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-roggwil-q29883259` |
| Coordinates | 47.50063, 9.39509 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.50063/9.39509)) |
| Wikidata | [Q29883259](https://www.wikidata.org/wiki/Q29883259) (CC0) |
| Wikidata class | castle |
| Types | castle\|built structure |
| Administrative area | Roggwil |
| Designations | besonders wertvoll (Thurgau)\|class B Swiss cultural property of regional significance |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Ehemaliger Sitz der Herren von Roggwil (13. Jh.), als Lehen der Abtei St. Gallen in verschiedenen Händen bis 1806, danach Privatbesitz. Gesamtrenovation 1976--84, Aussenrestauration 1994/95. Heute Stiftung. (Quelle: Burgenverein.ch) |
| OSM `website` | https://schloss-roggwil.ch |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, road 259, building 128, zone 7, waterway 8, wall 8).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 1, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/242983242 historic=castle Q29883259 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 128 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 259 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.50063/9.39509) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|built structure; sitelinks=2; wikidata:Q29883259 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/castle-roggwil-q29883259.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
