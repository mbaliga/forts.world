# Bergfried Wassenberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bergfried-wassenberg-q98792924` |
| Coordinates | 51.10085, 6.15767 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.10085/6.15767)) |
| Wikidata | [Q98792924](https://www.wikidata.org/wiki/Q98792924) (CC0) |
| Wikidata class | castle |
| Types | castle\|observation tower |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 12, road 169, building 338, wall 13, water 1, zone 8, waterway 1).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 1, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24374806 historic=castle Q98792924 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 338 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 169 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.10085/6.15767) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|observation tower; sitelinks=2; wikidata:Q98792924 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/bergfried-wassenberg-q98792924.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
