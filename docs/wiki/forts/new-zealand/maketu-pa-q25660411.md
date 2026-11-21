# Maketu Pa

> New Zealand · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maketu-pa-q25660411` |
| Coordinates | -38.076, 174.812 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-38.076/174.812)) |
| Wikidata | [Q25660411](https://www.wikidata.org/wiki/Q25660411) (CC0) |
| Wikidata class | fortification |
| Types | pā |
| Administrative area | Ōtorohanga District |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 26 elements (road 1, building 22, zone 1, coastline 1, water 1).

Evidence: documented 0, mapped 26, inferred 0, derived 1; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":108,"medianInside":3,"medianOutside":12.6}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-38.076/174.812) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; pā; sitelinks=1; wikidata:Q25660411 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 26 elements); data/traces/maketu-pa-q25660411.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
