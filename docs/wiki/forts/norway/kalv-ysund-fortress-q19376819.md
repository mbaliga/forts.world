# Kalvøysund Fortress

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kalv-ysund-fortress-q19376819` |
| Coordinates | 58.53933, 8.97758 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.53933/8.97758)) |
| Wikidata | [Q19376819](https://www.wikidata.org/wiki/Q19376819) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Arendal Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 73 elements (outline 1, marker 1, road 27, coastline 4, zone 1, building 36, water 2).

Evidence: documented 0, mapped 73, inferred 0, derived 2; heights documented 2, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/968169879 historic=ruins 95 m from ledger point
- island ring (579 m2) cut out of sea-0
- origin moved 94 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":102,"medianInside":0,"medianOutside":14.4}
- sea-1: DEM check failed {"cells":395,"medianInside":12.6,"medianOutside":4.4}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.53933/8.97758) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q19376819 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 73 elements); data/traces/kalv-ysund-fortress-q19376819.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
