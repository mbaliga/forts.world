# Château de Mouans

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-mouans-q2970073` |
| Coordinates | 43.6206, 6.9692 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.6206/6.9692)) |
| Wikidata | [Q2970073](https://www.wikidata.org/wiki/Q2970073) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Mouans-Sartoux |
| Inception | 1510 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 280 elements (outline 1, road 213, zone 1, water 1, building 558, retaining-wall 3, waterway 4).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20078501 historic=castle Q2970073 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 558 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 213 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.6206/6.9692) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2970073 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 280 elements); data/traces/chateau-de-mouans-q2970073.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
