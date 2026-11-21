# Palais épiscopal d'Auxerre

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-episcopal-d-auxerre-q22966019` |
| Coordinates | 47.79816, 3.57385 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.79816/3.57385)) |
| Wikidata | [Q22966019](https://www.wikidata.org/wiki/Q22966019) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|episcopal palace |
| Administrative area | Auxerre |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 10, road 172, building 518, water 1, waterway 1, zone 9, wall 16).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 10, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62638210 historic=castle Q22966019 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 518 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 172 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.79816/3.57385) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|episcopal palace; sitelinks=2; wikidata:Q22966019 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/palais-episcopal-d-auxerre-q22966019.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
