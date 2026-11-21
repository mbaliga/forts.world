# Opole, zamek górny

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `opole-zamek-gorny-q30236725` |
| Coordinates | 50.66982, 17.92521 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.66982/17.92521)) |
| Wikidata | [Q30236725](https://www.wikidata.org/wiki/Q30236725) (CC0) |
| Wikidata class | castle |
| Types | tower\|castle |
| Administrative area | Opole |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, marker 8, road 201, building 276, retaining-wall 6, wall 15, zone 21, waterway 6, water 1).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 119, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/207016147 historic=yes Q439322 272 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 276 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 201 mapped (trace size budget); minor lanes are not drawn
- origin moved 273 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.66982/17.92521) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; tower\|castle; sitelinks=5; wikidata:Q30236725 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/opole-zamek-gorny-q30236725.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
