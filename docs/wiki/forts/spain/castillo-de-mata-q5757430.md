# Castillo de Mata

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-mata-q5757430` |
| Coordinates | 28.10713, -15.42178 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.10713/-15.42178)) |
| Wikidata | [Q5757430](https://www.wikidata.org/wiki/Q5757430) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Las Palmas de Gran Canaria |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 336 elements (outline 1, road 150, zone 2, building 307, wall 63).

Evidence: documented 0, mapped 336, inferred 0, derived 0; heights documented 6, inferred 0, unknown 177.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/182801321 historic=castle Q5757430 0 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 307 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.10713/-15.42178) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=3; wikidata:Q5757430 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 336 elements); data/traces/castillo-de-mata-q5757430.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
