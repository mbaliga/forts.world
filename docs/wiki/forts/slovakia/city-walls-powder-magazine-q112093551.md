# city walls, powder magazine

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-powder-magazine-q112093551` |
| Coordinates | 48.72688, 21.25695 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.72688/21.25695)) |
| Wikidata | [Q112093551](https://www.wikidata.org/wiki/Q112093551) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Old Town |
| Inception | 1800 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 395 elements (outline 1, marker 17, road 255, building 244, waterway 3, wall 45, zone 56, water 1, retaining-wall 2).

Evidence: documented 0, mapped 395, inferred 0, derived 0; heights documented 19, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48358460 historic=castle Q64097132 322 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 244 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 255 mapped (trace size budget); minor lanes are not drawn
- origin moved 321 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.72688/21.25695) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=0; wikidata:Q112093551 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 395 elements); data/traces/city-walls-powder-magazine-q112093551.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
