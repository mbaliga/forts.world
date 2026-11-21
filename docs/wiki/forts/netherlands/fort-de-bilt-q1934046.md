# Fort de Bilt

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-bilt-q1934046` |
| Coordinates | 52.09654, 5.14741 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.09654/5.14741)) |
| Wikidata | [Q1934046](https://www.wikidata.org/wiki/Q1934046) (CC0) |
| Wikidata class | fort |
| Types | fort\|architectural ensemble\|fort |
| Administrative area | Utrecht |
| Designations | Rijksmonument complex |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 1, road 326, building 322, waterway 37, zone 178, water 34, wall 13, retaining-wall 2).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 1, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/159404088 historic=fort Q1934046 45 m from ledger point
- pruned to the outline plus 150 m: 914 -> 491 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 135 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 46 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.09654/5.14741) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|architectural ensemble\|fort; sitelinks=2; wikidata:Q1934046 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/fort-de-bilt-q1934046.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
