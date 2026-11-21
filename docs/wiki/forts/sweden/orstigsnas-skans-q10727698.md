# Örstigsnäs skans

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `orstigsnas-skans-q10727698` |
| Coordinates | 58.72582, 17.11498 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.72582/17.11498)) |
| Wikidata | [Q10727698](https://www.wikidata.org/wiki/Q10727698) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Nyköping Municipality |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, zone 1, road 6, coastline 2, water 3).

Evidence: documented 0, mapped 13, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/286269841 historic=fort 47 m from ledger point
- origin moved 38 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":10,"medianInside":7.7,"medianOutside":8.6}
- sea-1: DEM check ok {"cells":232,"medianInside":2.7,"medianOutside":10}
- sea-2: DEM check ok {"cells":22,"medianInside":6.2,"medianOutside":8.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.72582/17.11498) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=2; wikidata:Q10727698 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 13 elements); data/traces/orstigsnas-skans-q10727698.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
