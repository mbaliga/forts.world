# Castle of Zamora, Spain

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-zamora-spain-q5050446` |
| Coordinates | 41.4998, -5.7561 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.4998/-5.7561)) |
| Wikidata | [Q5050446](https://www.wikidata.org/wiki/Q5050446) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Zamora |
| Designations | bien de interés cultural |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, marker 2, road 169, zone 14, wall 148, building 236, waterway 5, retaining-wall 13).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 58, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1671817 historic=castle Q5050446 1 m from ledger point
- pruned to the outline plus 150 m: 588 -> 376 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 152 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 100 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.4998/-5.7561) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=7; wikidata:Q5050446 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/castle-of-zamora-spain-q5050446.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
