# Hindsgavl Voldsted

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hindsgavl-voldsted-q12316804` |
| Coordinates | 55.50728, 9.68215 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.50728/9.68215)) |
| Wikidata | [Q12316804](https://www.wikidata.org/wiki/Q12316804) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Middelfart Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 29 elements (outline 1, road 12, waterway 7, water 4, coastline 1, zone 4).

Evidence: documented 0, mapped 29, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/261947207 historic=archaeological_site Q12316804 14 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":270,"medianInside":-1,"medianOutside":3.2}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.50728/9.68215) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=2; wikidata:Q12316804 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 29 elements); data/traces/hindsgavl-voldsted-q12316804.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
