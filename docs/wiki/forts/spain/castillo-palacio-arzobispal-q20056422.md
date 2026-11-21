# Castillo Palacio Arzobispal

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-palacio-arzobispal-q20056422` |
| Coordinates | 41.12121, -0.50996 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.12121/-0.50996)) |
| Wikidata | [Q20056422](https://www.wikidata.org/wiki/Q20056422) (CC0) |
| Wikidata class | castle |
| Types | castle\|archbishop's palace |
| Administrative area | Bajo Martín |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 1, road 104, building 533, zone 8, waterway 2, wall 15, retaining-wall 12, cliff 1, water 1).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 0, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/460590724 historic=castle Q20056422 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 533 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.12121/-0.50996) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archbishop's palace; sitelinks=4; wikidata:Q20056422 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/castillo-palacio-arzobispal-q20056422.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
