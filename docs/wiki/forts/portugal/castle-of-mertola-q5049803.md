# Castle of Mértola

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-mertola-q5049803` |
| Coordinates | 37.63806, -7.66444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.63806/-7.66444)) |
| Wikidata | [Q5049803](https://www.wikidata.org/wiki/Q5049803) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Mértola |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, marker 6, waterway 2, road 79, zone 3, building 72, wall 45, cliff 2, water 1).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 0, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/297538986 historic=castle Q5049803 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.63806/-7.66444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=8; wikidata:Q5049803 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/castle-of-mertola-q5049803.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
