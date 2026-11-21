# Cembalo

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cembalo-q6668620` |
| Coordinates | 44.49449, 33.59955 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.49449/33.59955)) |
| Wikidata | [Q6668620](https://www.wikidata.org/wiki/Q6668620) (CC0) |
| Wikidata class | fort |
| Types | fortress\|archaeological site |
| Administrative area | Balaklava |
| Inception | 1400 |
| Designations | architectural monument of national significance of Ukraine\|federal cultural heritage site in Russia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 107 elements (outline 1, marker 3, coastline 4, road 39, building 31, cliff 5, wall 9, zone 8, retaining-wall 3, waterway 1, water 3).

Evidence: documented 0, mapped 107, inferred 0, derived 3; heights documented 6, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/238532214 historic=castle Q6668620 38 m from ledger point
- origin moved 54 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":776,"medianInside":26.2,"medianOutside":8.9}
- sea-1: DEM check ok {"cells":70,"medianInside":2.8,"medianOutside":30}
- sea-2: DEM check ok {"cells":220,"medianInside":1.6,"medianOutside":46}
- 36 DEM cells below -3 m (bathymetry) clamped to -3 m
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.49449/33.59955) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|archaeological site; sitelinks=5; wikidata:Q6668620 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 107 elements); data/traces/cembalo-q6668620.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
