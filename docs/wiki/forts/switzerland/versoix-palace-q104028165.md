# Versoix Palace

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `versoix-palace-q104028165` |
| Coordinates | 46.27816, 6.16807 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.27816/6.16807)) |
| Wikidata | [Q104028165](https://www.wikidata.org/wiki/Q104028165) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|palace |
| Administrative area | Canton of Geneva |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, road 226, building 206, waterway 11, wall 1, retaining-wall 2, zone 13).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/170165133 historic=castle Q104028165 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 206 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 226 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.27816/6.16807) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|palace; sitelinks=1; wikidata:Q104028165 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/versoix-palace-q104028165.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
