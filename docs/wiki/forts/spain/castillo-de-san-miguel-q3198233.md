# Castillo de San Miguel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-miguel-q3198233` |
| Coordinates | 28.3731, -16.7661 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.3731/-16.7661)) |
| Wikidata | [Q3198233](https://www.wikidata.org/wiki/Q3198233) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|fort\|monument\|museographic collection |
| Administrative area | Garachico |
| Designations | bien de interés cultural |
| Wikipedia language editions | 9 |
| OSM `historic` | fort |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 392 elements (outline 1, marker 9, road 113, wall 35, building 218, coastline 3, water 4, zone 9).

Evidence: documented 0, mapped 392, inferred 0, derived 1; heights documented 208, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/195580026 historic=fort Q3198233 9 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":477,"medianInside":0,"medianOutside":11.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.3731/-16.7661) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|fort\|monument\|museographic collection; sitelinks=9; wikidata:Q3198233 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 392 elements); data/traces/castillo-de-san-miguel-q3198233.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
