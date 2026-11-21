# Palais Rohan, Strasbourg

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-rohan-strasbourg-q1561438` |
| Coordinates | 48.58102, 7.75225 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.58102/7.75225)) |
| Wikidata | [Q1561438](https://www.wikidata.org/wiki/Q1561438) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|city palace |
| Administrative area | Strasbourg |
| Inception | 1742 |
| Designations | classified historical monument |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 323 elements (outline 1, marker 5, road 184, building 344, wall 39, water 4, waterway 2, zone 2).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 47, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/15806990 historic=castle Q1561438 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 184 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.58102/7.75225) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|city palace; sitelinks=14; wikidata:Q1561438 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 323 elements); data/traces/palais-rohan-strasbourg-q1561438.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
