# Dùn Èistean

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-eistean-q3776514` |
| Coordinates | 58.50333, -6.23224 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.50333/-6.23224)) |
| Wikidata | [Q3776514](https://www.wikidata.org/wiki/Q3776514) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|contour fort |
| Administrative area | Outer Hebrides |
| Designations | scheduled monument |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 37 elements (outline 1, road 4, coastline 15, zone 14, waterway 1, water 2).

Evidence: documented 0, mapped 37, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1117857296 historic=fort Q3776514 12 m from ledger point
- island ring (3096 m2) cut out of sea-0
- island ring (4148 m2) cut out of sea-0
- island ring (551 m2) cut out of sea-0
- island ring (10615 m2) cut out of sea-0
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":394,"medianInside":3.4,"medianOutside":4.3}
- sea-1: DEM check ok {"cells":321,"medianInside":2.9,"medianOutside":9.7}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.50333/-6.23224) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|contour fort; sitelinks=6; wikidata:Q3776514 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 37 elements); data/traces/dun-eistean-q3776514.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
