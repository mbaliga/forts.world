# Fredrikstad Fortress

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fredrikstad-fortress-q5499573` |
| Coordinates | 59.2034, 10.9542 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.2034/10.9542)) |
| Wikidata | [Q5499573](https://www.wikidata.org/wiki/Q5499573) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural property |
| Administrative area | Fredrikstad Municipality |
| Inception | 1663 |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 16, road 192, zone 19, building 320, wall 2, retaining-wall 6, waterway 2).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 28, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/69713457 historic=yes Q11971499 134 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 320 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 192 mapped (trace size budget); minor lanes are not drawn
- origin moved 120 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.2034/10.9542) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural property; sitelinks=3; wikidata:Q5499573 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/fredrikstad-fortress-q5499573.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
