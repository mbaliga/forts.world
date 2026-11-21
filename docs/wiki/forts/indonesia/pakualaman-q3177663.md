# Pakualaman

> Indonesia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pakualaman-q3177663` |
| Coordinates | -7.79954, 110.37622 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-7.79954/110.37622)) |
| Wikidata | [Q3177663](https://www.wikidata.org/wiki/Q3177663) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|Indonesian monarchy\|historical country |
| Administrative area | Yogyakarta |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 237 elements (outline 1, road 115, waterway 1, building 1894).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 22, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121240765 historic=castle Q3177663 20 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1894 mapped (trace size budget); the rest of the town is not drawn
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-7.79954/110.37622) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|Indonesian monarchy\|historical country; sitelinks=10; wikidata:Q3177663 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 237 elements); data/traces/pakualaman-q3177663.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/indonesia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
