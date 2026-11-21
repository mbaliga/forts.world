# Château de Sieyes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-sieyes-q17624846` |
| Coordinates | 45.29702, 5.63781 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.29702/5.63781)) |
| Wikidata | [Q17624846](https://www.wikidata.org/wiki/Q17624846) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Voreppe |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 7, road 262, zone 9, building 343, waterway 4, wall 82, water 4, retaining-wall 59).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 48, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/80580174 historic=castle Q17624846 6 m from ledger point
- pruned to the outline plus 150 m: 771 -> 525 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 261 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 149 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.29702/5.63781) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=4; wikidata:Q17624846 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/chateau-de-sieyes-q17624846.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
