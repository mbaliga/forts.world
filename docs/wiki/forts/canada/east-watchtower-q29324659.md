# east watchtower

> Canada · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `east-watchtower-q29324659` |
| Coordinates | 48.6375, -68.16944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.6375/-68.16944)) |
| Wikidata | [Q29324659](https://www.wikidata.org/wiki/Q29324659) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Sainte-Flavie |
| Inception | 1940 |
| Designations | recognized heritage immovable\|part of a Quebec heritage property |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 40 elements (road 12, coastline 1, waterway 5, building 21, water 1).

Evidence: documented 0, mapped 40, inferred 0, derived 1; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":90,"medianInside":2,"medianOutside":9.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.6375/-68.16944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q29324659 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 40 elements); data/traces/east-watchtower-q29324659.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
