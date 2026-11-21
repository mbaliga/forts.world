# Bangsbo Fort

> Denmark · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bangsbo-fort-q11328373` |
| Coordinates | 57.4086, 10.5159 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.4086/10.5159)) |
| Wikidata | [Q11328373](https://www.wikidata.org/wiki/Q11328373) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Frederikshavn Municipality |
| Inception | 1940 |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 41 elements (road 20, zone 9, coastline 1, building 11).

Evidence: documented 0, mapped 41, inferred 0, derived 0; heights documented 2, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.4086/10.5159) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=5; wikidata:Q11328373 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 41 elements); data/traces/bangsbo-fort-q11328373.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
