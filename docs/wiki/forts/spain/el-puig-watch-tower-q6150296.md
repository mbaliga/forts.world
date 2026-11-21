# El Puig Watch Tower

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `el-puig-watch-tower-q6150296` |
| Coordinates | 39.5769, -0.27549 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.5769/-0.27549)) |
| Wikidata | [Q6150296](https://www.wikidata.org/wiki/Q6150296) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | El Puig de Santa Maria |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 21 elements (road 13, coastline 1, zone 1, building 1, waterway 3, water 2).

Evidence: documented 0, mapped 21, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":15,"medianInside":0,"medianOutside":2.3}
- sea-1: DEM check ok {"cells":104,"medianInside":0,"medianOutside":2.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.5769/-0.27549) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q6150296 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 21 elements); data/traces/el-puig-watch-tower-q6150296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
