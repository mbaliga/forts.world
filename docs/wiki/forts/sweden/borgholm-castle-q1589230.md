# Borgholm Castle

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `borgholm-castle-q1589230` |
| Coordinates | 56.87056, 16.64333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.87056/16.64333)) |
| Wikidata | [Q1589230](https://www.wikidata.org/wiki/Q1589230) (CC0) |
| Wikidata class | ruin |
| Types | castle\|ruins\|architectural ensemble\|cultural property\|heritage site in Sweden\|ancient monument |
| Administrative area | Borgholm Municipality |
| Designations | governmental listed building complex\|monument in Fornminnesregistret |
| Wikipedia language editions | 21 |
| OSM `historic` | castle |
| OSM `castle_type` | fortified_church |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 53 elements (outline 1, road 28, zone 9, retaining-wall 4, building 6, wall 5).

Evidence: documented 0, mapped 53, inferred 0, derived 0; heights documented 2, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/68286454 historic=castle 39 m from ledger point
- origin moved 39 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.87056/16.64333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|ruins\|architectural ensemble\|cultural property\|heritage site in Sweden\|ancient monument; sitelinks=21; wikidata:Q1589230 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 53 elements); data/traces/borgholm-castle-q1589230.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
