# St. David's Battery

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-david-s-battery-q7587704` |
| Coordinates | 32.36825, -64.64894 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.36825/-64.64894)) |
| Wikidata | [Q7587704](https://www.wikidata.org/wiki/Q7587704) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Bermuda |
| Inception | 1910 |
| Designations | part of UNESCO World Heritage Site |
| UNESCO WHC id | 983-006 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 47 elements (outline 1, marker 5, coastline 1, road 13, building 22, zone 3, water 2).

Evidence: documented 0, mapped 47, inferred 0, derived 1; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/181381778 historic=fort Q7587704 36 m from ledger point
- origin moved 36 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":280,"medianInside":2.4,"medianOutside":22.9}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.36825/-64.64894) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q7587704 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 47 elements); data/traces/st-david-s-battery-q7587704.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
