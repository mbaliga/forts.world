# Château de la Bâtie

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-la-batie-q2971171` |
| Coordinates | 45.5308, 4.87642 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.5308/4.87642)) |
| Wikidata | [Q2971171](https://www.wikidata.org/wiki/Q2971171) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vienne |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, road 194, waterway 3, building 167, wall 25, retaining-wall 24, zone 6, water 2).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 4, inferred 0, unknown 165.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/279876078 historic=ruins 157 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 167 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 194 mapped (trace size budget); minor lanes are not drawn
- origin moved 155 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.5308/4.87642) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2971171 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/chateau-de-la-batie-q2971171.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
