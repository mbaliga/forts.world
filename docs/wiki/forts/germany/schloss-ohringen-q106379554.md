# Schloss Öhringen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-ohringen-q106379554` |
| Coordinates | 49.19995, 9.50278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.19995/9.50278)) |
| Wikidata | [Q106379554](https://www.wikidata.org/wiki/Q106379554) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Öhringen |
| Inception | 1616 |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 1, road 191, building 391, zone 4, waterway 15, wall 5).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 15, inferred 0, unknown 110.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/191199964 historic=castle Q106379554 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 391 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 191 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.19995/9.50278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=1; wikidata:Q106379554 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/schloss-ohringen-q106379554.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
