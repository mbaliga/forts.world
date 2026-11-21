# Assergi

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `assergi-q2595395` |
| Coordinates | 42.41545, 13.50786 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.41545/13.50786)) |
| Wikidata | [Q2595395](https://www.wikidata.org/wiki/Q2595395) (CC0) |
| Wikidata class | fort |
| Types | fortified town\|frazione |
| Administrative area | L'Aquila |
| Wikipedia language editions | 9 |
| OSM `historic` | monastery |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 2, road 172, wall 59, retaining-wall 16, building 353, waterway 1, cliff 4).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 0, inferred 0, unknown 195.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9723088 historic=monastery Q95221120 208 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 353 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 172 mapped (trace size budget); minor lanes are not drawn
- origin moved 210 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.41545/13.50786) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified town\|frazione; sitelinks=9; wikidata:Q2595395 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/assergi-q2595395.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
