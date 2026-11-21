# Porta Sant'Alessandro

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-sant-alessandro-q26844365` |
| Coordinates | 45.70649, 9.65784 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.70649/9.65784)) |
| Wikidata | [Q26844365](https://www.wikidata.org/wiki/Q26844365) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Bergamo |
| Inception | 1561 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 89 elements (outline 1, road 44, building 36, wall 2, waterway 2, water 3, retaining-wall 1).

Evidence: documented 0, mapped 89, inferred 0, derived 0; heights documented 1, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2447761 historic=castle Q3662873 614 m from ledger point
- origin moved 629 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.70649/9.65784) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q26844365 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 89 elements); data/traces/porta-sant-alessandro-q26844365.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
