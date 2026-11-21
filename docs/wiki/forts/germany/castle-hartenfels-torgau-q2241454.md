# Castle Hartenfels Torgau

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-hartenfels-torgau-q2241454` |
| Coordinates | 51.55892, 13.00864 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.55892/13.00864)) |
| Wikidata | [Q2241454](https://www.wikidata.org/wiki/Q2241454) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|cultural heritage ensemble |
| Administrative area | Torgau |
| Inception | 1470 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 356 elements (outline 1, marker 12, road 169, building 153, zone 4, wall 60, retaining-wall 6, waterway 3).

Evidence: documented 0, mapped 356, inferred 0, derived 0; heights documented 11, inferred 0, unknown 175.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220537251 historic=castle Q2241454 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 153 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 169 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.55892/13.00864) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|cultural heritage ensemble; sitelinks=9; wikidata:Q2241454 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 356 elements); data/traces/castle-hartenfels-torgau-q2241454.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
