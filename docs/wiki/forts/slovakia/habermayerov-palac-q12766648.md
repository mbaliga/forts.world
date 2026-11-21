# Habermayerov palác

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `habermayerov-palac-q12766648` |
| Coordinates | 48.14815, 17.104 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.14815/17.104)) |
| Wikidata | [Q12766648](https://www.wikidata.org/wiki/Q12766648) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Bratislava |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 22, road 170, building 227, wall 12, zone 3, retaining-wall 1).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 48, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4686767 historic=castle Q12766648 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 227 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 170 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.14815/17.104) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q12766648 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/habermayerov-palac-q12766648.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
