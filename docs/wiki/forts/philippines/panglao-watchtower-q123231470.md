# Panglao watchtower

> Philippines · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `panglao-watchtower-q123231470` |
| Coordinates | 9.5779, 123.74491 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/9.5779/123.74491)) |
| Wikidata | [Q123231470](https://www.wikidata.org/wiki/Q123231470) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 90 elements (marker 2, road 22, building 64, coastline 1, water 1).

Evidence: documented 0, mapped 90, inferred 0, derived 1; heights documented 0, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":144,"medianInside":0.6,"medianOutside":7.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/9.5779/123.74491) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q123231470 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 90 elements); data/traces/panglao-watchtower-q123231470.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/philippines.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
