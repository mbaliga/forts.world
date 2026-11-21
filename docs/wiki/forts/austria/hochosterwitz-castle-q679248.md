# Hochosterwitz Castle

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hochosterwitz-castle-q679248` |
| Coordinates | 46.75593, 14.45241 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.75593/14.45241)) |
| Wikidata | [Q679248](https://www.wikidata.org/wiki/Q679248) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | St. Georgen am Längsee |
| Inception | 0860 |
| Designations | Tentative World Heritage Site\|Listed objects in Austria |
| Wikipedia language editions | 32 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.burg-hochosterwitz.com |

## What the model contains

Tier **T1**, status `outline+walls`, 184 elements (outline 1, marker 1, road 81, wall 47, building 44, zone 2, cliff 7, waterway 1).

Evidence: documented 0, mapped 184, inferred 0, derived 0; heights documented 0, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/122050909 historic=castle Q679248 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 74 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.75593/14.45241) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=32; wikidata:Q679248 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 184 elements); data/traces/hochosterwitz-castle-q679248.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
