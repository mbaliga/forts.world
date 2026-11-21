# Stäket redutt

> Sweden · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `staket-redutt-q10682845` |
| Coordinates | 59.3, 18.27806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.3/18.27806)) |
| Wikidata | [Q10682845](https://www.wikidata.org/wiki/Q10682845) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Nacka Municipality |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 40 elements (marker 1, road 17, zone 5, building 13, coastline 2, water 2).

Evidence: documented 0, mapped 40, inferred 0, derived 2; heights documented 2, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":314,"medianInside":13.4,"medianOutside":18.8}
- sea-1: DEM check failed {"cells":237,"medianInside":12.6,"medianOutside":17.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.3/18.27806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=2; wikidata:Q10682845 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 40 elements); data/traces/staket-redutt-q10682845.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
