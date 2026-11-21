# Haraldsborg

> Denmark · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `haraldsborg-q10517983` |
| Coordinates | 55.65407, 12.0885 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.65407/12.0885)) |
| Wikidata | [Q10517983](https://www.wikidata.org/wiki/Q10517983) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Roskilde Municipality |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 348 elements (road 111, coastline 1, building 235, water 1).

Evidence: documented 0, mapped 348, inferred 0, derived 1; heights documented 12, inferred 0, unknown 223.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":37,"medianInside":3.3,"medianOutside":8.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.65407/12.0885) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=4; wikidata:Q10517983 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 348 elements); data/traces/haraldsborg-q10517983.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
