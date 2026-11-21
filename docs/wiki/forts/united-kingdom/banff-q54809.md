# Banff

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `banff-q54809` |
| Coordinates | 57.667, -2.524 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.667/-2.524)) |
| Wikidata | [Q54809](https://www.wikidata.org/wiki/Q54809) (CC0) |
| Wikidata class | fortification |
| Types | town\|small burgh |
| Administrative area | Aberdeenshire |
| Wikipedia language editions | 32 |

## What the model contains

Tier **T1**, status `location-only`, 333 elements (marker 2, road 47, coastline 1, building 279, zone 3, water 1).

Evidence: documented 0, mapped 333, inferred 0, derived 1; heights documented 3, inferred 0, unknown 276.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":17,"medianInside":4.2,"medianOutside":24.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.667/-2.524) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; town\|small burgh; sitelinks=32; wikidata:Q54809 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 333 elements); data/traces/banff-q54809.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
