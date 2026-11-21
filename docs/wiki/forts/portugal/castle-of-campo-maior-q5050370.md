# Castle of Campo Maior

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-campo-maior-q5050370` |
| Coordinates | 39.01105, -7.07231 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.01105/-7.07231)) |
| Wikidata | [Q5050370](https://www.wikidata.org/wiki/Q5050370) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | São João Baptista |
| Inception | 1310 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 1, road 94, wall 58, building 767, zone 1, waterway 1, water 1).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 0, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/157033164 historic=castle Q5050370 43 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 767 mapped (trace size budget); the rest of the town is not drawn
- origin moved 44 m from the ledger point to the outline centroid
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.01105/-7.07231) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=8; wikidata:Q5050370 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/castle-of-campo-maior-q5050370.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
