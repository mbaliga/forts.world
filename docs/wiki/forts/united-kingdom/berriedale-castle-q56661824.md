# Berriedale Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `berriedale-castle-q56661824` |
| Coordinates | 58.18189, -3.49647 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.18189/-3.49647)) |
| Wikidata | [Q56661824](https://www.wikidata.org/wiki/Q56661824) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 27 elements (road 12, waterway 1, building 10, coastline 1, water 3).

Evidence: documented 0, mapped 27, inferred 0, derived 3; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":399,"medianInside":14.5,"medianOutside":17.5}
- sea-1: DEM check ok {"cells":237,"medianInside":7.8,"medianOutside":22.5}
- sea-2: DEM check failed {"cells":358,"medianInside":12.9,"medianOutside":18.3}
- 34 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.18189/-3.49647) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q56661824 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 27 elements); data/traces/berriedale-castle-q56661824.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
