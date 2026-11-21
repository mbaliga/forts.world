# Sakiyama Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sakiyama-castle-q11477118` |
| Coordinates | 37.30031, 137.15194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.30031/137.15194)) |
| Wikidata | [Q11477118](https://www.wikidata.org/wiki/Q11477118) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|destroyed building or structure |
| Administrative area | Noto |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 228 elements (zone 1, road 19, coastline 1, cliff 2, retaining-wall 1, building 202, water 2).

Evidence: documented 0, mapped 228, inferred 0, derived 2; heights documented 0, inferred 0, unknown 203.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":28,"medianInside":1.3,"medianOutside":6.6}
- sea-1: DEM check ok {"cells":44,"medianInside":1.2,"medianOutside":7.2}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.30031/137.15194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|destroyed building or structure; sitelinks=1; wikidata:Q11477118 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 228 elements); data/traces/sakiyama-castle-q11477118.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
