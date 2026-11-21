# Martinspforte

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `martinspforte-q79419235` |
| Coordinates | 49.63411, 8.36486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.63411/8.36486)) |
| Wikidata | [Q79419235](https://www.wikidata.org/wiki/Q79419235) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Worms |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 223 elements (outline 1, road 139, building 684, wall 138, zone 27).

Evidence: documented 0, mapped 223, inferred 0, derived 0; heights documented 23, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1213287023 historic=citywalls 192 m from ledger point
- pruned to the outline plus 150 m: 989 -> 486 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 323 mapped (trace size budget); the rest of the town is not drawn
- origin moved 193 m from the ledger point to the centre of the mapped site
- 26 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.63411/8.36486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q79419235 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 223 elements); data/traces/martinspforte-q79419235.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
