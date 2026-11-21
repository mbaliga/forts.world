# Weiherburg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `weiherburg-q1407602` |
| Coordinates | 47.2809, 11.3983 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.2809/11.3983)) |
| Wikidata | [Q1407602](https://www.wikidata.org/wiki/Q1407602) (CC0) |
| Wikidata class | castle |
| Types | castle\|Ansitz |
| Administrative area | Innsbruck |
| Inception | 1460 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.sagen.at/fotos/showphoto.php/photo/1649/size/big/cat/ |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 1, road 152, waterway 13, water 7, building 47, zone 24, cliff 1, retaining-wall 2, wall 1).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 6, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48812375 historic=castle Q1407602 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.2809/11.3983) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Ansitz; sitelinks=5; wikidata:Q1407602 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/weiherburg-q1407602.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
