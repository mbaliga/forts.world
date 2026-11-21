# Vlasatice Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vlasatice-castle-q11913635` |
| Coordinates | 48.93378, 16.47825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.93378/16.47825)) |
| Wikidata | [Q11913635](https://www.wikidata.org/wiki/Q11913635) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Vlasatice |
| Inception | 1600 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 57 elements (outline 1, zone 2, road 15, waterway 2, building 36, wall 1).

Evidence: documented 0, mapped 57, inferred 0, derived 0; heights documented 27, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92437879 historic=castle Q11913635 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.93378/16.47825) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q11913635 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 57 elements); data/traces/vlasatice-castle-q11913635.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
