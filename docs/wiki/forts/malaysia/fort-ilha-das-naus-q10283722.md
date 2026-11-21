# Fort Ilha das Naus

> Malaysia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-ilha-das-naus-q10283722` |
| Coordinates | 2.18333, 102.25 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/2.18333/102.25)) |
| Wikidata | [Q10283722](https://www.wikidata.org/wiki/Q10283722) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Malacca |
| Designations | Heritage of Portuguese Influence |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 22 elements (road 11, coastline 2, building 5, wall 1, zone 1, water 2).

Evidence: documented 0, mapped 22, inferred 0, derived 2; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":318,"medianInside":-0.2,"medianOutside":1.7}
- sea-1: DEM check failed {"cells":176,"medianInside":0.9,"medianOutside":-0.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/2.18333/102.25) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q10283722 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 22 elements); data/traces/fort-ilha-das-naus-q10283722.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malaysia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
