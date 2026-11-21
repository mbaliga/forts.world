# Porta Fontinalis

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-fontinalis-q1615030` |
| Coordinates | 41.894, 12.4843 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.894/12.4843)) |
| Wikidata | [Q1615030](https://www.wikidata.org/wiki/Q1615030) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|archaeological site |
| Administrative area | Rome |
| Wikipedia language editions | 15 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 389 elements (outline 1, marker 21, road 335, building 322, wall 180, water 4, zone 36, retaining-wall 93, waterway 1).

Evidence: documented 0, mapped 389, inferred 0, derived 0; heights documented 0, inferred 0, unknown 264.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13357832 historic=archaeological_site Q1980093 18 m from ledger point
- pruned to the outline plus 150 m: 993 -> 602 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 177 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 176 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.894/12.4843) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|archaeological site; sitelinks=15; wikidata:Q1615030 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 389 elements); data/traces/porta-fontinalis-q1615030.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
