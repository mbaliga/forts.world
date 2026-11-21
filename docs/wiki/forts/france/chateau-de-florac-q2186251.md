# Château de Florac

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-florac-q2186251` |
| Coordinates | 44.32285, 3.59375 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.32285/3.59375)) |
| Wikidata | [Q2186251](https://www.wikidata.org/wiki/Q2186251) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lozère |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 252 elements (outline 1, marker 1, road 120, waterway 3, zone 1, building 464, water 5, retaining-wall 1).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/177939340 historic=castle Q2186251 54 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 464 mapped (trace size budget); the rest of the town is not drawn
- origin moved 55 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.32285/3.59375) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q2186251 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 252 elements); data/traces/chateau-de-florac-q2186251.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
