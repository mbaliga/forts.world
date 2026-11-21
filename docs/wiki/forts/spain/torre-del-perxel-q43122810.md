# Torre del Perxel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-perxel-q43122810` |
| Coordinates | 42.12674, 3.1284 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.12674/3.1284)) |
| Wikidata | [Q43122810](https://www.wikidata.org/wiki/Q43122810) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | L'Escala |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 396 elements (outline 1, marker 1, road 85, coastline 14, building 279, retaining-wall 8, zone 1, wall 6, water 1).

Evidence: documented 0, mapped 396, inferred 0, derived 1; heights documented 289, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/764035489 historic=archaeological_site 442 m from ledger point
- island ring (1124 m2) cut out of sea-0
- origin moved 442 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":231,"medianInside":0,"medianOutside":4.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.12674/3.1284) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=1; wikidata:Q43122810 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 396 elements); data/traces/torre-del-perxel-q43122810.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
