# Penmaen Burrows Ringwork

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `penmaen-burrows-ringwork-q122217860` |
| Coordinates | 51.57205, -4.11665 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.57205/-4.11665)) |
| Wikidata | [Q122217860](https://www.wikidata.org/wiki/Q122217860) (CC0) |
| Wikidata class | castle |
| Types | ringwork castle |
| Administrative area | Ilston |
| Designations | National Monument of Wales\|scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 26 elements (outline 1, road 13, coastline 2, waterway 2, building 1, cliff 2, zone 2, water 3).

Evidence: documented 0, mapped 26, inferred 0, derived 3; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/714942605 historic=archaeological_site 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":5,"medianInside":20,"medianOutside":26.6}
- sea-1: DEM check failed {"cells":87,"medianInside":10.7,"medianOutside":29.9}
- sea-2: DEM check failed {"cells":1,"medianInside":12.3,"medianOutside":26.3}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.57205/-4.11665) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; ringwork castle; sitelinks=2; wikidata:Q122217860 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 26 elements); data/traces/penmaen-burrows-ringwork-q122217860.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
