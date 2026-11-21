# Builth Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `builth-castle-q4986692` |
| Coordinates | 52.1492, -3.39855 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.1492/-3.39855)) |
| Wikidata | [Q4986692](https://www.wikidata.org/wiki/Q4986692) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Builth Wells |
| Designations | National Monument of Wales\|scheduled monument |
| Wikipedia language editions | 8 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 250 elements (outline 1, waterway 8, road 110, water 1, building 510, zone 10).

Evidence: documented 0, mapped 250, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1031707844 historic=ruins Q4986692 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 510 mapped (trace size budget); the rest of the town is not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.1492/-3.39855) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q4986692 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 250 elements); data/traces/builth-castle-q4986692.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
