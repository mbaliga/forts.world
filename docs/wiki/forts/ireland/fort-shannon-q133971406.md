# Fort Shannon

> Ireland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-shannon-q133971406` |
| Coordinates | 52.5837, -9.4348 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.5837/-9.4348)) |
| Wikidata | [Q133971406](https://www.wikidata.org/wiki/Q133971406) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 3 elements (coastline 2, water 1).

Evidence: documented 0, mapped 3, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":181,"medianInside":4.3,"medianOutside":11.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.5837/-9.4348) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q133971406 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 3 elements); data/traces/fort-shannon-q133971406.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
