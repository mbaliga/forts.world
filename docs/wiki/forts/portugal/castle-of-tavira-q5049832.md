# Castle of Tavira

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-tavira-q5049832` |
| Coordinates | 37.12504, -7.6537 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.12504/-7.6537)) |
| Wikidata | [Q5049832](https://www.wikidata.org/wiki/Q5049832) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Tavira (Santa Maria e Santiago) |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 5, road 159, waterway 2, building 504, zone 3, wall 39, water 1).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 11, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/476292618 historic=castle 230 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 504 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 159 mapped (trace size budget); minor lanes are not drawn
- origin moved 230 m from the ledger point to the outline centroid
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.12504/-7.6537) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=4; wikidata:Q5049832 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/castle-of-tavira-q5049832.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
