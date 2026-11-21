# Monplaisir Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `monplaisir-palace-q16677741` |
| Coordinates | 59.8869, 29.91924 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.8869/29.91924)) |
| Wikidata | [Q16677741](https://www.wikidata.org/wiki/Q16677741) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Peterhof |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline-only`, 112 elements (outline 1, marker 1, road 76, water 4, building 4, retaining-wall 2, coastline 1, waterway 23).

Evidence: documented 0, mapped 112, inferred 0, derived 1; heights documented 1, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8837620 historic=castle Q16677741 11 m from ledger point
- origin moved 14 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":223,"medianInside":10,"medianOutside":14.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.8869/29.91924) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=9; wikidata:Q16677741 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 112 elements); data/traces/monplaisir-palace-q16677741.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
