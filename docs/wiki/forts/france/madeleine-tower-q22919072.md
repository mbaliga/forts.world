# Madeleine Tower

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `madeleine-tower-q22919072` |
| Coordinates | 43.95037, 4.80466 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.95037/4.80466)) |
| Wikidata | [Q22919072](https://www.wikidata.org/wiki/Q22919072) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Avignon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 285 elements (outline 1, marker 7, road 217, building 571, zone 1, waterway 3, wall 1, water 2).

Evidence: documented 0, mapped 285, inferred 0, derived 0; heights documented 21, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/83786354 historic=castle Q3361180 231 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 571 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 217 mapped (trace size budget); minor lanes are not drawn
- origin moved 230 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.95037/4.80466) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q22919072 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 285 elements); data/traces/madeleine-tower-q22919072.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
