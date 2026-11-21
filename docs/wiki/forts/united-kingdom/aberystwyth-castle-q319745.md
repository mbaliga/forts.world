# Aberystwyth Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aberystwyth-castle-q319745` |
| Coordinates | 52.41328, -4.0895 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.41328/-4.0895)) |
| Wikidata | [Q319745](https://www.wikidata.org/wiki/Q319745) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Aberystwyth |
| Inception | 1277 |
| Designations | National Monument of Wales\|Grade I listed building\|scheduled monument |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, marker 18, road 194, building 158, water 3, coastline 4, wall 31, zone 5, retaining-wall 1).

Evidence: documented 0, mapped 333, inferred 0, derived 1; heights documented 2, inferred 0, unknown 150.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/123596491 historic=castle 50 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 158 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 194 mapped (trace size budget); minor lanes are not drawn
- origin moved 50 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":758,"medianInside":10,"medianOutside":10}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.41328/-4.0895) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=18; wikidata:Q319745 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/aberystwyth-castle-q319745.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
