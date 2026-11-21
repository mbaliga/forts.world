# Castell de Sant Esteve de Mar

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-sant-esteve-de-mar-q8342538` |
| Coordinates | 41.85826, 3.14759 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.85826/3.14759)) |
| Wikidata | [Q8342538](https://www.wikidata.org/wiki/Q8342538) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Palamós i Sant Joan |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 5 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, marker 1, road 20, building 37, wall 3, zone 1, coastline 7, water 1).

Evidence: documented 0, mapped 71, inferred 0, derived 1; heights documented 23, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3751394 historic=ruins Q8342538 7 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":207,"medianInside":0,"medianOutside":9.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.85826/3.14759) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q8342538 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 71 elements); data/traces/castell-de-sant-esteve-de-mar-q8342538.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
