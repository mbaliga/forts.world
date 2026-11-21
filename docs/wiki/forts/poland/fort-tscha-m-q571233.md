# Fort Tscha-M

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-tscha-m-q571233` |
| Coordinates | 52.20123, 20.9749 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.20123/20.9749)) |
| Wikidata | [Q571233](https://www.wikidata.org/wiki/Q571233) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Ochota |
| Designations | municipal immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |
| OSM `website` | https://eko.um.warszawa.pl/-/park-forty-korotynskiego- |

## What the model contains

Tier **T1**, status `outline+walls`, 268 elements (outline 1, marker 3, road 1149, building 209, wall 7, zone 395, waterway 3, retaining-wall 25).

Evidence: documented 0, mapped 268, inferred 0, derived 0; heights documented 57, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28383589 historic=yes Q571233 112 m from ledger point
- pruned to the outline plus 150 m: 1792 -> 648 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 96 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 424 mapped (trace size budget); minor lanes are not drawn
- origin moved 115 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.20123/20.9749) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q571233 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 268 elements); data/traces/fort-tscha-m-q571233.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
