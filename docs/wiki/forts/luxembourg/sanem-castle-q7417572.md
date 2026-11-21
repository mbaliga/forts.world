# Sanem Castle

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sanem-castle-q7417572` |
| Coordinates | 49.54341, 5.92594 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.54341/5.92594)) |
| Wikidata | [Q7417572](https://www.wikidata.org/wiki/Q7417572) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Sanem |
| Inception | 1700 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 130 elements (outline 1, road 50, waterway 5, wall 8, building 46, zone 15, retaining-wall 5).

Evidence: documented 0, mapped 130, inferred 0, derived 0; heights documented 0, inferred 0, unknown 59.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/369978923 historic=castle Q7417572 24 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.54341/5.92594) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=8; wikidata:Q7417572 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 130 elements); data/traces/sanem-castle-q7417572.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
