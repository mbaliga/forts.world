# Ravenscraig Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ravenscraig-castle-q3994788` |
| Coordinates | 56.11958, -3.14127 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.11958/-3.14127)) |
| Wikidata | [Q3994788](https://www.wikidata.org/wiki/Q3994788) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fife |
| Inception | 1460 |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 176 elements (outline 1, coastline 1, road 95, zone 13, building 57, wall 6, cliff 2, water 1).

Evidence: documented 0, mapped 176, inferred 0, derived 1; heights documented 3, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11014909 historic=castle Q3994788 75 m from ledger point
- origin moved 75 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":354,"medianInside":18,"medianOutside":27.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.11958/-3.14127) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q3994788 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 176 elements); data/traces/ravenscraig-castle-q3994788.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
