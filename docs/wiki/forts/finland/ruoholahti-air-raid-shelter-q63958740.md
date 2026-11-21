# Ruoholahti air-raid shelter

> Finland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ruoholahti-air-raid-shelter-q63958740` |
| Coordinates | 60.16366, 24.91079 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.16366/24.91079)) |
| Wikidata | [Q63958740](https://www.wikidata.org/wiki/Q63958740) (CC0) |
| Wikidata class | fortification |
| Types | air-raid shelter\|tunnel |
| Administrative area | Helsinki |
| Inception | 1978 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 236 elements (road 465, building 50, waterway 1, wall 10, retaining-wall 11, zone 10, cliff 3, coastline 1).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 36, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- roads capped: kept the 150 longest of 465 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.16366/24.91079) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; air-raid shelter\|tunnel; sitelinks=2; wikidata:Q63958740 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 236 elements); data/traces/ruoholahti-air-raid-shelter-q63958740.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
