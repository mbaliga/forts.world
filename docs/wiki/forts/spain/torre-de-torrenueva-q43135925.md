# Torre de Torrenueva

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-torrenueva-q43135925` |
| Coordinates | 36.70612, -3.49266 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.70612/-3.49266)) |
| Wikidata | [Q43135925](https://www.wikidata.org/wiki/Q43135925) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Torrenueva Costa |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 387 elements (outline 1, road 99, coastline 1, wall 44, waterway 2, zone 6, building 233, water 1).

Evidence: documented 0, mapped 387, inferred 0, derived 1; heights documented 215, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/74355600 historic=monument Q43135925 2 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":83,"medianInside":0,"medianOutside":8.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.70612/-3.49266) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q43135925 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 387 elements); data/traces/torre-de-torrenueva-q43135925.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
