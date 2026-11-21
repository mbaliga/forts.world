# Wojanowska Gate

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wojanowska-gate-q137996914` |
| Coordinates | 50.90292, 15.73772 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.90292/15.73772)) |
| Wikidata | [Q137996914](https://www.wikidata.org/wiki/Q137996914) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Jelenia Góra |
| Inception | 1764 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 5, road 141, building 285, zone 3, wall 4, waterway 1).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 10, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7135202 historic=yes Q137996914 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 285 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.90292/15.73772) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q137996914 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/wojanowska-gate-q137996914.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
