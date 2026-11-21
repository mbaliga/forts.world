# Castel Telvana

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-telvana-q606822` |
| Coordinates | 46.05783, 11.45941 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.05783/11.45941)) |
| Wikidata | [Q606822](https://www.wikidata.org/wiki/Q606822) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Borgo Valsugana |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.visitvalsugana.it/it/scopri-la-valsugana/cultura/castelli-del-trentino/castel-telvana_2153_ida/ |

## What the model contains

Tier **T1**, status `outline+walls`, 70 elements (outline 1, marker 1, building 14, road 38, retaining-wall 4, wall 10, waterway 2).

Evidence: documented 0, mapped 70, inferred 0, derived 0; heights documented 2, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17371041 historic=castle Q606822 10 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.05783/11.45941) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q606822 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 70 elements); data/traces/castel-telvana-q606822.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
