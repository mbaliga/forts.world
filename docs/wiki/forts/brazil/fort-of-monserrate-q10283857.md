# Fort of Monserrate

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-monserrate-q10283857` |
| Coordinates | -12.92996, -38.51772 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-12.92996/-38.51772)) |
| Wikidata | [Q10283857](https://www.wikidata.org/wiki/Q10283857) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|historic site\|fort |
| Administrative area | Salvador |
| Inception | 1583 |
| Designations | heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 142 elements (outline 1, marker 2, road 36, building 86, zone 3, coastline 11, wall 1, water 2).

Evidence: documented 0, mapped 142, inferred 0, derived 2; heights documented 0, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18077162 historic=castle Q10283857 5 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":75,"medianInside":3.5,"medianOutside":5.7}
- sea-1: DEM check ok {"cells":789,"medianInside":3.7,"medianOutside":10}
- 810 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-12.92996/-38.51772) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|historic site\|fort; sitelinks=7; wikidata:Q10283857 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 142 elements); data/traces/fort-of-monserrate-q10283857.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
