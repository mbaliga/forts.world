# Suda de Tortosa

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `suda-de-tortosa-q2970627` |
| Coordinates | 40.8148, 0.52332 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.8148/0.52332)) |
| Wikidata | [Q2970627](https://www.wikidata.org/wiki/Q2970627) (CC0) |
| Wikidata class | castle |
| Types | castle\|castle with zuda |
| Administrative area | Tortosa |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 6, road 161, waterway 3, wall 14, building 664, zone 2, retaining-wall 7).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 120, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/586323505 historic=castle Q2970627 74 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 664 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 161 mapped (trace size budget); minor lanes are not drawn
- origin moved 72 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.8148/0.52332) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|castle with zuda; sitelinks=5; wikidata:Q2970627 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/suda-de-tortosa-q2970627.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
