# Tour Barberousse

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-barberousse-q11906` |
| Coordinates | 43.10778, 3.08444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.10778/3.08444)) |
| Wikidata | [Q11906](https://www.wikidata.org/wiki/Q11906) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Gruissan |
| Designations | monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, water 1, road 115, waterway 2, cliff 8, building 772, wall 30, zone 2, retaining-wall 1).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 0, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1187803908 historic=castle Q11906 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 772 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.10778/3.08444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q11906 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/tour-barberousse-q11906.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
