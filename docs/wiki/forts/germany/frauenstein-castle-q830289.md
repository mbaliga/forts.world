# Frauenstein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `frauenstein-castle-q830289` |
| Coordinates | 50.804, 13.5394 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.804/13.5394)) |
| Wikidata | [Q830289](https://www.wikidata.org/wiki/Q830289) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins\|Kulturdenkmal |
| Administrative area | Frauenstein |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 241 elements (outline 1, marker 4, road 98, building 65, wall 31, zone 29, retaining-wall 7, cliff 6).

Evidence: documented 0, mapped 241, inferred 0, derived 0; heights documented 17, inferred 0, unknown 86.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3148827 historic=castle Q830289 26 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.804/13.5394) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins\|Kulturdenkmal; sitelinks=5; wikidata:Q830289 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 241 elements); data/traces/frauenstein-castle-q830289.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
