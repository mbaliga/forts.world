# King's Gate

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `king-s-gate-q573693` |
| Coordinates | 54.71361, 20.53583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.71361/20.53583)) |
| Wikidata | [Q573693](https://www.wikidata.org/wiki/Q573693) (CC0) |
| Wikidata class | fortification |
| Types | museum\|city gate\|architectural landmark |
| Administrative area | Kaliningrad |
| Inception | 1843 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 86 elements (outline 1, road 45, building 29, wall 2, water 1, waterway 1, retaining-wall 7).

Evidence: documented 0, mapped 86, inferred 0, derived 0; heights documented 10, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/693565430 historic=castle 291 m from ledger point
- origin moved 290 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.71361/20.53583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; museum\|city gate\|architectural landmark; sitelinks=12; wikidata:Q573693 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 86 elements); data/traces/king-s-gate-q573693.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
