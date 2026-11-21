# Palace of the Governors

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-the-governors-q2442235` |
| Coordinates | 35.68794, -105.93816 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.68794/-105.93816)) |
| Wikidata | [Q2442235](https://www.wikidata.org/wiki/Q2442235) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Santa Fe |
| Inception | 1610 |
| Designations | National Treasure\|National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.nmhistorymuseum.org/about/campus/the-palace-of-the-governors.html |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 11, road 324, building 97, waterway 1, zone 9, wall 14, retaining-wall 1).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 55, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/310833338 historic=castle Q2442235 8 m from ledger point
- roads capped: kept the 150 longest of 324 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.68794/-105.93816) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=8; wikidata:Q2442235 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/palace-of-the-governors-q2442235.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
