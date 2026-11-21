# Salcombe Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `salcombe-castle-q7403768` |
| Coordinates | 50.22897, -3.7767 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.22897/-3.7767)) |
| Wikidata | [Q7403768](https://www.wikidata.org/wiki/Q7403768) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort |
| Administrative area | Salcombe |
| Designations | Grade II listed building\|scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, road 11, coastline 11, building 14, water 1).

Evidence: documented 0, mapped 38, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1078276900 historic=castle Q7403768 11 m from ledger point
- island ring (737 m2) cut out of sea-0
- origin moved 11 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":297,"medianInside":-2.7,"medianOutside":29.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.22897/-3.7767) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort; sitelinks=3; wikidata:Q7403768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 38 elements); data/traces/salcombe-castle-q7403768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
