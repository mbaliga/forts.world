# Gustavsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gustavsburg-q1792518` |
| Coordinates | 49.996, 8.31133 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.996/8.31133)) |
| Wikidata | [Q1792518](https://www.wikidata.org/wiki/Q1792518) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Ginsheim-Gustavsburg |
| Inception | 1632 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Mauerstück der Festung Gustavsburg. |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 207 elements (outline 1, marker 2, road 114, building 67, wall 10, waterway 1, zone 12).

Evidence: documented 0, mapped 207, inferred 0, derived 0; heights documented 16, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/577315494 historic=castle Q1792518 95 m from ledger point
- origin moved 97 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.996/8.31133) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q1792518 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 207 elements); data/traces/gustavsburg-q1792518.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
