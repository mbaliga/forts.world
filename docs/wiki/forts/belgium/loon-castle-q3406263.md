# Loon Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `loon-castle-q3406263` |
| Coordinates | 50.80088, 5.34398 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.80088/5.34398)) |
| Wikidata | [Q3406263](https://www.wikidata.org/wiki/Q3406263) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `castle_type` | defensive |
| OSM `fortification_type` | motte |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 228 elements (outline 1, marker 3, road 84, building 322, zone 20).

Evidence: documented 0, mapped 228, inferred 0, derived 0; heights documented 10, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/319776252 historic=archaeological_site Q3406263 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 322 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.80088/5.34398) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=1; wikidata:Q3406263 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 228 elements); data/traces/loon-castle-q3406263.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
