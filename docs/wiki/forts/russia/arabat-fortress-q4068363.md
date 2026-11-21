# Arabat Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arabat-fortress-q4068363` |
| Coordinates | 45.29583, 35.47833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.29583/35.47833)) |
| Wikidata | [Q4068363](https://www.wikidata.org/wiki/Q4068363) (CC0) |
| Wikidata class | fort |
| Types | fortress\|archaeological site\|cultural property |
| Administrative area | Lenine Raion of Crimea |
| Inception | 1700 |
| Designations | State Register of Immovable Monuments of Ukraine\|federal cultural heritage site in Russia |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 27 elements (outline 1, marker 1, road 9, coastline 2, building 9, zone 4, water 1).

Evidence: documented 0, mapped 27, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/266004143 historic=castle Q4068363 52 m from ledger point
- origin moved 54 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":69,"medianInside":0.1,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.29583/35.47833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|archaeological site\|cultural property; sitelinks=17; wikidata:Q4068363 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 27 elements); data/traces/arabat-fortress-q4068363.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
