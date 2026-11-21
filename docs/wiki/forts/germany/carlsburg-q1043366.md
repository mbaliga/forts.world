# Carlsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carlsburg-q1043366` |
| Coordinates | 53.54, 8.58333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.54/8.58333)) |
| Wikidata | [Q1043366](https://www.wikidata.org/wiki/Q1043366) (CC0) |
| Wikidata class | fort |
| Types | fortress\|building project |
| Administrative area | Bremerhaven |
| Wikipedia language editions | 4 |
| OSM `historic` | monument |
| OSM `heritage` | 4 |
| OSM `website` | https://www.denkmalpflege.bremen.de/sixcms/detail.php?template=20_denkmal_wrapper_d&obj=00001520 |

## What the model contains

Tier **T1**, status `outline+walls`, 140 elements (outline 1, marker 2, road 79, water 7, building 27, coastline 1, wall 7, waterway 1, zone 14, retaining-wall 1).

Evidence: documented 0, mapped 140, inferred 0, derived 1; heights documented 5, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/186029163 historic=monument Q2551535 421 m from ledger point
- origin moved 420 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":110,"medianInside":0.2,"medianOutside":0.4}
- 177 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.54/8.58333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|building project; sitelinks=4; wikidata:Q1043366 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 140 elements); data/traces/carlsburg-q1043366.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
