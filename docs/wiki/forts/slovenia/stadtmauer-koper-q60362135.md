# Stadtmauer Koper

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-koper-q60362135` |
| Coordinates | 45.54922, 13.73242 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.54922/13.73242)) |
| Wikidata | [Q60362135](https://www.wikidata.org/wiki/Q60362135) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | City Municipality of Koper |
| Designations | monument of local significance |
| Wikipedia language editions | 0 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 3, road 163, building 507, wall 51, zone 8, retaining-wall 3).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 11, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1033798953 historic=monument 216 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 507 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 163 mapped (trace size budget); minor lanes are not drawn
- origin moved 216 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.54922/13.73242) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q60362135 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/stadtmauer-koper-q60362135.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
