# Forte de São Bento da Ribeira Brava

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-bento-da-ribeira-brava-q10283957` |
| Coordinates | 32.66993, -17.06486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.66993/-17.06486)) |
| Wikidata | [Q10283957](https://www.wikidata.org/wiki/Q10283957) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Ribeira Brava |
| Designations | Pending classification monument |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 187 elements (outline 1, marker 2, road 92, building 69, waterway 6, wall 1, retaining-wall 7, cliff 1, zone 1, coastline 3, water 4).

Evidence: documented 0, mapped 187, inferred 0, derived 3; heights documented 8, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/493486253 historic=fort 5 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":2.2,"medianOutside":13.4}
- sea-1: DEM check ok {"cells":97,"medianInside":0,"medianOutside":16.1}
- sea-2: DEM check ok {"cells":24,"medianInside":0.2,"medianOutside":13.8}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.66993/-17.06486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=3; wikidata:Q10283957 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 187 elements); data/traces/forte-de-sao-bento-da-ribeira-brava-q10283957.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
