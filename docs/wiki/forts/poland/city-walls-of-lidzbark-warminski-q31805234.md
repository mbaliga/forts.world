# City walls of Lidzbark Warmiński

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-lidzbark-warminski-q31805234` |
| Coordinates | 54.12706, 20.58028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.12706/20.58028)) |
| Wikidata | [Q31805234](https://www.wikidata.org/wiki/Q31805234) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Lidzbark Warmiński |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 1, road 271, water 4, waterway 10, building 164, wall 57, zone 47, retaining-wall 39).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 21, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1332682138 historic=castle Q5420724 245 m from ledger point
- pruned to the outline plus 150 m: 594 -> 524 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 133 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 244 mapped (trace size budget); minor lanes are not drawn
- origin moved 245 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.12706/20.58028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q31805234 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/city-walls-of-lidzbark-warminski-q31805234.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
