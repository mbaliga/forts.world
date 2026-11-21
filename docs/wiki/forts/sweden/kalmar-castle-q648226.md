# Kalmar Castle

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kalmar-castle-q648226` |
| Coordinates | 56.65806, 16.35528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.65806/16.35528)) |
| Wikidata | [Q648226](https://www.wikidata.org/wiki/Q648226) (CC0) |
| Wikidata class | castle |
| Types | castle\|architectural ensemble\|cultural property\|heritage site in Sweden |
| Administrative area | Kalmar County |
| Inception | 1200 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 33 |
| OSM `historic` | castle |
| OSM `website` | https://www.kalmarslott.se/ |

## What the model contains

Tier **T1**, status `outline+walls`, 105 elements (outline 1, marker 1, coastline 6, road 66, zone 3, wall 14, building 11, water 3).

Evidence: documented 0, mapped 105, inferred 0, derived 3; heights documented 6, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1331955 historic=castle Q648226 14 m from ledger point
- island ring (1876 m2) cut out of sea-0
- island ring (27362 m2) cut out of sea-0
- island ring (1656 m2) cut out of sea-0
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1371,"medianInside":2.9,"medianOutside":5.4}
- sea-1: DEM check failed {"cells":1676,"medianInside":3.6,"medianOutside":1.1}
- sea-2: DEM check ok {"cells":1150,"medianInside":2.4,"medianOutside":7.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m
- 43 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.65806/16.35528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|architectural ensemble\|cultural property\|heritage site in Sweden; sitelinks=33; wikidata:Q648226 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 105 elements); data/traces/kalmar-castle-q648226.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
