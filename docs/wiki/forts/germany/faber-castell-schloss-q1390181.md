# Faber-Castell-Schloss

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `faber-castell-schloss-q1390181` |
| Coordinates | 49.41731, 11.02137 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.41731/11.02137)) |
| Wikidata | [Q1390181](https://www.wikidata.org/wiki/Q1390181) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Stein |
| Inception | 1843 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 149 elements (outline 1, road 95, zone 3, building 47, water 1, waterway 1, wall 1).

Evidence: documented 0, mapped 149, inferred 0, derived 0; heights documented 21, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/158385597 historic=castle Q1390181 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.41731/11.02137) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=6; wikidata:Q1390181 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 149 elements); data/traces/faber-castell-schloss-q1390181.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
