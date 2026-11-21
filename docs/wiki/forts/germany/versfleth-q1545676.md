# Versfleth

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `versfleth-q1545676` |
| Coordinates | 53.1847, 8.54139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.1847/8.54139)) |
| Wikidata | [Q1545676](https://www.wikidata.org/wiki/Q1545676) (CC0) |
| Wikidata class | castle |
| Types | castle\|abandoned village |
| Administrative area | Berne |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 21 elements (building 3, road 9, zone 3, water 3, coastline 2, waterway 1).

Evidence: documented 0, mapped 21, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":105,"medianInside":-2,"medianOutside":4.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.1847/8.54139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|abandoned village; sitelinks=1; wikidata:Q1545676 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 21 elements); data/traces/versfleth-q1545676.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
