# Samyanghwan Haejangseong Fortress

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `samyanghwan-haejangseong-fortress-q18605219` |
| Coordinates | 33.5275, 126.57583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.5275/126.57583)) |
| Wikidata | [Q18605219](https://www.wikidata.org/wiki/Q18605219) (CC0) |
| Wikidata class | fort |
| Types | fortress\|historic site |
| Designations | Monuments of Jeju Special Self-Governing Province |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, marker 1, road 18, waterway 1, coastline 1, building 14, water 2).

Evidence: documented 0, mapped 38, inferred 0, derived 2; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1498094933 historic=building 683 m from ledger point
- origin moved 683 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":89,"medianInside":1.1,"medianOutside":6.7}
- sea-1: DEM check failed {"cells":399,"medianInside":6,"medianOutside":1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.5275/126.57583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|historic site; sitelinks=1; wikidata:Q18605219 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 38 elements); data/traces/samyanghwan-haejangseong-fortress-q18605219.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
