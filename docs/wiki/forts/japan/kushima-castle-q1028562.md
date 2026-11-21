# Kushima Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kushima-castle-q1028562` |
| Coordinates | 32.89694, 129.95778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.89694/129.95778)) |
| Wikidata | [Q1028562](https://www.wikidata.org/wiki/Q1028562) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Ōmura-shi |
| Inception | 1599 |
| Wikipedia language editions | 8 |

## What the model contains

Tier **T1**, status `location-only`, 225 elements (marker 16, waterway 2, road 88, coastline 3, retaining-wall 19, building 80, wall 9, zone 5, water 3).

Evidence: documented 0, mapped 225, inferred 0, derived 2; heights documented 0, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":15,"medianInside":3.7,"medianOutside":5.2}
- sea-1: DEM check ok {"cells":12,"medianInside":-0.2,"medianOutside":5.3}
- 15 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.89694/129.95778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=8; wikidata:Q1028562 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 225 elements); data/traces/kushima-castle-q1028562.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
