# Tour de Sainte-Livrade-sur-Lot

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-sainte-livrade-sur-lot-q18613183` |
| Coordinates | 44.39898, 0.59106 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.39898/0.59106)) |
| Wikidata | [Q18613183](https://www.wikidata.org/wiki/Q18613183) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|tower |
| Administrative area | Sainte-Livrade-sur-Lot |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 201 elements (outline 1, road 75, zone 4, building 622, waterway 1).

Evidence: documented 0, mapped 201, inferred 0, derived 0; heights documented 3, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/130021210 historic=castle Q18613183 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 622 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.39898/0.59106) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|tower; sitelinks=2; wikidata:Q18613183 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 201 elements); data/traces/tour-de-sainte-livrade-sur-lot-q18613183.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
