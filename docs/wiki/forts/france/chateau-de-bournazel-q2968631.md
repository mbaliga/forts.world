# Château de Bournazel

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-bournazel-q2968631` |
| Coordinates | 44.45966, 2.29889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.45966/2.29889)) |
| Wikidata | [Q2968631](https://www.wikidata.org/wiki/Q2968631) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Bournazel |
| Designations | classified historical monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 3, road 186, building 183, wall 26, water 4, zone 79, retaining-wall 16, waterway 2).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 28, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/193870806 historic=castle Q2968631 12 m from ledger point
- pruned to the outline plus 150 m: 500 -> 458 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 155 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 178 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.45966/2.29889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=4; wikidata:Q2968631 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/chateau-de-bournazel-q2968631.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
