# Hungerturm (Bad Langensalza)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hungerturm-bad-langensalza-q140078613` |
| Coordinates | 51.10614, 10.64637 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.10614/10.64637)) |
| Wikidata | [Q140078613](https://www.wikidata.org/wiki/Q140078613) (CC0) |
| Wikidata class | fortification |
| Types | city wall tower |
| Administrative area | Bad Langensalza |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 8, road 116, building 467, waterway 17, wall 10, water 1, retaining-wall 1, zone 1).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 2, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204324084 historic=castle Q2240669 351 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 467 mapped (trace size budget); the rest of the town is not drawn
- origin moved 348 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.10614/10.64637) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city wall tower; sitelinks=1; wikidata:Q140078613 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/hungerturm-bad-langensalza-q140078613.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
