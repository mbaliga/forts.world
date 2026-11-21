# Presles Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `presles-castle-q2970300` |
| Coordinates | 50.39007, 4.57908 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.39007/4.57908)) |
| Wikidata | [Q2970300](https://www.wikidata.org/wiki/Q2970300) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aiseau-Presles |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `website` | https://www.chateau-de-presles.be |

## What the model contains

Tier **T1**, status `outline+walls`, 82 elements (outline 1, zone 8, road 25, building 44, waterway 2, wall 2).

Evidence: documented 0, mapped 82, inferred 0, derived 0; heights documented 0, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/215104781 historic=castle Q2970300 21 m from ledger point
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.39007/4.57908) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q2970300 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 82 elements); data/traces/presles-castle-q2970300.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
