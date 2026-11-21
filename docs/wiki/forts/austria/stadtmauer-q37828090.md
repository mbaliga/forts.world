# Stadtmauer

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q37828090` |
| Coordinates | 47.87815, 16.37212 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.87815/16.37212)) |
| Wikidata | [Q37828090](https://www.wikidata.org/wiki/Q37828090) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Ebenfurth |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | http://www.schloss-ebenfurth.at |

## What the model contains

Tier **T1**, status `outline+walls`, 144 elements (outline 1, marker 1, road 49, building 76, waterway 8, wall 4, zone 5).

Evidence: documented 0, mapped 144, inferred 0, derived 0; heights documented 17, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1982123 historic=castle Q1373843 356 m from ledger point
- origin moved 358 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.87815/16.37212) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q37828090 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 144 elements); data/traces/stadtmauer-q37828090.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
