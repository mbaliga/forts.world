# Castell Bach, Cwm Tydi

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-bach-cwm-tydi-q13126884` |
| Coordinates | 52.19624, -4.40108 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.19624/-4.40108)) |
| Wikidata | [Q13126884](https://www.wikidata.org/wiki/Q13126884) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|promontory fort |
| Administrative area | Ceredigion |
| Designations | scheduled monument |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 20 elements (marker 1, coastline 1, road 10, waterway 1, zone 5, water 2).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":155,"medianInside":7,"medianOutside":26.8}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.19624/-4.40108) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|promontory fort; sitelinks=1; wikidata:Q13126884 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 20 elements); data/traces/castell-bach-cwm-tydi-q13126884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
