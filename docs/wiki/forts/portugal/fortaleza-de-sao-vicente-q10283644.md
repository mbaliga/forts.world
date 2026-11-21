# Fortaleza de São Vicente

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-sao-vicente-q10283644` |
| Coordinates | 37.02306, -8.99611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.02306/-8.99611)) |
| Wikidata | [Q10283644](https://www.wikidata.org/wiki/Q10283644) (CC0) |
| Wikidata class | fort |
| Types | military base\|fort\|historic building\|former convent |
| Administrative area | Sagres |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 59 elements (outline 1, marker 1, cliff 6, wall 10, coastline 2, building 4, road 31, zone 3, water 1).

Evidence: documented 0, mapped 59, inferred 0, derived 1; heights documented 1, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6824970 historic=fort Q10283644 17 m from ledger point
- island ring (1131 m2) cut out of sea-0
- origin moved 20 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":286,"medianInside":-1638.3,"medianOutside":-1638.3}
- 1406 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.02306/-8.99611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; military base\|fort\|historic building\|former convent; sitelinks=3; wikidata:Q10283644 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 59 elements); data/traces/fortaleza-de-sao-vicente-q10283644.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
