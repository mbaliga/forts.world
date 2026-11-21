# Galliera Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `galliera-castle-q95474677` |
| Coordinates | 44.50388, 11.34557 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.50388/11.34557)) |
| Wikidata | [Q95474677](https://www.wikidata.org/wiki/Q95474677) (CC0) |
| Wikidata class | castle |
| Types | castle\|sequence |
| Administrative area | Bologna |
| Inception | 1550 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 1, road 406, zone 43, building 105, wall 17, waterway 8, water 1, retaining-wall 1).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 7, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/149876498 historic=archaeological_site 9 m from ledger point
- roads capped: kept the 150 longest of 406 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.50388/11.34557) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|sequence; sitelinks=3; wikidata:Q95474677 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/galliera-castle-q95474677.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
