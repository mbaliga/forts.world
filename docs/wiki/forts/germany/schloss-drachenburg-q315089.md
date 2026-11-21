# Schloss Drachenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-drachenburg-q315089` |
| Coordinates | 50.66867, 7.20634 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.66867/7.20634)) |
| Wikidata | [Q315089](https://www.wikidata.org/wiki/Q315089) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|museum\|château |
| Administrative area | Königswinter |
| Inception | 1882 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `barrier` | wall |
| OSM `website` | https://www.schloss-drachenburg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 183 elements (outline 1, road 131, waterway 1, building 21, wall 7, zone 6, retaining-wall 14, cliff 1).

Evidence: documented 0, mapped 183, inferred 0, derived 0; heights documented 9, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/118449146 historic=castle Q315089 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 37 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.66867/7.20634) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|museum\|château; sitelinks=16; wikidata:Q315089 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 183 elements); data/traces/schloss-drachenburg-q315089.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
