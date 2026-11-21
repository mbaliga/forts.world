# Gligo Castle

> Croatia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gligo-castle-q112110234` |
| Coordinates | 43.34981, 16.46333 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.34981/16.46333)) |
| Wikidata | [Q112110234](https://www.wikidata.org/wiki/Q112110234) (CC0) |
| Wikidata class | castle |
| Types | quadrangular castle |
| Administrative area | Milna |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 80 elements (road 10, building 60, zone 4, waterway 2, coastline 3, water 1).

Evidence: documented 0, mapped 80, inferred 0, derived 1; heights documented 0, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":50,"medianInside":0.1,"medianOutside":18.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.34981/16.46333) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; quadrangular castle; sitelinks=2; wikidata:Q112110234 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 80 elements); data/traces/gligo-castle-q112110234.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
