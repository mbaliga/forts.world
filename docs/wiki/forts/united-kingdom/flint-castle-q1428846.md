# Flint Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flint-castle-q1428846` |
| Coordinates | 53.2517, -3.12993 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.2517/-3.12993)) |
| Wikidata | [Q1428846](https://www.wikidata.org/wiki/Q1428846) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Flint |
| Inception | 1277 |
| Designations | National Monument of Wales\|Grade I listed building\|scheduled monument |
| Wikipedia language editions | 13 |

## What the model contains

Tier **T1**, status `location-only`, 200 elements (marker 1, road 65, building 127, wall 2, coastline 1, zone 3, water 1).

Evidence: documented 0, mapped 200, inferred 0, derived 1; heights documented 0, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":206,"medianInside":1.9,"medianOutside":7.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.2517/-3.12993) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=13; wikidata:Q1428846 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 200 elements); data/traces/flint-castle-q1428846.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
