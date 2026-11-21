# Berwick Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `berwick-castle-q678714` |
| Coordinates | 55.77417, -2.01194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.77417/-2.01194)) |
| Wikidata | [Q678714](https://www.wikidata.org/wiki/Q678714) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Berwick-upon-Tweed |
| Designations | Grade I listed building |
| Wikipedia language editions | 14 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `location-only`, 182 elements (road 79, coastline 1, building 76, zone 4, wall 17, waterway 1, retaining-wall 2, water 2).

Evidence: documented 0, mapped 182, inferred 0, derived 1; heights documented 21, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8024680 historic=archaeological_site Q678714 52 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (133 x 117 m)
- origin moved 34 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":155,"medianInside":-0.3,"medianOutside":34.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.77417/-2.01194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=14; wikidata:Q678714 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 132 elements); data/traces/berwick-castle-q678714.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
