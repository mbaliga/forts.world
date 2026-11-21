# Watchtower of Plimmyri

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `watchtower-of-plimmyri-q108731139` |
| Coordinates | 35.92926, 27.86048 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.92926/27.86048)) |
| Wikidata | [Q108731139](https://www.wikidata.org/wiki/Q108731139) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Rodos Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 14 elements (marker 1, coastline 1, road 4, wall 1, building 3, cliff 1, water 3).

Evidence: documented 0, mapped 14, inferred 0, derived 3; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":6,"medianInside":0,"medianOutside":16.6}
- sea-1: DEM check ok {"cells":24,"medianInside":0.1,"medianOutside":17.1}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":16.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.92926/27.86048) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q108731139 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 14 elements); data/traces/watchtower-of-plimmyri-q108731139.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
