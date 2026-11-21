# Teil der Stadtmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `teil-der-stadtmauer-q47532050` |
| Coordinates | 50.74253, 8.2053 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.74253/8.2053)) |
| Wikidata | [Q47532050](https://www.wikidata.org/wiki/Q47532050) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Haiger |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 0 |
| OSM `historic` | building |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 274 elements (outline 1, road 227, building 345, waterway 2, wall 1).

Evidence: documented 0, mapped 274, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/124783186 historic=building 103 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 345 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 227 mapped (trace size budget); minor lanes are not drawn
- origin moved 103 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.74253/8.2053) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q47532050 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 274 elements); data/traces/teil-der-stadtmauer-q47532050.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
