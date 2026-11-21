# Geoje Jangmunpo Waeseong

> South Korea · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `geoje-jangmunpo-waeseong-q24000445` |
| Coordinates | 34.995, 128.66944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.995/128.66944)) |
| Wikidata | [Q24000445](https://www.wikidata.org/wiki/Q24000445) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle in Korea\|historic site |
| Administrative area | Jangmok-myeon |
| Designations | Gyeongsangnam-do cultural property |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 10 elements (coastline 2, road 2, zone 4, water 2).

Evidence: documented 0, mapped 10, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":2,"medianInside":14.6,"medianOutside":55.5}
- sea-1: DEM check failed {"cells":11,"medianInside":10.5,"medianOutside":56.1}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.995/128.66944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle in Korea\|historic site; sitelinks=1; wikidata:Q24000445 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 10 elements); data/traces/geoje-jangmunpo-waeseong-q24000445.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
