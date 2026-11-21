# Paleis op de Meir

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `paleis-op-de-meir-q775797` |
| Coordinates | 51.21784, 4.40848 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.21784/4.40848)) |
| Wikidata | [Q775797](https://www.wikidata.org/wiki/Q775797) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Antwerp |
| Inception | 1745. |
| Designations | beschermd monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |
| OSM `website` | https://www.paleisopdemeir.be |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, marker 1, road 171, building 372, water 1, wall 8, retaining-wall 1, zone 1).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 7, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/902468 historic=castle Q775797 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 372 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 171 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.21784/4.40848) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=4; wikidata:Q775797 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/paleis-op-de-meir-q775797.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
