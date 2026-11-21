# Maarten van Rossum house

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maarten-van-rossum-house-q2025139` |
| Coordinates | 51.81129, 5.24899 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.81129/5.24899)) |
| Wikidata | [Q2025139](https://www.wikidata.org/wiki/Q2025139) (CC0) |
| Wikidata class | castle |
| Types | castle\|building |
| Administrative area | Zaltbommel |
| Inception | 1536 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://stadskasteelzaltbommel.nl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 12, road 126, building 517, zone 30, water 5, waterway 4, wall 10).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 0, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/273079464 historic=castle Q2025139 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 517 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.81129/5.24899) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building; sitelinks=2; wikidata:Q2025139 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/maarten-van-rossum-house-q2025139.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
