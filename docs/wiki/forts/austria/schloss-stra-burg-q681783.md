# Schloss Straßburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-stra-burg-q681783` |
| Coordinates | 46.8975, 14.3303 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.8975/14.3303)) |
| Wikidata | [Q681783](https://www.wikidata.org/wiki/Q681783) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Strassburg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |
| OSM `website` | http://www.bistum-gurk.at/Strassburg/strassburg.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 56 elements (outline 1, road 13, waterway 2, zone 2, building 31, wall 7).

Evidence: documented 0, mapped 56, inferred 0, derived 0; heights documented 0, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6092128 historic=castle Q681783 11 m from ledger point
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.8975/14.3303) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=9; wikidata:Q681783 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 56 elements); data/traces/schloss-stra-burg-q681783.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
