# Forte de Nossa Senhora da Guia

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-nossa-senhora-da-guia-q10283698` |
| Coordinates | 37.00786, -8.92597 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.00786/-8.92597)) |
| Wikidata | [Q10283698](https://www.wikidata.org/wiki/Q10283698) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Sagres |
| Designations | heritage without legal protection |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 39 elements (marker 1, cliff 2, road 24, building 4, zone 1, wall 2, coastline 2, water 3).

Evidence: documented 0, mapped 39, inferred 0, derived 3; heights documented 1, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":189,"medianInside":0,"medianOutside":8.2}
- sea-1: DEM check failed {"cells":3,"medianInside":0,"medianOutside":0}
- sea-2: DEM check failed {"cells":6,"medianInside":2,"medianOutside":0}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.00786/-8.92597) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=2; wikidata:Q10283698 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 39 elements); data/traces/forte-de-nossa-senhora-da-guia-q10283698.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
