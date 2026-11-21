# Linz Palace

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `linz-palace-q686508` |
| Coordinates | 48.30546, 14.28241 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.30546/14.28241)) |
| Wikidata | [Q686508](https://www.wikidata.org/wiki/Q686508) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Linz |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `description` | Linzer Schloss, Schlossmuseum, Schlossberg 1 in Linz |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 2, water 2, road 282, zone 17, building 169, wall 13, waterway 1, retaining-wall 4, cliff 1).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 58, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/14039464 historic=castle Q686508 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 169 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 282 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.30546/14.28241) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=10; wikidata:Q686508 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/linz-palace-q686508.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
