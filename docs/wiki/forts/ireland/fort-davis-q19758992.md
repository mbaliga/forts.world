# Fort Davis

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-davis-q19758992` |
| Coordinates | 51.816, -8.261 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.816/-8.261)) |
| Wikidata | [Q19758992](https://www.wikidata.org/wiki/Q19758992) (CC0) |
| Wikidata class | fort |
| Types | artillery fort |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, marker 7, zone 1, coastline 1, road 13, retaining-wall 5, building 27, wall 7, water 1).

Evidence: documented 0, mapped 63, inferred 0, derived 1; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1554864537 historic=fort 226 m from ledger point
- origin moved 227 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":39,"medianInside":11.5,"medianOutside":57.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.816/-8.261) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; artillery fort; sitelinks=3; wikidata:Q19758992 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/fort-davis-q19758992.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
