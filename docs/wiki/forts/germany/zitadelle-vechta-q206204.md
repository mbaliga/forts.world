# Zitadelle Vechta

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zitadelle-vechta-q206204` |
| Coordinates | 52.7268, 8.278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.7268/8.278)) |
| Wikidata | [Q206204](https://www.wikidata.org/wiki/Q206204) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Vechta |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 2, road 301, building 344, water 4, zone 8, waterway 3, wall 2).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 25, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/92806093 historic=castle Q206204 157 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 301 mapped (trace size budget); minor lanes are not drawn
- origin moved 160 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.7268/8.278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=2; wikidata:Q206204 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/zitadelle-vechta-q206204.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
