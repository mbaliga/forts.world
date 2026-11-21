# Porta Heroum

> Hungary · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-heroum-q1057994` |
| Coordinates | 46.24723, 20.14665 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.24723/20.14665)) |
| Wikidata | [Q1057994](https://www.wikidata.org/wiki/Q1057994) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Szeged |
| Wikipedia language editions | 3 |
| OSM `historic` | memorial |

## What the model contains

Tier **T1**, status `outline+walls`, 181 elements (outline 1, marker 102, road 241, building 94, wall 10, zone 4, waterway 1).

Evidence: documented 0, mapped 181, inferred 0, derived 0; heights documented 8, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8535741 historic=memorial Q1057994 2 m from ledger point
- pruned to the outline plus 150 m: 453 -> 254 elements
- roads capped: kept the 80 longest of 153 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.24723/20.14665) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q1057994 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 361 elements); data/traces/porta-heroum-q1057994.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 181 elements; outline osm:relation/8535741 historic=memorial Q1057994 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/hungary.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
