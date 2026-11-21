# Löwenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lowenburg-q1651504` |
| Coordinates | 51.3114, 9.40876 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3114/9.40876)) |
| Wikidata | [Q1651504](https://www.wikidata.org/wiki/Q1651504) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|artificial ruin\|maison de plaisance |
| Administrative area | Kassel |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://museum-kassel.de/de/museen-schloesser-parks/unesco-welterbe-bergpark-wilhelmshoehe/loewenburg |

## What the model contains

Tier **T1**, status `outline+walls`, 126 elements (outline 1, road 83, waterway 7, wall 11, building 4, zone 18, retaining-wall 2).

Evidence: documented 0, mapped 126, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6241813 historic=castle Q1651504 5 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3114/9.40876) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|artificial ruin\|maison de plaisance; sitelinks=6; wikidata:Q1651504 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 126 elements); data/traces/lowenburg-q1651504.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
