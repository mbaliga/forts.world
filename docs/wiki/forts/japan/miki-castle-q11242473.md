# Miki Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `miki-castle-q11242473` |
| Coordinates | 34.7999, 134.988 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.7999/134.988)) |
| Wikidata | [Q11242473](https://www.wikidata.org/wiki/Q11242473) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Miki |
| Inception | 1492 |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 240 elements (outline 1, marker 6, waterway 3, road 104, zone 4, water 2, building 873).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 114, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/322811964 historic=castle 80 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 873 mapped (trace size budget); the rest of the town is not drawn
- origin moved 86 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.7999/134.988) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=7; wikidata:Q11242473 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 240 elements); data/traces/miki-castle-q11242473.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
