# Archivturm

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `archivturm-q29167262` |
| Coordinates | 47.02037, 8.65379 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.02037/8.65379)) |
| Wikidata | [Q29167262](https://www.wikidata.org/wiki/Q29167262) (CC0) |
| Wikidata class | fortification |
| Types | tower house\|built structure |
| Administrative area | Schwyz |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Dreistöckiger mittelalterlicher Wohnturm aus dem 13. Jh., der wahrscheinlich Sitz eines habsburgischen Verwalters war. Diente ab dem 15. Jh. bis 1936 als Staatsarchiv. |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 1, road 263, building 209, wall 12, zone 3).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 5, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/374300299 historic=castle Q29167262 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 209 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 263 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.02037/8.65379) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house\|built structure; sitelinks=2; wikidata:Q29167262 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/archivturm-q29167262.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
