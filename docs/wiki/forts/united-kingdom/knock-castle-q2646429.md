# Knock Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `knock-castle-q2646429` |
| Coordinates | 57.1102, -5.84721 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.1102/-5.84721)) |
| Wikidata | [Q2646429](https://www.wikidata.org/wiki/Q2646429) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 34 elements (outline 1, road 7, waterway 5, coastline 8, wall 2, building 2, zone 7, water 2).

Evidence: documented 0, mapped 34, inferred 0, derived 2; heights documented 1, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/353698189 historic=castle Q2646429 5 m from ledger point
- island ring (408 m2) cut out of sea-0
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1185,"medianInside":5.6,"medianOutside":10.4}
- sea-1: DEM check ok {"cells":1501,"medianInside":7.1,"medianOutside":7.6}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.1102/-5.84721) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q2646429 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 34 elements); data/traces/knock-castle-q2646429.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
