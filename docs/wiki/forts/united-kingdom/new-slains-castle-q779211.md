# New Slains Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `new-slains-castle-q779211` |
| Coordinates | 57.41539, -1.8323 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.41539/-1.8323)) |
| Wikidata | [Q779211](https://www.wikidata.org/wiki/Q779211) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins |
| Administrative area | Aberdeenshire |
| Inception | 1594 |
| Designations | category B listed building |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 19 elements (outline 1, coastline 5, road 8, water 5).

Evidence: documented 0, mapped 19, inferred 0, derived 5; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/243672045 historic=castle Q779211 11 m from ledger point
- island ring (1902 m2) cut out of sea-0
- origin moved 8 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":571,"medianInside":4,"medianOutside":20.1}
- sea-1: DEM check failed {"cells":1,"medianInside":11.7,"medianOutside":12.5}
- sea-2: DEM check failed {"cells":39,"medianInside":19.3,"medianOutside":12.1}
- sea-3: DEM check failed {"cells":1594,"medianInside":13.1,"medianOutside":6.5}
- sea-4: DEM check failed {"cells":1599,"medianInside":13.1,"medianOutside":6.5}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.41539/-1.8323) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins; sitelinks=11; wikidata:Q779211 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 19 elements); data/traces/new-slains-castle-q779211.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
