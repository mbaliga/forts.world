# Buena Vista Barracks and Battery

> Gibraltar · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `buena-vista-barracks-and-battery-q12053800` |
| Coordinates | 36.11792, -5.34994 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.11792/-5.34994)) |
| Wikidata | [Q12053800](https://www.wikidata.org/wiki/Q12053800) (CC0) |
| Wikidata class | fort |
| Types | fort\|barracks |
| Administrative area | Gibraltar |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 113 elements (outline 1, marker 2, road 27, cliff 5, building 57, wall 5, retaining-wall 5, zone 6, waterway 1, coastline 1, water 2).

Evidence: documented 0, mapped 113, inferred 0, derived 2; heights documented 0, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/492354171 historic=yes Q12053800 3 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":400,"medianInside":22.5,"medianOutside":86.3}
- sea-1: DEM check ok {"cells":125,"medianInside":0,"medianOutside":55.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.11792/-5.34994) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|barracks; sitelinks=3; wikidata:Q12053800 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 113 elements); data/traces/buena-vista-barracks-and-battery-q12053800.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/gibraltar.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
