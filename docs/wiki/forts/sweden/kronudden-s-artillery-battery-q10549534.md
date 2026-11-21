# Kronudden's Artillery Battery

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kronudden-s-artillery-battery-q10549534` |
| Coordinates | 59.40528, 18.35361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.40528/18.35361)) |
| Wikidata | [Q10549534](https://www.wikidata.org/wiki/Q10549534) (CC0) |
| Wikidata class | fort |
| Types | fortification\|coastal battery\|heritage site in Sweden |
| Administrative area | Vaxholm Municipality |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `description` | Naval fortifications previously defending the approaches to Stockholm. |

## What the model contains

Tier **T1**, status `outline+walls`, 56 elements (outline 1, road 33, coastline 3, building 10, wall 2, retaining-wall 1, zone 1, waterway 1, water 4).

Evidence: documented 0, mapped 56, inferred 0, derived 4; heights documented 1, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/102355 historic=fort Q2627611 416 m from ledger point
- island ring (28717 m2) cut out of sea-0
- origin moved 417 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":496,"medianInside":5.1,"medianOutside":10.5}
- sea-1: DEM check ok {"cells":564,"medianInside":5.6,"medianOutside":10.9}
- sea-2: DEM check ok {"cells":570,"medianInside":5.7,"medianOutside":6.9}
- sea-3: DEM check ok {"cells":570,"medianInside":5.7,"medianOutside":9.1}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.40528/18.35361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|coastal battery\|heritage site in Sweden; sitelinks=2; wikidata:Q10549534 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 56 elements); data/traces/kronudden-s-artillery-battery-q10549534.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
