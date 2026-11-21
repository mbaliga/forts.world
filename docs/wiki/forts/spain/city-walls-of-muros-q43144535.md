# City walls of Muros

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-muros-q43144535` |
| Coordinates | 42.77347, -9.05637 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.77347/-9.05637)) |
| Wikidata | [Q43144535](https://www.wikidata.org/wiki/Q43144535) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|monument |
| Administrative area | Muros |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 204 elements (marker 4, coastline 6, road 88, building 102, zone 1, waterway 1, water 2).

Evidence: documented 0, mapped 204, inferred 0, derived 2; heights documented 48, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":11,"medianInside":4.8,"medianOutside":25.1}
- sea-1: DEM check ok {"cells":1,"medianInside":4.1,"medianOutside":24.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.77347/-9.05637) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|monument; sitelinks=1; wikidata:Q43144535 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 204 elements); data/traces/city-walls-of-muros-q43144535.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
