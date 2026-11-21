# Käfigturm

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kafigturm-q1588585` |
| Coordinates | 46.94816, 7.44394 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.94816/7.44394)) |
| Wikidata | [Q1588585](https://www.wikidata.org/wiki/Q1588585) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|city gate |
| Administrative area | Bern |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 9 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 1, road 263, building 266, zone 4, wall 7, retaining-wall 9, waterway 2, water 9).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 9, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/253624062 historic=yes Q1624957 56 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 266 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 263 mapped (trace size budget); minor lanes are not drawn
- origin moved 56 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.94816/7.44394) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|city gate; sitelinks=9; wikidata:Q1588585 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/kafigturm-q1588585.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
