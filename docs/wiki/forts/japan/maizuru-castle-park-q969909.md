# Maizuru Castle Park

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maizuru-castle-park-q969909` |
| Coordinates | 35.66529, 138.57134 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.66529/138.57134)) |
| Wikidata | [Q969909](https://www.wikidata.org/wiki/Q969909) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|hirayamajiro |
| Administrative area | Marunouchi |
| Inception | 1583 |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 10 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, marker 3, building 141, road 136, water 1, retaining-wall 66, zone 171, wall 15).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 1, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/226827178 historic=monument Q38255010 73 m from ledger point
- pruned to the outline plus 150 m: 534 -> 342 elements
- roads capped: kept the 80 longest of 94 mapped (trace size budget); minor lanes are not drawn
- origin moved 72 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.66529/138.57134) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|hirayamajiro; sitelinks=10; wikidata:Q969909 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/maizuru-castle-park-q969909.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
