# Unterseen Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `unterseen-castle-q2243810` |
| Coordinates | 46.68623, 7.84975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.68623/7.84975)) |
| Wikidata | [Q2243810](https://www.wikidata.org/wiki/Q2243810) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Unterseen |
| Inception | 1656 |
| Designations | Swiss cultural property of cantonal or local significance |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 273 elements (outline 1, marker 1, waterway 11, road 114, building 315, zone 5, water 2, wall 19).

Evidence: documented 0, mapped 273, inferred 0, derived 0; heights documented 3, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/171037349 historic=castle Q2243810 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 315 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.68623/7.84975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q2243810 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 273 elements); data/traces/unterseen-castle-q2243810.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
