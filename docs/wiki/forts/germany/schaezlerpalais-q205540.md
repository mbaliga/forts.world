# Schaezlerpalais

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schaezlerpalais-q205540` |
| Coordinates | 48.36499, 10.89858 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.36499/10.89858)) |
| Wikidata | [Q205540](https://www.wikidata.org/wiki/Q205540) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Augsburg |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 1, road 560, building 322, waterway 7, wall 31, water 3, zone 12, retaining-wall 5).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 57, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/70187982 historic=castle Q205540 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 322 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 560 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.36499/10.89858) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=5; wikidata:Q205540 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/schaezlerpalais-q205540.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
