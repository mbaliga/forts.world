# Ferretti Battery

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ferretti-battery-q20639095` |
| Coordinates | 35.8325, 14.53389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.8325/14.53389)) |
| Wikidata | [Q20639095](https://www.wikidata.org/wiki/Q20639095) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Birżebbuġa |
| Inception | 1715 |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 120 elements (outline 1, marker 2, road 40, building 21, zone 9, wall 44, coastline 1, water 2).

Evidence: documented 0, mapped 120, inferred 0, derived 2; heights documented 0, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/54637251 historic=archaeological_site Q2004454 404 m from ledger point
- origin moved 408 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":484,"medianInside":9.3,"medianOutside":null}
- sea-1: DEM check ok {"cells":85,"medianInside":1.5,"medianOutside":10.5}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.8325/14.53389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=4; wikidata:Q20639095 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 120 elements); data/traces/ferretti-battery-q20639095.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
