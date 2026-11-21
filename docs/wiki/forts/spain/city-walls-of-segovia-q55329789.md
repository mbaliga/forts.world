# city walls of Segovia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-segovia-q55329789` |
| Coordinates | 40.95126, -4.12879 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.95126/-4.12879)) |
| Wikidata | [Q55329789](https://www.wikidata.org/wiki/Q55329789) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Segovia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 19, road 190, waterway 2, wall 25, building 222, retaining-wall 2, zone 4).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 4, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1174797992 historic=castle 498 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 222 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 190 mapped (trace size budget); minor lanes are not drawn
- origin moved 498 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.95126/-4.12879) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=4; wikidata:Q55329789 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/city-walls-of-segovia-q55329789.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
