# Łupinowa Tower in Lwówek Śląski

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `upinowa-tower-in-lwowek-slaski-q138006442` |
| Coordinates | 51.11053, 15.58158 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.11053/15.58158)) |
| Wikidata | [Q138006442](https://www.wikidata.org/wiki/Q138006442) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Lwówek Śląski |
| Designations | municipal immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 13, road 559, building 322, wall 59, waterway 10, zone 76, retaining-wall 6).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 48, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/588177179 historic=citywalls 34 m from ledger point
- pruned to the outline plus 150 m: 1046 -> 633 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 174 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 354 mapped (trace size budget); minor lanes are not drawn
- origin moved 36 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.11053/15.58158) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q138006442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/upinowa-tower-in-lwowek-slaski-q138006442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
