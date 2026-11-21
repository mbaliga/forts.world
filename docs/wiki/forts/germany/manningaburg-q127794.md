# Manningaburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manningaburg-q127794` |
| Coordinates | 53.43569, 7.0951 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.43569/7.0951)) |
| Wikidata | [Q127794](https://www.wikidata.org/wiki/Q127794) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|manor house |
| Administrative area | Krummhörn |
| Designations | architectural heritage monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `website` | https://www.heimatvereinkrummhoern.de/die-manningaburg/ |

## What the model contains

Tier **T1**, status `outline-only`, 316 elements (outline 1, marker 2, road 81, water 3, building 217, waterway 12).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 2, inferred 0, unknown 215.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/89572946 historic=castle Q127794 3 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.43569/7.0951) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|manor house; sitelinks=4; wikidata:Q127794 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 316 elements); data/traces/manningaburg-q127794.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
