# Mannheim Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mannheim-palace-q574723` |
| Coordinates | 49.48368, 8.46276 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.48368/8.46276)) |
| Wikidata | [Q574723](https://www.wikidata.org/wiki/Q574723) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum\|château\|royal palace |
| Administrative area | Mannheim |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `website` | https://www.schloss-mannheim.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 375 elements (outline 1, marker 19, road 674, building 267, zone 61, wall 20, waterway 1, retaining-wall 3).

Evidence: documented 0, mapped 375, inferred 0, derived 0; heights documented 69, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/60105 historic=castle Q574723 29 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 267 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 674 mapped (trace size budget); minor lanes are not drawn
- origin moved 34 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.48368/8.46276) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum\|château\|royal palace; sitelinks=17; wikidata:Q574723 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 375 elements); data/traces/mannheim-palace-q574723.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
