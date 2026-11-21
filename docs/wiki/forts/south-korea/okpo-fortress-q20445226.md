# Okpo Fortress

> South Korea · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `okpo-fortress-q20445226` |
| Coordinates | 34.89056, 128.69472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.89056/128.69472)) |
| Wikidata | [Q20445226](https://www.wikidata.org/wiki/Q20445226) (CC0) |
| Wikidata class | fort |
| Types | fortress\|historic site |
| Designations | Monuments in Gyeongsangnam-do |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 353 elements (road 41, zone 1, building 308, coastline 1, water 2).

Evidence: documented 0, mapped 353, inferred 0, derived 2; heights documented 305, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":13,"medianInside":3.4,"medianOutside":8.1}
- sea-1: DEM check ok {"cells":3,"medianInside":7.3,"medianOutside":8.1}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.89056/128.69472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|historic site; sitelinks=1; wikidata:Q20445226 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 353 elements); data/traces/okpo-fortress-q20445226.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
