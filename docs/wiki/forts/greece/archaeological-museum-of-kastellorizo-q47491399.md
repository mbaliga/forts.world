# Archaeological museum of Kastellorizo

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `archaeological-museum-of-kastellorizo-q47491399` |
| Coordinates | 36.15159, 29.59371 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.15159/29.59371)) |
| Wikidata | [Q47491399](https://www.wikidata.org/wiki/Q47491399) (CC0) |
| Wikidata class | castle |
| Types | castle\|towerhouse\|archaeological museum |
| Administrative area | Megisti Municipality |
| Inception | 1984 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | towerhouse |

## What the model contains

Tier **T1**, status `outline-only`, 76 elements (outline 1, marker 3, coastline 4, road 27, building 36, cliff 3, water 2).

Evidence: documented 0, mapped 76, inferred 0, derived 2; heights documented 0, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/875863903 historic=castle Q47491399 3 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":245,"medianInside":0,"medianOutside":8.9}
- sea-1: DEM check failed {"cells":398,"medianInside":0,"medianOutside":0}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.15159/29.59371) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|towerhouse\|archaeological museum; sitelinks=4; wikidata:Q47491399 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 76 elements); data/traces/archaeological-museum-of-kastellorizo-q47491399.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
