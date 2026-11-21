# Voroshilovsky Battery

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `voroshilovsky-battery-q4126005` |
| Coordinates | 42.98187, 131.89051 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.98187/131.89051)) |
| Wikidata | [Q4126005](https://www.wikidata.org/wiki/Q4126005) (CC0) |
| Wikidata class | fortification |
| Types | museum\|artillery battery |
| Administrative area | Vladivostok |
| Inception | 1934 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, marker 1, coastline 2, road 22, building 8, zone 1, waterway 1, water 2).

Evidence: documented 0, mapped 38, inferred 0, derived 1; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101929577 historic=fort 23 m from ledger point
- origin moved 25 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":31,"medianInside":3.6,"medianOutside":30.5}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.98187/131.89051) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; museum\|artillery battery; sitelinks=2; wikidata:Q4126005 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 38 elements); data/traces/voroshilovsky-battery-q4126005.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
