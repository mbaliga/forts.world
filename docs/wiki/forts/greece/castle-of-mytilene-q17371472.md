# Castle of Mytilene

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-mytilene-q17371472` |
| Coordinates | 39.11195, 26.56209 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.11195/26.56209)) |
| Wikidata | [Q17371472](https://www.wikidata.org/wiki/Q17371472) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Mytilene Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 349 elements (outline 1, marker 5, road 317, coastline 21, retaining-wall 122, wall 156, building 285, zone 114, cliff 16, waterway 1, water 2).

Evidence: documented 0, mapped 349, inferred 0, derived 1; heights documented 13, inferred 0, unknown 206.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/254803957 historic=castle Q17371472 38 m from ledger point
- pruned to the outline plus 60 m: 1040 -> 478 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 54 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 145 mapped (trace size budget); minor lanes are not drawn
- origin moved 45 m from the ledger point to the outline centroid
- sea-1: DEM check ok {"cells":1337,"medianInside":0,"medianOutside":22.6}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.11195/26.56209) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q17371472 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 349 elements); data/traces/castle-of-mytilene-q17371472.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
