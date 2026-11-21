# Villa Paus

> Norway · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `villa-paus-q19385165` |
| Coordinates | 59.90564, 10.69453 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.90564/10.69453)) |
| Wikidata | [Q19385165](https://www.wikidata.org/wiki/Q19385165) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|mansion |
| Administrative area | Oslo Municipality |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 245 elements (outline 1, road 79, building 157, coastline 1, zone 5, water 2).

Evidence: documented 0, mapped 245, inferred 0, derived 2; heights documented 11, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1031550762 historic=castle Q19385165 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":372,"medianInside":2.6,"medianOutside":5.4}
- sea-1: DEM check ok {"cells":179,"medianInside":0,"medianOutside":9.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.90564/10.69453) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|mansion; sitelinks=5; wikidata:Q19385165 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 245 elements); data/traces/villa-paus-q19385165.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
