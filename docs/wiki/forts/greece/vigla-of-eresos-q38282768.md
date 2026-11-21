# Vigla of Eresos

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vigla-of-eresos-q38282768` |
| Coordinates | 39.13286, 25.93581 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.13286/25.93581)) |
| Wikidata | [Q38282768](https://www.wikidata.org/wiki/Q38282768) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | West Lesvos Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 41 elements (outline 1, marker 1, road 10, building 21, coastline 1, zone 2, wall 1, cliff 1, water 3).

Evidence: documented 0, mapped 41, inferred 0, derived 3; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1059880837 historic=ruins 10 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":53,"medianInside":0,"medianOutside":23.3}
- sea-1: DEM check failed {"cells":400,"medianInside":23,"medianOutside":19}
- sea-2: DEM check failed {"cells":399,"medianInside":23,"medianOutside":19}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.13286/25.93581) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=0; wikidata:Q38282768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 41 elements); data/traces/vigla-of-eresos-q38282768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
