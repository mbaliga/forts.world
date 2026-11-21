# Schloss

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-q2240935` |
| Coordinates | 50.1082, 10.78291 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1082/10.78291)) |
| Wikidata | [Q2240935](https://www.wikidata.org/wiki/Q2240935) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|archaeological site |
| Administrative area | Ebern |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, road 19, waterway 4, building 33, zone 4, wall 2).

Evidence: documented 0, mapped 63, inferred 0, derived 0; heights documented 4, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/165209182 historic=castle Q2240935 7 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1082/10.78291) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|archaeological site; sitelinks=4; wikidata:Q2240935 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/schloss-q2240935.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
