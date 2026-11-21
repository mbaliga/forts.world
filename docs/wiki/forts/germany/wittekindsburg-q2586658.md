# Wittekindsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wittekindsburg-q2586658` |
| Coordinates | 52.2478, 8.8839 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2478/8.8839)) |
| Wikidata | [Q2586658](https://www.wikidata.org/wiki/Q2586658) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Porta Westfalica |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 111 elements (outline 1, road 60, building 16, zone 17, retaining-wall 1, cliff 10, waterway 5, wall 1).

Evidence: documented 0, mapped 111, inferred 0, derived 0; heights documented 6, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12252755 historic=archaeological_site Q2586658 284 m from ledger point
- origin moved 279 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2478/8.8839) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=2; wikidata:Q2586658 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 111 elements); data/traces/wittekindsburg-q2586658.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
