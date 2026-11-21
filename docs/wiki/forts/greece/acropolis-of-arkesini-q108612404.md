# Acropolis of Arkesini

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `acropolis-of-arkesini-q108612404` |
| Coordinates | 36.80978, 25.81747 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.80978/25.81747)) |
| Wikidata | [Q108612404](https://www.wikidata.org/wiki/Q108612404) (CC0) |
| Wikidata class | fortification |
| Types | acropolis |
| Administrative area | Amorgos Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 8 elements (marker 1, coastline 1, road 4, water 2).

Evidence: documented 0, mapped 8, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":24,"medianInside":0.1,"medianOutside":46.3}
- sea-1: DEM check ok {"cells":4,"medianInside":4.9,"medianOutside":43.3}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.80978/25.81747) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; acropolis; sitelinks=1; wikidata:Q108612404 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 8 elements); data/traces/acropolis-of-arkesini-q108612404.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
