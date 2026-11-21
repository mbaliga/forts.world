# Dungarvan Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dungarvan-castle-q20722243` |
| Coordinates | 52.08928, -7.61623 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.08928/-7.61623)) |
| Wikidata | [Q20722243](https://www.wikidata.org/wiki/Q20722243) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Dungarvan |
| Designations | national monument of Ireland |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `heritage` | yes |
| OSM `website` | https://heritageireland.ie/visit/places-to-visit/dungarvan-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 3, coastline 2, road 64, building 187, waterway 2, retaining-wall 4, wall 14, zone 6, water 3).

Evidence: documented 0, mapped 286, inferred 0, derived 3; heights documented 28, inferred 0, unknown 177.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/769146176 historic=castle Q20722243 23 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":1562,"medianInside":3.8,"medianOutside":2.8}
- sea-1: DEM check failed {"cells":1582,"medianInside":3.8,"medianOutside":2.7}
- sea-2: DEM check ok {"cells":847,"medianInside":2.5,"medianOutside":6.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.08928/-7.61623) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=8; wikidata:Q20722243 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/dungarvan-castle-q20722243.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
