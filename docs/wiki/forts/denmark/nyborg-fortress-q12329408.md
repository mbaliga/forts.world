# Nyborg Fortress

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nyborg-fortress-q12329408` |
| Coordinates | 55.3142, 10.7881 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.3142/10.7881)) |
| Wikidata | [Q12329408](https://www.wikidata.org/wiki/Q12329408) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Nyborg Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 308 elements (outline 1, marker 10, road 378, waterway 14, zone 5, building 514, water 6, retaining-wall 2).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 1, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25711836 historic=castle Q12329408 40 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 514 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 378 mapped (trace size budget); minor lanes are not drawn
- origin moved 41 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.3142/10.7881) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q12329408 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 308 elements); data/traces/nyborg-fortress-q12329408.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
