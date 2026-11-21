# Castle of San Jorge

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-san-jorge-q5757560` |
| Coordinates | 37.38561, -6.00356 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.38561/-6.00356)) |
| Wikidata | [Q5757560](https://www.wikidata.org/wiki/Q5757560) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Seville |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 4, road 110, water 1, building 541, zone 7, retaining-wall 2, wall 29, waterway 1).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 73, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10783832 historic=building 84 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 541 mapped (trace size budget); the rest of the town is not drawn
- origin moved 81 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.38561/-6.00356) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=5; wikidata:Q5757560 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/castle-of-san-jorge-q5757560.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
