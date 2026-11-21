# Falkenstein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `falkenstein-castle-q338839` |
| Coordinates | 51.2539, 9.29583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2539/9.29583)) |
| Wikidata | [Q338839](https://www.wikidata.org/wiki/Q338839) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Bad Emstal |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 15 elements (outline 1, road 9, zone 2, cliff 1, wall 1).

Evidence: documented 0, mapped 15, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/289081380 historic=ruins 20 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2539/9.29583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=3; wikidata:Q338839 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 15 elements); data/traces/falkenstein-castle-q338839.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
