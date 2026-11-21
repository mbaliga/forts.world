# Bastion III Kleparz

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastion-iii-kleparz-q4868350` |
| Coordinates | 50.07417, 19.93778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.07417/19.93778)) |
| Wikidata | [Q4868350](https://www.wikidata.org/wiki/Q4868350) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kraków |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 6, road 517, building 192, wall 25, zone 190, retaining-wall 2).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 32, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1801655 historic=fort Q4868350 78 m from ledger point
- pruned to the outline plus 150 m: 933 -> 638 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 93 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 378 mapped (trace size budget); minor lanes are not drawn
- origin moved 67 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.07417/19.93778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q4868350 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/bastion-iii-kleparz-q4868350.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
