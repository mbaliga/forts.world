# Millport

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `millport-q391948` |
| Coordinates | 55.75372, -4.92808 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.75372/-4.92808)) |
| Wikidata | [Q391948](https://www.wikidata.org/wiki/Q391948) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | North Ayrshire |
| Wikipedia language editions | 15 |

## What the model contains

Tier **T1**, status `location-only`, 192 elements (marker 1, road 47, building 105, zone 19, wall 15, water 3, retaining-wall 1, coastline 1).

Evidence: documented 0, mapped 192, inferred 0, derived 1; heights documented 3, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":89,"medianInside":5.3,"medianOutside":14.9}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.75372/-4.92808) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=15; wikidata:Q391948 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 192 elements); data/traces/millport-q391948.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
