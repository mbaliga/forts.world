# Crivelli Redoubt

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `crivelli-redoubt-q20638991` |
| Coordinates | 35.98908, 14.35808 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.98908/14.35808)) |
| Wikidata | [Q20638991](https://www.wikidata.org/wiki/Q20638991) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Mellieħa |
| Inception | 1715 |
| Wikipedia language editions | 3 |
| OSM `historic` | fortification |
| OSM `fortification_type` | battery |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, road 61, building 232, coastline 1, wall 10, zone 2, water 5).

Evidence: documented 0, mapped 312, inferred 0, derived 2; heights documented 0, inferred 0, unknown 242.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/406035636 historic=fortification Q21483147 419 m from ledger point
- origin moved 418 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":4.1}
- sea-1: DEM check ok {"cells":94,"medianInside":0,"medianOutside":5.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.98908/14.35808) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=3; wikidata:Q20638991 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/crivelli-redoubt-q20638991.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
