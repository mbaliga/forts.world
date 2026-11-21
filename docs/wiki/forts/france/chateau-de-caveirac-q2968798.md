# Château de Caveirac

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-caveirac-q2968798` |
| Coordinates | 43.82601, 4.26071 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.82601/4.26071)) |
| Wikidata | [Q2968798](https://www.wikidata.org/wiki/Q2968798) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Caveirac |
| Inception | 1659 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 187 elements (outline 1, marker 3, road 55, building 570, zone 1, waterway 5, wall 1, water 1).

Evidence: documented 0, mapped 187, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/417361874 historic=castle Q2968798 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 570 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.82601/4.26071) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=2; wikidata:Q2968798 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 187 elements); data/traces/chateau-de-caveirac-q2968798.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
