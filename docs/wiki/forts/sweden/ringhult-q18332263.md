# Ringhult

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ringhult-q18332263` |
| Coordinates | 57.17455, 15.72243 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.17455/15.72243)) |
| Wikidata | [Q18332263](https://www.wikidata.org/wiki/Q18332263) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Högsby Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | ringfort |

## What the model contains

Tier **T1**, status `outline-only`, 44 elements (outline 1, road 10, zone 4, waterway 2, building 26, water 1).

Evidence: documented 0, mapped 44, inferred 0, derived 0; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/243215811 historic=archaeological_site 21 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.17455/15.72243) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q18332263 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 44 elements); data/traces/ringhult-q18332263.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
