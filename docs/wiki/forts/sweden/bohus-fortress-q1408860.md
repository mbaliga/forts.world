# Bohus Fortress

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bohus-fortress-q1408860` |
| Coordinates | 57.86194, 11.99944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.86194/11.99944)) |
| Wikidata | [Q1408860](https://www.wikidata.org/wiki/Q1408860) (CC0) |
| Wikidata class | ruin |
| Types | castle\|fortress\|architectural ensemble\|heritage site in Sweden\|castle ruin |
| Administrative area | Kungälv Municipality |
| Inception | 1308 |
| Designations | governmental listed building complex\|monument in Fornminnesregistret\|governmental listed building |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | https://www.bohusfastning.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 209 elements (outline 1, marker 4, water 1, wall 20, road 127, building 18, waterway 5, zone 32, retaining-wall 1).

Evidence: documented 0, mapped 209, inferred 0, derived 0; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1206478078 historic=castle Q1408860 22 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.86194/11.99944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|fortress\|architectural ensemble\|heritage site in Sweden\|castle ruin; sitelinks=17; wikidata:Q1408860 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 209 elements); data/traces/bohus-fortress-q1408860.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
