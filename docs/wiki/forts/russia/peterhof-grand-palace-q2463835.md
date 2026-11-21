# Peterhof Grand Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `peterhof-grand-palace-q2463835` |
| Coordinates | 59.88452, 29.90884 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.88452/29.90884)) |
| Wikidata | [Q2463835](https://www.wikidata.org/wiki/Q2463835) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum building |
| Administrative area | Peterhof |
| Inception | 1714. |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, water 36, road 260, building 37, waterway 51, zone 37, coastline 1, wall 3, retaining-wall 1).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 21, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7483660 historic=castle Q2463835 2 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- roads capped: kept the 150 longest of 260 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.88452/29.90884) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum building; sitelinks=14; wikidata:Q2463835 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/peterhof-grand-palace-q2463835.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
