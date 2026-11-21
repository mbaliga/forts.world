# San Judas Redoubt

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-judas-redoubt-q30905582` |
| Coordinates | 36.44321, -6.18459 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.44321/-6.18459)) |
| Wikidata | [Q30905582](https://www.wikidata.org/wiki/Q30905582) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Andalusia |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 11 elements (coastline 1, waterway 1, road 6, building 1, water 2).

Evidence: documented 0, mapped 11, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":126,"medianInside":0,"medianOutside":1.8}
- sea-1: DEM check failed {"cells":391,"medianInside":1.5,"medianOutside":1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.44321/-6.18459) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q30905582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 11 elements); data/traces/san-judas-redoubt-q30905582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
