# Kokubuo Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kokubuo-castle-q99373503` |
| Coordinates | 36.20644, 133.31983 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.20644/133.31983)) |
| Wikidata | [Q99373503](https://www.wikidata.org/wiki/Q99373503) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin in Japan |
| Administrative area | Okinoshima |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 22 elements (waterway 1, road 5, coastline 1, building 15).

Evidence: documented 0, mapped 22, inferred 0, derived 0; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- 19 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.20644/133.31983) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin in Japan; sitelinks=1; wikidata:Q99373503 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 22 elements); data/traces/kokubuo-castle-q99373503.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
