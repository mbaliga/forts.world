# Château de Brumath

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-brumath-q2240427` |
| Coordinates | 48.73168, 7.70961 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.73168/7.70961)) |
| Wikidata | [Q2240427](https://www.wikidata.org/wiki/Q2240427) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Brumath |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 199 elements (outline 1, marker 4, road 67, waterway 1, building 411, water 1, zone 4, wall 1).

Evidence: documented 0, mapped 199, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/60970330 historic=castle Q2240427 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 411 mapped (trace size budget); the rest of the town is not drawn
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.73168/7.70961) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q2240427 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 199 elements); data/traces/chateau-de-brumath-q2240427.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
