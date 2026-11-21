# Kozachyi Island

> Ukraine · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kozachyi-island-q2646340` |
| Coordinates | 46.57222, 31.55972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.57222/31.55972)) |
| Wikidata | [Q2646340](https://www.wikidata.org/wiki/Q2646340) (CC0) |
| Wikidata class | fort |
| Types | artificial island\|fortress island |
| Administrative area | Ochakiv |
| Wikipedia language editions | 10 |

## What the model contains

Tier **T1**, status `location-only`, 30 elements (coastline 4, building 16, road 7, wall 1, water 2).

Evidence: documented 0, mapped 30, inferred 0, derived 2; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":147,"medianInside":0.4,"medianOutside":1.6}
- sea-1: DEM check ok {"cells":115,"medianInside":1,"medianOutside":1.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.57222/31.55972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; artificial island\|fortress island; sitelinks=10; wikidata:Q2646340 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 30 elements); data/traces/kozachyi-island-q2646340.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
