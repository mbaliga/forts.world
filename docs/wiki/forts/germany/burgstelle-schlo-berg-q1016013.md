# Burgstelle Schloßberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burgstelle-schlo-berg-q1016013` |
| Coordinates | 48.61735, 9.44731 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.61735/9.44731)) |
| Wikidata | [Q1016013](https://www.wikidata.org/wiki/Q1016013) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Dettingen unter Teck |
| Wikipedia language editions | 1 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 196 elements (outline 1, road 70, zone 2, building 336, waterway 1, retaining-wall 2).

Evidence: documented 0, mapped 196, inferred 0, derived 0; heights documented 5, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/257171000 historic=building 365 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 336 mapped (trace size budget); the rest of the town is not drawn
- origin moved 366 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.61735/9.44731) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q1016013 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 196 elements); data/traces/burgstelle-schlo-berg-q1016013.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
