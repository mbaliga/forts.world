# Castle of Soure

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-soure-q2970726` |
| Coordinates | 40.05695, -8.6261 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.05695/-8.6261)) |
| Wikidata | [Q2970726](https://www.wikidata.org/wiki/Q2970726) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Soure |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 347 elements (outline 1, marker 4, road 182, waterway 27, building 151, zone 16, water 9, wall 18, retaining-wall 2).

Evidence: documented 0, mapped 347, inferred 0, derived 0; heights documented 0, inferred 0, unknown 140.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10491174 historic=castle Q2970726 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 151 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 182 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.05695/-8.6261) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=6; wikidata:Q2970726 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 347 elements); data/traces/castle-of-soure-q2970726.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
