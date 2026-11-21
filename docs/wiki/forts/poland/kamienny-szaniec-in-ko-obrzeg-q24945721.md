# Kamienny Szaniec in Kołobrzeg

> Poland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kamienny-szaniec-in-ko-obrzeg-q24945721` |
| Coordinates | 54.18786, 15.59156 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.18786/15.59156)) |
| Wikidata | [Q24945721](https://www.wikidata.org/wiki/Q24945721) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Kołobrzeg |
| Inception | 1807 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 106 elements (road 46, building 25, zone 22, coastline 1, wall 11, water 1).

Evidence: documented 0, mapped 106, inferred 0, derived 1; heights documented 15, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":121,"medianInside":2.3,"medianOutside":6.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.18786/15.59156) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=2; wikidata:Q24945721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 106 elements); data/traces/kamienny-szaniec-in-ko-obrzeg-q24945721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
