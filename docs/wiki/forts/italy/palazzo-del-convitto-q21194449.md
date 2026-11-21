# Palazzo del Convitto

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-del-convitto-q21194449` |
| Coordinates | 42.35043, 13.3993 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.35043/13.3993)) |
| Wikidata | [Q21194449](https://www.wikidata.org/wiki/Q21194449) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace |
| Administrative area | L'Aquila |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 9, road 249, building 36, wall 103, zone 3, retaining-wall 21).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 1, inferred 0, unknown 159.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10002159 historic=castle Q21194449 19 m from ledger point
- roads capped: kept the 150 longest of 249 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.35043/13.3993) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace; sitelinks=3; wikidata:Q21194449 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/palazzo-del-convitto-q21194449.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
