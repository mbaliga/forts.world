# Mġarr ix-Xini Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mgarr-ix-xini-tower-q19593873` |
| Coordinates | 36.01714, 14.27441 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.01714/14.27441)) |
| Wikidata | [Q19593873](https://www.wikidata.org/wiki/Q19593873) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Xewkija |
| Inception | 1661 |
| Designations | Grade 1 |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `description` | Completed in 1661 at the end of Grand Master De Redin's reign as part of the system of towers constructed by the Knights of Malta for the defense of Malta and Gozo. |
| OSM `website` | https://www.wirtghawdex.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 19 elements (outline 1, coastline 3, road 5, cliff 1, zone 1, wall 3, water 5).

Evidence: documented 0, mapped 19, inferred 0, derived 5; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/183451667 historic=fort Q19593873 4 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":400,"medianInside":0.2,"medianOutside":25.8}
- sea-1: DEM check ok {"cells":398,"medianInside":0.2,"medianOutside":25.5}
- sea-2: DEM check ok {"cells":393,"medianInside":0.2,"medianOutside":22.6}
- sea-3: DEM check ok {"cells":399,"medianInside":0.2,"medianOutside":25.8}
- sea-4: DEM check ok {"cells":227,"medianInside":0,"medianOutside":21.5}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.01714/14.27441) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=5; wikidata:Q19593873 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 19 elements); data/traces/mgarr-ix-xini-tower-q19593873.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
