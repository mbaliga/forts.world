# Palais Bourbon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-bourbon-q936633` |
| Coordinates | 48.86161, 2.31825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.86161/2.31825)) |
| Wikidata | [Q936633](https://www.wikidata.org/wiki/Q936633) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|parliament building |
| Administrative area | 7th arrondissement of Paris |
| Inception | 1722 |
| Wikipedia language editions | 43 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 7, road 281, zone 43, building 106, water 1, wall 16, waterway 4, retaining-wall 4).

Evidence: documented 0, mapped 332, inferred 0, derived 0; heights documented 54, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1019368 historic=castle Q936633 14 m from ledger point
- roads capped: kept the 150 longest of 281 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.86161/2.31825) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|parliament building; sitelinks=43; wikidata:Q936633 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/palais-bourbon-q936633.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
