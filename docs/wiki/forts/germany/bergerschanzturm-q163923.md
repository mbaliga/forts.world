# Bergerschanzturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bergerschanzturm-q163923` |
| Coordinates | 50.782, 6.08634 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.782/6.08634)) |
| Wikidata | [Q163923](https://www.wikidata.org/wiki/Q163923) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Aachen |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 3, road 133, water 2, waterway 1, building 286, wall 23, retaining-wall 2).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 39, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/79620625 historic=citywalls 290 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 286 mapped (trace size budget); the rest of the town is not drawn
- origin moved 289 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.782/6.08634) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q163923 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/bergerschanzturm-q163923.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
