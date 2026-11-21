# Château de Loches

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-loches-q1061061` |
| Coordinates | 47.12476, 0.99686 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.12476/0.99686)) |
| Wikidata | [Q1061061](https://www.wikidata.org/wiki/Q1061061) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Loches |
| Inception | 1100 |
| Designations | monument historique inscrit\|classified historical monument |
| Wikipedia language editions | 25 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://citeroyaleloches.fr |

## What the model contains

Tier **T1**, status `outline+walls`, 281 elements (outline 1, marker 2, road 129, water 6, waterway 12, building 598, wall 7, zone 4).

Evidence: documented 0, mapped 281, inferred 0, derived 0; heights documented 2, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51827984 historic=castle Q1061061 351 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 598 mapped (trace size budget); the rest of the town is not drawn
- origin moved 351 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.12476/0.99686) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=25; wikidata:Q1061061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 281 elements); data/traces/chateau-de-loches-q1061061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
