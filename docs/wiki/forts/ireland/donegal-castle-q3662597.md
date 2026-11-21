# Donegal Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donegal-castle-q3662597` |
| Coordinates | 54.655, -8.111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.655/-8.111)) |
| Wikidata | [Q3662597](https://www.wikidata.org/wiki/Q3662597) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Donegal |
| Designations | national monument of Ireland |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.heritageireland.ie/en/North-West/DonegalCastle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 1, road 91, building 324, wall 26, coastline 5, waterway 1, water 2, zone 3, retaining-wall 5).

Evidence: documented 0, mapped 255, inferred 0, derived 1; heights documented 14, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/201896412 historic=castle Q3662597 24 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 324 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":98,"medianInside":7.6,"medianOutside":9.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.655/-8.111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q3662597 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/donegal-castle-q3662597.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
