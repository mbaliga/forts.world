# Padellàs's House

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `padellas-s-house-q14924660` |
| Coordinates | 41.38399, 2.17776 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.38399/2.17776)) |
| Wikidata | [Q14924660](https://www.wikidata.org/wiki/Q14924660) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Gothic Quarter |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 9, road 271, building 238, wall 17, waterway 3, zone 1, water 1).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 115, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8911639 historic=castle Q14924660 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 238 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 271 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.38399/2.17776) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=6; wikidata:Q14924660 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/padellas-s-house-q14924660.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
