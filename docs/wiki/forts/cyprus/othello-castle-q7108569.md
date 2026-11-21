# Othello Castle

> Cyprus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `othello-castle-q7108569` |
| Coordinates | 35.12769, 33.94324 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.12769/33.94324)) |
| Wikidata | [Q7108569](https://www.wikidata.org/wiki/Q7108569) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Famagusta |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 118 elements (outline 1, marker 1, road 50, building 55, zone 3, wall 3, coastline 3, water 2).

Evidence: documented 0, mapped 118, inferred 0, derived 2; heights documented 1, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20275426 historic=castle Q7108569 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":400,"medianInside":3.5,"medianOutside":0}
- sea-1: DEM check ok {"cells":76,"medianInside":0,"medianOutside":3.8}
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.12769/33.94324) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=17; wikidata:Q7108569 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 118 elements); data/traces/othello-castle-q7108569.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cyprus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
