# Archbishop's Palace, Valletta

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `archbishop-s-palace-valletta-q114269861` |
| Coordinates | 35.90073, 14.51314 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.90073/14.51314)) |
| Wikidata | [Q114269861](https://www.wikidata.org/wiki/Q114269861) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Valletta |
| Inception | 1624 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 145 elements (outline 1, marker 4, road 75, building 47, retaining-wall 2, wall 10, zone 1, coastline 2, water 3).

Evidence: documented 0, mapped 145, inferred 0, derived 2; heights documented 8, inferred 0, unknown 51.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3968465 historic=castle Q114269861 3 m from ledger point
- sea-0: DEM check ok {"cells":13,"medianInside":4.5,"medianOutside":26.1}
- sea-1: DEM check ok {"cells":36,"medianInside":3.7,"medianOutside":28.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.90073/14.51314) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=3; wikidata:Q114269861 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 145 elements); data/traces/archbishop-s-palace-valletta-q114269861.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
