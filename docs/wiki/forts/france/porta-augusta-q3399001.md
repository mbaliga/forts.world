# Porta Augusta

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-augusta-q3399001` |
| Coordinates | 43.8394, 4.3633 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.8394/4.3633)) |
| Wikidata | [Q3399001](https://www.wikidata.org/wiki/Q3399001) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Nîmes |
| Inception | -0015 |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, road 166, wall 5, building 559, waterway 1, zone 6).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 3, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18178612 historic=fort Q110979165 620 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 559 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 166 mapped (trace size budget); minor lanes are not drawn
- origin moved 598 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.8394/4.3633) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q3399001 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/porta-augusta-q3399001.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
