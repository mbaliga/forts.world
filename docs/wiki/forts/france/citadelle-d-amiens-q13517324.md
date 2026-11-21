# Citadelle d'Amiens

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadelle-d-amiens-q13517324` |
| Coordinates | 49.9061, 2.29861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.9061/2.29861)) |
| Wikidata | [Q13517324](https://www.wikidata.org/wiki/Q13517324) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Amiens |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 2, road 260, waterway 17, building 1126, water 6, retaining-wall 7, wall 11, zone 9).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 1, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1096437942 historic=castle Q13517324 204 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1126 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 260 mapped (trace size budget); minor lanes are not drawn
- origin moved 198 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.9061/2.29861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=3; wikidata:Q13517324 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/citadelle-d-amiens-q13517324.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
