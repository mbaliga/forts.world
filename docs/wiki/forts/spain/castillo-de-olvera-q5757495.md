# Castillo de Olvera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-olvera-q5757495` |
| Coordinates | 36.93577, -5.26736 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.93577/-5.26736)) |
| Wikidata | [Q5757495](https://www.wikidata.org/wiki/Q5757495) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Olvera |
| Designations | bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Castillo de Olvera |

## What the model contains

Tier **T1**, status `outline+walls`, 240 elements (outline 1, marker 1, road 108, zone 8, building 592, wall 2).

Evidence: documented 0, mapped 240, inferred 0, derived 0; heights documented 11, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/255816129 historic=castle Q5757495 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 592 mapped (trace size budget); the rest of the town is not drawn
- origin moved 20 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.93577/-5.26736) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=6; wikidata:Q5757495 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 240 elements); data/traces/castillo-de-olvera-q5757495.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
