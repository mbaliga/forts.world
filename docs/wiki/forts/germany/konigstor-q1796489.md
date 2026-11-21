# Königstor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `konigstor-q1796489` |
| Coordinates | 49.4479, 11.0815 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4479/11.0815)) |
| Wikidata | [Q1796489](https://www.wikidata.org/wiki/Q1796489) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Nuremberg |
| Inception | 1849 |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 3, road 448, building 149, wall 43, zone 7).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 71, inferred 0, unknown 92.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23447845 historic=citywalls Q1451897 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 149 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 448 mapped (trace size budget); minor lanes are not drawn
- origin moved 20 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4479/11.0815) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q1796489 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/konigstor-q1796489.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
