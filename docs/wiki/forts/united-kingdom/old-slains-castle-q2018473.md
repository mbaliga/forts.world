# Old Slains Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-slains-castle-q2018473` |
| Coordinates | 57.3605, -1.91308 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.3605/-1.91308)) |
| Wikidata | [Q2018473](https://www.wikidata.org/wiki/Q2018473) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Aberdeenshire |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, coastline 12, road 3, building 3, wall 2, water 2).

Evidence: documented 0, mapped 23, inferred 0, derived 2; heights documented 3, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/387203792 historic=yes Q2018473 2 m from ledger point
- island ring (2123 m2) cut out of sea-0
- island ring (629 m2) cut out of sea-0
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":391,"medianInside":5.7,"medianOutside":3.5}
- sea-1: DEM check ok {"cells":254,"medianInside":3.3,"medianOutside":15.4}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.3605/-1.91308) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=5; wikidata:Q2018473 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 23 elements); data/traces/old-slains-castle-q2018473.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
