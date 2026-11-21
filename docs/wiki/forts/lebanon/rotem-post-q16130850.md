# Rotem post

> Lebanon · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rotem-post-q16130850` |
| Coordinates | 33.16322, 35.17597 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.16322/35.17597)) |
| Wikidata | [Q16130850](https://www.wikidata.org/wiki/Q16130850) (CC0) |
| Wikidata class | fortification |
| Types | outpost |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 29 elements (road 16, coastline 1, building 11, water 1).

Evidence: documented 0, mapped 29, inferred 0, derived 1; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":66,"medianInside":26.5,"medianOutside":81.9}
- 32 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.16322/35.17597) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; outpost; sitelinks=2; wikidata:Q16130850 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 29 elements); data/traces/rotem-post-q16130850.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/lebanon.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
