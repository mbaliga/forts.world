# Torre de Calahonda

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-calahonda-q642600` |
| Coordinates | 36.48759, -4.71189 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.48759/-4.71189)) |
| Wikidata | [Q642600](https://www.wikidata.org/wiki/Q642600) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 142 elements (outline 1, road 58, coastline 1, building 68, waterway 3, zone 3, wall 7, water 1).

Evidence: documented 0, mapped 142, inferred 0, derived 1; heights documented 11, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1410488943 historic=building Q642600 283 m from ledger point
- origin moved 283 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":43,"medianInside":0,"medianOutside":15.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.48759/-4.71189) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q642600 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 142 elements); data/traces/torre-de-calahonda-q642600.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
