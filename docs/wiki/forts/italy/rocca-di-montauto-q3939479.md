# Rocca di Montauto

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-di-montauto-q3939479` |
| Coordinates | 42.49507, 11.57453 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.49507/11.57453)) |
| Wikidata | [Q3939479](https://www.wikidata.org/wiki/Q3939479) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Manciano |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 10 elements (outline 1, road 4, wall 2, waterway 3).

Evidence: documented 0, mapped 10, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/725131701 historic=castle Q3939479 19 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.49507/11.57453) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=3; wikidata:Q3939479 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 10 elements); data/traces/rocca-di-montauto-q3939479.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
