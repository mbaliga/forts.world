# Għajn Ħadid Tower

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `g-ajn-adid-tower-q1331006` |
| Coordinates | 35.96778, 14.385 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.96778/14.385)) |
| Wikidata | [Q1331006](https://www.wikidata.org/wiki/Q1331006) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Mellieħa |
| Inception | 1658 |
| Wikipedia language editions | 9 |
| OSM `historic` | ruins |
| OSM `description` | De Redin Tower |

## What the model contains

Tier **T1**, status `outline+walls`, 13 elements (outline 1, road 3, cliff 1, coastline 1, wall 2, zone 2, building 1, water 2).

Evidence: documented 0, mapped 13, inferred 0, derived 2; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/406046390 historic=ruins 8 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":47,"medianInside":0.6,"medianOutside":25.6}
- sea-1: DEM check ok {"cells":177,"medianInside":0.5,"medianOutside":29.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.96778/14.385) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=9; wikidata:Q1331006 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 13 elements); data/traces/g-ajn-adid-tower-q1331006.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
