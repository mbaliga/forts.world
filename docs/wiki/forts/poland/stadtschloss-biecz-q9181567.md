# Stadtschloss Biecz

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtschloss-biecz-q9181567` |
| Coordinates | 49.7303, 21.2525 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.7303/21.2525)) |
| Wikidata | [Q9181567](https://www.wikidata.org/wiki/Q9181567) (CC0) |
| Wikidata class | castle |
| Types | castle\|house\|architectural heritage monument |
| Administrative area | Biecz |
| Inception | 1600 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 282 elements (outline 1, marker 1, waterway 8, road 122, building 249, wall 3, zone 24, cliff 3).

Evidence: documented 0, mapped 282, inferred 0, derived 0; heights documented 49, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1448262883 historic=yes 148 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 249 mapped (trace size budget); the rest of the town is not drawn
- origin moved 147 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.7303/21.2525) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|house\|architectural heritage monument; sitelinks=3; wikidata:Q9181567 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 282 elements); data/traces/stadtschloss-biecz-q9181567.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
