# Château des Tours

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-des-tours-q2971568` |
| Coordinates | 45.9344, 4.71899 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.9344/4.71899)) |
| Wikidata | [Q2971568](https://www.wikidata.org/wiki/Q2971568) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Anse |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 192 elements (outline 1, marker 1, road 64, building 484, zone 3, waterway 3).

Evidence: documented 0, mapped 192, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1806965 historic=castle Q2971568 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 484 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.9344/4.71899) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2971568 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 192 elements); data/traces/chateau-des-tours-q2971568.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
