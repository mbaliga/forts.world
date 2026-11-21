# Château de l'Empéri

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-l-emperi-q2128921` |
| Coordinates | 43.63944, 5.09722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.63944/5.09722)) |
| Wikidata | [Q2128921](https://www.wikidata.org/wiki/Q2128921) (CC0) |
| Wikidata class | castle |
| Types | castle\|military museum |
| Administrative area | Salon-de-Provence |
| Designations | classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 288 elements (outline 1, marker 1, road 179, building 842, zone 7, cliff 1, wall 4, retaining-wall 4).

Evidence: documented 0, mapped 288, inferred 0, derived 0; heights documented 1, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1434901 historic=castle Q2128921 75 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 842 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 179 mapped (trace size budget); minor lanes are not drawn
- origin moved 76 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.63944/5.09722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military museum; sitelinks=5; wikidata:Q2128921 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 288 elements); data/traces/chateau-de-l-emperi-q2128921.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
