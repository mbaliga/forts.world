# Château d’Estaing

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-estaing-q2968230` |
| Coordinates | 44.5539, 2.67279 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.5539/2.67279)) |
| Wikidata | [Q2968230](https://www.wikidata.org/wiki/Q2968230) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Estaing |
| Designations | classified historical monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 6, road 178, zone 4, building 347, waterway 5, retaining-wall 37, wall 21, cliff 1).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 52, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/152361747 historic=castle Q2968230 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 347 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 178 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.5539/2.67279) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q2968230 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/chateau-d-estaing-q2968230.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
