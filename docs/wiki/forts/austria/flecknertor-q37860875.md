# Flecknertor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flecknertor-q37860875` |
| Coordinates | 48.0068, 15.16785 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.0068/15.16785)) |
| Wikidata | [Q37860875](https://www.wikidata.org/wiki/Q37860875) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Scheibbs |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 260 elements (outline 1, marker 2, road 128, building 92, waterway 7, zone 25, wall 5).

Evidence: documented 0, mapped 260, inferred 0, derived 0; heights documented 12, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/278067853 historic=castle Q58042470 429 m from ledger point
- origin moved 430 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.0068/15.16785) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q37860875 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/flecknertor-q37860875.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
