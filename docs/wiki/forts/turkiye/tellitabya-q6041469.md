# Tellitabya

> Türkiye · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tellitabya-q6041469` |
| Coordinates | 41.18188, 29.07448 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.18188/29.07448)) |
| Wikidata | [Q6041469](https://www.wikidata.org/wiki/Q6041469) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Istanbul |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 35 elements (marker 1, road 26, coastline 1, building 3, zone 2, water 2).

Evidence: documented 0, mapped 35, inferred 0, derived 2; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":9,"medianInside":12,"medianOutside":8.8}
- sea-1: DEM check ok {"cells":143,"medianInside":0,"medianOutside":13.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.18188/29.07448) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=2; wikidata:Q6041469 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 35 elements); data/traces/tellitabya-q6041469.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
