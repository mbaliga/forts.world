# Castle of Chaves

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-chaves-q5049770` |
| Coordinates | 41.73944, -7.47167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.73944/-7.47167)) |
| Wikidata | [Q5049770](https://www.wikidata.org/wiki/Q5049770) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Santa Maria Maior |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 375 elements (outline 1, marker 7, road 135, waterway 1, building 224, wall 5, water 1).

Evidence: documented 0, mapped 375, inferred 0, derived 0; heights documented 1, inferred 0, unknown 229.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1361762839 historic=citywalls 105 m from ledger point
- origin moved 107 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.73944/-7.47167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=4; wikidata:Q5049770 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 375 elements); data/traces/castle-of-chaves-q5049770.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
