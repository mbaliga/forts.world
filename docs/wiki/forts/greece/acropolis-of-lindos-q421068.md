# Acropolis of Lindos

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `acropolis-of-lindos-q421068` |
| Coordinates | 36.09163, 28.08805 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.09163/28.08805)) |
| Wikidata | [Q421068](https://www.wikidata.org/wiki/Q421068) (CC0) |
| Wikidata class | fortification |
| Types | acropolis\|archaeological site |
| Administrative area | Rodos Municipality |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 4, coastline 1, road 139, wall 49, building 205, retaining-wall 4, cliff 5, zone 5, water 5).

Evidence: documented 0, mapped 333, inferred 0, derived 5; heights documented 0, inferred 0, unknown 173.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/359637646 historic=archaeological_site Q38280979 16 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 205 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":255,"medianInside":0,"medianOutside":37.6}
- sea-1: DEM check ok {"cells":7,"medianInside":0.2,"medianOutside":26}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":25.6}
- sea-3: DEM check failed {"cells":0,"medianInside":null,"medianOutside":25.6}
- sea-4: DEM check ok {"cells":55,"medianInside":0,"medianOutside":27.8}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.09163/28.08805) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; acropolis\|archaeological site; sitelinks=6; wikidata:Q421068 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/acropolis-of-lindos-q421068.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
