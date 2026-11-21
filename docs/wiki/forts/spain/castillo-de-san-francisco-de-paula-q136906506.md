# Castillo de San Francisco de Paula

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castillo-de-san-francisco-de-paula-q136906506` |
| Coordinates | 36.7216, -2.19312 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.7216/-2.19312)) |
| Wikidata | [Q136906506](https://www.wikidata.org/wiki/Q136906506) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 40 elements (coastline 16, road 9, building 6, wall 6, water 3).

Evidence: documented 0, mapped 40, inferred 0, derived 3; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (1891 m2) cut out of sea-0
- sea-0: DEM check ok {"cells":276,"medianInside":0,"medianOutside":12.5}
- sea-1: DEM check ok {"cells":400,"medianInside":0,"medianOutside":7.3}
- sea-2: DEM check ok {"cells":400,"medianInside":0,"medianOutside":7.3}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.7216/-2.19312) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q136906506 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 40 elements); data/traces/castillo-de-san-francisco-de-paula-q136906506.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
