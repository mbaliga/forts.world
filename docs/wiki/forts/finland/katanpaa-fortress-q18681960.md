# Katanpää Fortress

> Finland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `katanpaa-fortress-q18681960` |
| Coordinates | 60.61222, 21.17167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.61222/21.17167)) |
| Wikidata | [Q18681960](https://www.wikidata.org/wiki/Q18681960) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Kustavi |
| Designations | Cultural Heritage Site of National Significance |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 20 elements (coastline 1, road 5, building 10, zone 1, water 3).

Evidence: documented 0, mapped 20, inferred 0, derived 3; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":27,"medianInside":1,"medianOutside":7.3}
- sea-1: DEM check ok {"cells":400,"medianInside":6.5,"medianOutside":9}
- sea-2: DEM check ok {"cells":13,"medianInside":1.5,"medianOutside":6.9}
- 14 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.61222/21.17167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q18681960 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 20 elements); data/traces/katanpaa-fortress-q18681960.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
