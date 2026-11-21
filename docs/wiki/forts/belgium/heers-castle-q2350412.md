# Heers Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `heers-castle-q2350412` |
| Coordinates | 50.75678, 5.3029 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.75678/5.3029)) |
| Wikidata | [Q2350412](https://www.wikidata.org/wiki/Q2350412) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Heers |
| Designations | beschermd monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 85 elements (outline 1, water 4, road 44, building 23, zone 9, wall 2, waterway 2).

Evidence: documented 0, mapped 85, inferred 0, derived 0; heights documented 3, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5136687 historic=castle Q2350412 4 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.75678/5.3029) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q2350412 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 85 elements); data/traces/heers-castle-q2350412.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
