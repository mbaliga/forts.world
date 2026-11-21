# Greek's Gate

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `greek-s-gate-q20011121` |
| Coordinates | 35.88557, 14.40158 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88557/14.40158)) |
| Wikidata | [Q20011121](https://www.wikidata.org/wiki/Q20011121) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Mdina |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 387 elements (outline 1, marker 21, road 235, building 291, wall 62, zone 30, water 2).

Evidence: documented 0, mapped 387, inferred 0, derived 0; heights documented 32, inferred 0, unknown 151.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/15801416 historic=citywalls 151 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 291 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 235 mapped (trace size budget); minor lanes are not drawn
- origin moved 149 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88557/14.40158) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q20011121 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 387 elements); data/traces/greek-s-gate-q20011121.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
