# Achilles Point

> New Zealand · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `achilles-point-q4673750` |
| Coordinates | -36.84401, 174.86413 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-36.84401/174.86413)) |
| Wikidata | [Q4673750](https://www.wikidata.org/wiki/Q4673750) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|pa\|point |
| Administrative area | Auckland Region |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 78 elements (marker 2, road 29, zone 6, cliff 1, building 38, coastline 1, water 1).

Evidence: documented 0, mapped 78, inferred 0, derived 1; heights documented 0, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":215,"medianInside":3.4,"medianOutside":23.8}
- 80 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-36.84401/174.86413) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|pa\|point; sitelinks=3; wikidata:Q4673750 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 78 elements); data/traces/achilles-point-q4673750.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
