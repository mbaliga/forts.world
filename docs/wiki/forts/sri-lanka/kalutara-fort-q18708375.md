# Kalutara Fort

> Sri Lanka · Kalutara · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kalutara-fort-q18708375` |
| Coordinates | 6.58707, 79.960175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/6.58707/79.960175)) |
| Wikidata | [Q18708375](https://www.wikidata.org/wiki/Q18708375) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kalutara |
| Inception | 1622 |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 5 |
| Programme catalogue | confidence medium, significance rank 3311; sources wikidata:Q18708375 |

## What the model contains

Tier **T1**, status `location-only`, 76 elements (marker 1, road 8, coastline 1, waterway 2, building 64).

Evidence: documented 0, mapped 76, inferred 0, derived 0; heights documented 6, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- 23 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/6.58707/79.960175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=3311; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 76 elements); data/traces/kalutara-fort-q18708375.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sri-lanka.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
