# Qawra Tower

> Malta · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `qawra-tower-q7267204` |
| Coordinates | 35.95917, 14.42444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.95917/14.42444)) |
| Wikidata | [Q7267204](https://www.wikidata.org/wiki/Q7267204) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | St. Paul's Bay |
| Inception | 1638 |
| Wikipedia language editions | 7 |

## What the model contains

Tier **T1**, status `location-only`, 59 elements (road 40, building 6, water 3, coastline 1, wall 7, zone 2).

Evidence: documented 0, mapped 59, inferred 0, derived 2; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":30,"medianInside":0,"medianOutside":4}
- sea-1: DEM check ok {"cells":135,"medianInside":0,"medianOutside":7.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.95917/14.42444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=7; wikidata:Q7267204 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 59 elements); data/traces/qawra-tower-q7267204.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
