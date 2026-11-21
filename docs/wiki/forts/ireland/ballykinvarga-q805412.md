# Ballykinvarga

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ballykinvarga-q805412` |
| Coordinates | 52.99742, -9.19178 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.99742/-9.19178)) |
| Wikidata | [Q805412](https://www.wikidata.org/wiki/Q805412) (CC0) |
| Wikidata class | fortification |
| Types | dun |
| Administrative area | Ballykinvarga |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | ringfort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 13 elements (outline 1, zone 2, wall 6, building 1, road 2).

Evidence: documented 0, mapped 13, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1178151008 historic=archaeological_site 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.99742/-9.19178) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; dun; sitelinks=1; wikidata:Q805412 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 13 elements); data/traces/ballykinvarga-q805412.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
