# Château de Virieu-le-Grand

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-virieu-le-grand-q2968260` |
| Coordinates | 45.84837, 5.64863 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.84837/5.64863)) |
| Wikidata | [Q2968260](https://www.wikidata.org/wiki/Q2968260) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Virieu-le-Grand |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 180 elements (outline 1, road 46, building 375, waterway 7, wall 3, cliff 1, zone 2).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/257535591 historic=building Q14627720 120 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 375 mapped (trace size budget); the rest of the town is not drawn
- origin moved 119 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.84837/5.64863) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2968260 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 180 elements); data/traces/chateau-de-virieu-le-grand-q2968260.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
