# Manora Fort

> Pakistan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manora-fort-q18708384` |
| Coordinates | 24.789771, 66.979547 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/24.789771/66.979547)) |
| Wikidata | [Q18708384](https://www.wikidata.org/wiki/Q18708384) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Inception | 1797 |
| Wikipedia language editions | 0 |
| Programme catalogue | confidence medium, significance rank 3906; sources osm:n5664187589 |

## What the model contains

Tier **T1**, status `location-only`, 14 elements (marker 6, coastline 2, zone 1, road 2, wall 1, building 1, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":822,"medianInside":3.7,"medianOutside":19.3}
- 23 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/24.789771/66.979547) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=medium; rank=3906; sources=1 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 14 elements); data/traces/manora-fort-q18708384.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
