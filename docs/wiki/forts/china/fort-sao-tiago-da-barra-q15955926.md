# Fort São Tiago da Barra

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-sao-tiago-da-barra-q15955926` |
| Coordinates | 22.1825, 113.5307 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.1825/113.5307)) |
| Wikidata | [Q15955926](https://www.wikidata.org/wiki/Q15955926) (CC0) |
| Wikidata class | fort |
| Types | fortress\|fort |
| Administrative area | Macau |
| Wikipedia language editions | 5 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 248 elements (outline 1, road 101, water 5, building 126, zone 3, coastline 2, wall 6, cliff 3, retaining-wall 1).

Evidence: documented 0, mapped 248, inferred 0, derived 1; heights documented 86, inferred 0, unknown 47.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/206823679 historic=building 437 m from ledger point
- origin moved 437 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":114,"medianInside":-0.4,"medianOutside":6.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.1825/113.5307) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|fort; sitelinks=5; wikidata:Q15955926 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 248 elements); data/traces/fort-sao-tiago-da-barra-q15955926.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
