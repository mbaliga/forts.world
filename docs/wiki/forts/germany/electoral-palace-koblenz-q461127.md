# Electoral Palace Koblenz

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `electoral-palace-koblenz-q461127` |
| Coordinates | 50.35557, 7.60226 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.35557/7.60226)) |
| Wikidata | [Q461127](https://www.wikidata.org/wiki/Q461127) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace\|château |
| Administrative area | Koblenz |
| Inception | 1777. |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `website` | https://www.koblenz-touristik.de/events/veranstaltungsorte/kurfuerstliches-schloss.html |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, marker 3, road 286, building 24, waterway 1, wall 22, water 1, retaining-wall 12, zone 56).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 11, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/88814133 historic=castle Q461127 2 m from ledger point
- roads capped: kept the 150 longest of 286 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.35557/7.60226) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace\|château; sitelinks=12; wikidata:Q461127 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/electoral-palace-koblenz-q461127.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
