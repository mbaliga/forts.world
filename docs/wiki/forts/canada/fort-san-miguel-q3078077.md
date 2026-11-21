# Fort San Miguel

> Canada · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-san-miguel-q3078077` |
| Coordinates | 49.59163, -126.61546 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.59163/-126.61546)) |
| Wikidata | [Q3078077](https://www.wikidata.org/wiki/Q3078077) (CC0) |
| Wikidata class | fort |
| Types | fort\|destroyed building or structure |
| Administrative area | Yuquot |
| Inception | 1789 |
| Wikipedia language editions | 9 |

## What the model contains

Tier **T1**, status `location-only`, 28 elements (coastline 10, building 7, road 9, water 2).

Evidence: documented 0, mapped 28, inferred 0, derived 2; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (29425 m2) cut out of sea-1
- sea-0: DEM check failed {"cells":14,"medianInside":0.1,"medianOutside":0.1}
- sea-1: DEM check ok {"cells":232,"medianInside":0,"medianOutside":4.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.59163/-126.61546) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|destroyed building or structure; sitelinks=9; wikidata:Q3078077 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 28 elements); data/traces/fort-san-miguel-q3078077.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
