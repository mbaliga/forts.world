# Castle Rushen

> Isle of Man · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-rushen-q2967821` |
| Coordinates | 54.07361, -4.65278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.07361/-4.65278)) |
| Wikidata | [Q2967821](https://www.wikidata.org/wiki/Q2967821) (CC0) |
| Wikidata class | castle |
| Types | castle\|national museum |
| Administrative area | Castletown |
| Inception | 1250 |
| Designations | registered building |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |
| OSM `website` | https://manxnationalheritage.im/our-sites/castle-castletown/ |

## What the model contains

Tier **T1**, status `outline+walls`, 263 elements (outline 1, marker 7, road 235, waterway 3, building 351, zone 8, water 5, coastline 1, wall 158, retaining-wall 5).

Evidence: documented 0, mapped 263, inferred 0, derived 1; heights documented 66, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/38301009 historic=castle Q2967821 24 m from ledger point
- pruned to the outline plus 80 m: 774 -> 290 elements
- roads capped: kept the 80 longest of 108 mapped (trace size budget); minor lanes are not drawn
- origin moved 24 m from the ledger point to the outline centroid
- sea-1: DEM check ok {"cells":48,"medianInside":7.6,"medianOutside":9.8}
- 62 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.07361/-4.65278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|national museum; sitelinks=13; wikidata:Q2967821 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/castle-rushen-q2967821.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/isle-of-man.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
