# Portsoy

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portsoy-q1010537` |
| Coordinates | 57.683, -2.688 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.683/-2.688)) |
| Wikidata | [Q1010537](https://www.wikidata.org/wiki/Q1010537) (CC0) |
| Wikidata class | fortification |
| Types | village\|small burgh |
| Administrative area | Aberdeenshire |
| Wikipedia language editions | 17 |

## What the model contains

Tier **T1**, status `location-only`, 305 elements (marker 1, road 77, building 215, coastline 1, zone 3, retaining-wall 4, waterway 1, water 3).

Evidence: documented 0, mapped 305, inferred 0, derived 3; heights documented 11, inferred 0, unknown 208.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":44,"medianInside":4,"medianOutside":16}
- sea-1: DEM check ok {"cells":1,"medianInside":7.4,"medianOutside":15.3}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":15.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.683/-2.688) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; village\|small burgh; sitelinks=17; wikidata:Q1010537 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 305 elements); data/traces/portsoy-q1010537.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
