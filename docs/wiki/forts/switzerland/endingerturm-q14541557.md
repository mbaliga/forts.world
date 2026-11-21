# Endingerturm

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `endingerturm-q14541557` |
| Coordinates | 47.2264, 8.81291 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.2264/8.81291)) |
| Wikidata | [Q14541557](https://www.wikidata.org/wiki/Q14541557) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Rapperswil-Jona |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `ruins` | no |
| OSM `website` | https://www.schlossrapperswil.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 2, road 285, building 213, wall 13, zone 3, retaining-wall 19).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 106, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17175264 historic=castle Q1354897 226 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 213 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 285 mapped (trace size budget); minor lanes are not drawn
- origin moved 228 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.2264/8.81291) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q14541557 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/endingerturm-q14541557.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
