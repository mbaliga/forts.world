# Castle of Trancoso

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-trancoso-q5049839` |
| Coordinates | 40.77917, -7.3475 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.77917/-7.3475)) |
| Wikidata | [Q5049839](https://www.wikidata.org/wiki/Q5049839) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Trancoso (São Pedro e Santa Maria) e Souto Maior |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 9, road 103, zone 8, wall 6, building 179).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 0, inferred 0, unknown 186.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/338218531 historic=castle Q5049839 24 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.77917/-7.3475) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=5; wikidata:Q5049839 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/castle-of-trancoso-q5049839.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
