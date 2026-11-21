# Shugaku-in Imperial Villa

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shugaku-in-imperial-villa-q2223611` |
| Coordinates | 35.05364, 135.80162 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.05364/135.80162)) |
| Wikidata | [Q2223611](https://www.wikidata.org/wiki/Q2223611) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|detached palace\|royal villa\|Japanese Imperial Facilities |
| Administrative area | Sakyō-ku |
| Inception | 1659 |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, marker 63, road 212, zone 120, waterway 74, building 909, water 3, wall 4, retaining-wall 7).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 2, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/552545536 historic=castle Q2223611 27 m from ledger point
- pruned to the outline plus 150 m: 1393 -> 918 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 554 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 168 mapped (trace size budget); minor lanes are not drawn
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.05364/135.80162) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|detached palace\|royal villa\|Japanese Imperial Facilities; sitelinks=11; wikidata:Q2223611 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/shugaku-in-imperial-villa-q2223611.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
