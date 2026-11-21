# Carew Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carew-castle-q752721` |
| Coordinates | 51.69844, -4.83066 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.69844/-4.83066)) |
| Wikidata | [Q752721](https://www.wikidata.org/wiki/Q752721) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Carew |
| Inception | 1270 |
| Designations | Site of Special Scientific Interest\|National Monument of Wales\|Grade I listed building\|scheduled monument |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 48 elements (outline 1, marker 1, coastline 1, road 25, waterway 1, building 7, wall 7, water 3, zone 2).

Evidence: documented 0, mapped 48, inferred 0, derived 2; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26680442 historic=castle Q752721 54 m from ledger point
- origin moved 55 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1995,"medianInside":11.1,"medianOutside":7.8}
- sea-1: DEM check ok {"cells":838,"medianInside":1.2,"medianOutside":12.4}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.69844/-4.83066) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=13; wikidata:Q752721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 48 elements); data/traces/carew-castle-q752721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
