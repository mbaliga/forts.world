# Aberdeen Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aberdeen-castle-q2968038` |
| Coordinates | 57.1492, -2.09028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.1492/-2.09028)) |
| Wikidata | [Q2968038](https://www.wikidata.org/wiki/Q2968038) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aberdeen City |
| Wikipedia language editions | 8 |
| OSM `historic` | monument |
| OSM `heritage` | yes |
| OSM `description` | Aberdeen City Historical Landmark |

## What the model contains

Tier **T1**, status `outline+walls`, 399 elements (outline 1, marker 10, road 326, building 218, zone 15, wall 74, retaining-wall 28, water 1).

Evidence: documented 0, mapped 399, inferred 0, derived 0; heights documented 38, inferred 0, unknown 184.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/581302302 historic=monument Q17576440 176 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 218 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 326 mapped (trace size budget); minor lanes are not drawn
- origin moved 175 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.1492/-2.09028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q2968038 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 399 elements); data/traces/aberdeen-castle-q2968038.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
