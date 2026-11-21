# Muralla urbana

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `muralla-urbana-q97629518` |
| Coordinates | 37.86991, -4.18453 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.86991/-4.18453)) |
| Wikidata | [Q97629518](https://www.wikidata.org/wiki/Q97629518) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive wall\|fortification |
| Administrative area | Porcuna |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.monumentalnet.org/monumento.php?r=J-CAS-043&n=Torre%C3%B3n+de+Boabdil |

## What the model contains

Tier **T1**, status `outline+walls`, 258 elements (outline 1, road 95, building 777, wall 39, zone 2, cliff 1).

Evidence: documented 0, mapped 258, inferred 0, derived 0; heights documented 122, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/332178436 historic=castle 33 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 777 mapped (trace size budget); the rest of the town is not drawn
- origin moved 33 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.86991/-4.18453) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive wall\|fortification; sitelinks=1; wikidata:Q97629518 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 258 elements); data/traces/muralla-urbana-q97629518.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
