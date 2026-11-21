# Hōyo Fortress

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hoyo-fortress-q11633283` |
| Coordinates | 33.27655, 131.95417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.27655/131.95417)) |
| Wikidata | [Q11633283](https://www.wikidata.org/wiki/Q11633283) (CC0) |
| Wikidata class | fort |
| Types | fort\|yes |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 16 elements (marker 1, coastline 7, building 1, road 3, water 4).

Evidence: documented 0, mapped 16, inferred 0, derived 4; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":4,"medianInside":19.8,"medianOutside":69.9}
- sea-1: DEM check failed {"cells":5,"medianInside":13,"medianOutside":70.3}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":69.9}
- sea-3: DEM check failed {"cells":3,"medianInside":12.9,"medianOutside":69.9}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.27655/131.95417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|yes; sitelinks=2; wikidata:Q11633283 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 16 elements); data/traces/hoyo-fortress-q11633283.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
