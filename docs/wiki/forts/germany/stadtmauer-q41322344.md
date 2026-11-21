# Stadtmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q41322344` |
| Coordinates | 50.09443, 10.79431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.09443/10.79431)) |
| Wikidata | [Q41322344](https://www.wikidata.org/wiki/Q41322344) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Ebern |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 10, road 371, building 364, waterway 6, zone 6, water 1, wall 32).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 7, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/180659404 historic=yes Q1734103 32 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 364 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 371 mapped (trace size budget); minor lanes are not drawn
- origin moved 33 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.09443/10.79431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q41322344 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/stadtmauer-q41322344.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
