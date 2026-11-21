# Fort Scaur Hill

> Bermuda · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-scaur-hill-q65128479` |
| Coordinates | 32.28511, -64.87226 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.28511/-64.87226)) |
| Wikidata | [Q65128479](https://www.wikidata.org/wiki/Q65128479) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 51 elements (outline 1, coastline 2, road 23, wall 3, building 15, zone 4, water 3).

Evidence: documented 0, mapped 51, inferred 0, derived 3; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/184584775 historic=fort 44 m from ledger point
- origin moved 45 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":8.3,"medianOutside":26.3}
- sea-1: DEM check ok {"cells":16,"medianInside":8.3,"medianOutside":26.8}
- sea-2: DEM check failed {"cells":4,"medianInside":14,"medianOutside":26.3}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.28511/-64.87226) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q65128479 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 51 elements); data/traces/fort-scaur-hill-q65128479.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bermuda.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
