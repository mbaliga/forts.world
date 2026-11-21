# Schloss Schöckingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-schockingen-q2243432` |
| Coordinates | 48.84653, 9.03014 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.84653/9.03014)) |
| Wikidata | [Q2243432](https://www.wikidata.org/wiki/Q2243432) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Ditzingen |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 198 elements (outline 1, road 70, building 404, zone 7).

Evidence: documented 0, mapped 198, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/489814511 historic=castle Q2243432 28 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 404 mapped (trace size budget); the rest of the town is not drawn
- origin moved 24 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.84653/9.03014) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q2243432 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 198 elements); data/traces/schloss-schockingen-q2243432.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
