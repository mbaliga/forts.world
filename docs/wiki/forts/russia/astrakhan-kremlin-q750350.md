# Astrakhan Kremlin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `astrakhan-kremlin-q750350` |
| Coordinates | 46.3495, 48.03092 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.3495/48.03092)) |
| Wikidata | [Q750350](https://www.wikidata.org/wiki/Q750350) (CC0) |
| Wikidata class | fort |
| Types | museum\|kremlin\|historic site |
| Administrative area | Astrakhan |
| Inception | 1582 |
| Designations | Tentative World Heritage Site\|federal cultural heritage site in Russia |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 389 elements (outline 1, marker 9, waterway 2, road 392, building 389, zone 69, water 17, wall 20, retaining-wall 1).

Evidence: documented 0, mapped 389, inferred 0, derived 0; heights documented 9, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3776095 historic=castle Q750350 30 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 389 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 392 mapped (trace size budget); minor lanes are not drawn
- origin moved 31 m from the ledger point to the outline centroid
- 7773 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.3495/48.03092) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|kremlin\|historic site; sitelinks=13; wikidata:Q750350 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 389 elements); data/traces/astrakhan-kremlin-q750350.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
