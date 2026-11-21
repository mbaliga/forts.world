# Cihou Fort

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cihou-fort-q57397` |
| Coordinates | 22.61306, 120.26417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.61306/120.26417)) |
| Wikidata | [Q57397](https://www.wikidata.org/wiki/Q57397) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Cijin District |
| Inception | 1720 |
| Designations | county-level monument\|country-level monument |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 56 elements (outline 1, coastline 4, road 42, water 4, building 4, zone 1).

Evidence: documented 0, mapped 56, inferred 0, derived 3; heights documented 1, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28526249 historic=fort Q57397 15 m from ledger point
- origin moved 23 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":19,"medianInside":4.9,"medianOutside":7.7}
- sea-1: DEM check ok {"cells":101,"medianInside":5.8,"medianOutside":8.2}
- sea-2: DEM check ok {"cells":19,"medianInside":3.6,"medianOutside":7.7}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.61306/120.26417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=7; wikidata:Q57397 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 56 elements); data/traces/cihou-fort-q57397.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
