# Mlynská bašta

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mlynska-basta-q112093550` |
| Coordinates | 48.72677, 21.25682 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.72677/21.25682)) |
| Wikidata | [Q112093550](https://www.wikidata.org/wiki/Q112093550) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|bastion |
| Administrative area | Old Town |
| Inception | 1600 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 210 elements (outline 1, marker 6, road 334, building 156, waterway 4, zone 73, wall 47, retaining-wall 4, water 2).

Evidence: documented 0, mapped 210, inferred 0, derived 0; heights documented 21, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48358568 historic=ruins Q112093550 6 m from ledger point
- pruned to the outline plus 150 m: 627 -> 387 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 82 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 235 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.72677/21.25682) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|bastion; sitelinks=0; wikidata:Q112093550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 210 elements); data/traces/mlynska-basta-q112093550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
