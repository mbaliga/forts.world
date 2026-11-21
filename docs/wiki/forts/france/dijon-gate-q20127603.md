# Dijon Gate

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dijon-gate-q20127603` |
| Coordinates | 47.8554, 4.57506 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.8554/4.57506)) |
| Wikidata | [Q20127603](https://www.wikidata.org/wiki/Q20127603) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Châtillon-sur-Seine |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 206 elements (outline 1, marker 2, road 75, waterway 3, zone 4, building 318, water 1).

Evidence: documented 0, mapped 206, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/110425642 historic=castle Q16937101 376 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 318 mapped (trace size budget); the rest of the town is not drawn
- origin moved 377 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.8554/4.57506) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q20127603 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 206 elements); data/traces/dijon-gate-q20127603.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
