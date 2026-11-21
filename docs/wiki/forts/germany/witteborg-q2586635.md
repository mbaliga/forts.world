# Witteborg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `witteborg-q2586635` |
| Coordinates | 53.20378, 8.52011 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.20378/8.52011)) |
| Wikidata | [Q2586635](https://www.wikidata.org/wiki/Q2586635) (CC0) |
| Wikidata class | castle |
| Types | castle\|abandoned village |
| Administrative area | Blumenthal |
| Inception | 1220 |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 97 elements (road 34, water 2, coastline 1, waterway 6, building 50, zone 4).

Evidence: documented 0, mapped 97, inferred 0, derived 0; heights documented 23, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.20378/8.52011) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|abandoned village; sitelinks=1; wikidata:Q2586635 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 97 elements); data/traces/witteborg-q2586635.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
