# Knight's Tower in Warsaw

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `knight-s-tower-in-warsaw-q24944928` |
| Coordinates | 52.24874, 21.01032 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.24874/21.01032)) |
| Wikidata | [Q24944928](https://www.wikidata.org/wiki/Q24944928) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Śródmieście |
| Inception | 1400 |
| Designations | municipal immovable monument in Poland\|immovable monument in Poland\|provincial register of monuments |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, marker 56, waterway 1, road 319, building 209, wall 50, zone 55, water 1, retaining-wall 10).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 52, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135771918 historic=citywalls 1 m from ledger point
- pruned to the outline plus 150 m: 702 -> 323 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 111 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 132 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the outline centroid
- 20 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.24874/21.01032) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q24944928 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 221 elements); data/traces/knight-s-tower-in-warsaw-q24944928.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
