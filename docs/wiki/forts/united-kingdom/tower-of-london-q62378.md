# Tower of London

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-london-q62378` |
| Coordinates | 51.5082, -0.0762 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.5082/-0.0762)) |
| Wikidata | [Q62378](https://www.wikidata.org/wiki/Q62378) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|archaeological site\|independent museum |
| Administrative area | London Borough of Tower Hamlets |
| Inception | 1066 |
| Designations | scheduled monument\|World Heritage Site |
| UNESCO WHC id | 488 |
| Wikipedia language editions | 88 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.hrp.org.uk/toweroflondon |

## What the model contains

Tier **T1**, status `outline+walls`, 385 elements (outline 1, marker 43, road 566, building 133, zone 18, wall 19, water 3, retaining-wall 24, waterway 7).

Evidence: documented 0, mapped 385, inferred 0, derived 0; heights documented 61, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/370870741 historic=castle Q62378 38 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 133 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 566 mapped (trace size budget); minor lanes are not drawn
- origin moved 38 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.5082/-0.0762) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|archaeological site\|independent museum; sitelinks=88; wikidata:Q62378 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 385 elements); data/traces/tower-of-london-q62378.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
