# Elbasan Clock Tower

> Albania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `elbasan-clock-tower-q30329843` |
| Coordinates | 41.11316, 20.08239 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.11316/20.08239)) |
| Wikidata | [Q30329843](https://www.wikidata.org/wiki/Q30329843) (CC0) |
| Wikidata class | castle |
| Types | castle\|clock tower\|historic site |
| Administrative area | Elbasan County |
| Designations | Cultural Monument of Albania |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 8, road 544, building 679, wall 26, zone 25).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 4, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4142990 historic=citywalls 81 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 679 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 544 mapped (trace size budget); minor lanes are not drawn
- origin moved 87 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.11316/20.08239) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|clock tower\|historic site; sitelinks=2; wikidata:Q30329843 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/elbasan-clock-tower-q30329843.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
