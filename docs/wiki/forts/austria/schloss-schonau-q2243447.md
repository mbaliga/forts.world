# Schloss Schönau

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-schonau-q2243447` |
| Coordinates | 47.93854, 16.25168 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.93854/16.25168)) |
| Wikidata | [Q2243447](https://www.wikidata.org/wiki/Q2243447) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Schönau an der Triesting |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, road 24, building 3, zone 6, wall 1, waterway 4, water 1).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 1, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8955952 historic=castle Q2243447 5 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.93854/16.25168) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=4; wikidata:Q2243447 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 40 elements); data/traces/schloss-schonau-q2243447.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
