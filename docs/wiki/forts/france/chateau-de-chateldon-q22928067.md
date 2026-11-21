# Château de Châteldon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-chateldon-q22928067` |
| Coordinates | 45.97574, 3.52052 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.97574/3.52052)) |
| Wikidata | [Q22928067](https://www.wikidata.org/wiki/Q22928067) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|château |
| Administrative area | Châteldon |
| Inception | C12 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 210 elements (outline 1, zone 5, road 66, waterway 11, water 1, building 544, wall 4, retaining-wall 2).

Evidence: documented 0, mapped 210, inferred 0, derived 0; heights documented 0, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/166570147 historic=castle Q22928067 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 544 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.97574/3.52052) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=2; wikidata:Q22928067 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 210 elements); data/traces/chateau-de-chateldon-q22928067.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
