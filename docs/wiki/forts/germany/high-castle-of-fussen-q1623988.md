# High Castle of Füssen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `high-castle-of-fussen-q1623988` |
| Coordinates | 47.5671, 10.69805 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.5671/10.69805)) |
| Wikidata | [Q1623988](https://www.wikidata.org/wiki/Q1623988) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Füssen |
| Inception | 1292 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, marker 21, road 138, building 464, wall 26, waterway 1, zone 13, cliff 7, retaining-wall 1).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 76, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/216528401 historic=citywalls 228 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 464 mapped (trace size budget); the rest of the town is not drawn
- origin moved 229 m from the ledger point to the outline centroid
- 35 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.5671/10.69805) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=4; wikidata:Q1623988 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/high-castle-of-fussen-q1623988.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
