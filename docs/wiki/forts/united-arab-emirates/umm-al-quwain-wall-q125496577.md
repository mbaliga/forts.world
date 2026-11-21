# Umm Al Quwain Wall

> United Arab Emirates · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `umm-al-quwain-wall-q125496577` |
| Coordinates | 25.58594, 55.56514 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.58594/55.56514)) |
| Wikidata | [Q125496577](https://www.wikidata.org/wiki/Q125496577) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 65 elements (road 51, building 9, zone 2, coastline 2, water 1).

Evidence: documented 0, mapped 65, inferred 0, derived 1; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":12,"medianInside":7.7,"medianOutside":4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.58594/55.56514) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q125496577 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 65 elements); data/traces/umm-al-quwain-wall-q125496577.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-arab-emirates.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
