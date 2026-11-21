# Canon Gate

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `canon-gate-q17528854` |
| Coordinates | 50.8351, -0.77968 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8351/-0.77968)) |
| Wikidata | [Q17528854](https://www.wikidata.org/wiki/Q17528854) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Chichester |
| Designations | Grade I listed building |
| Wikipedia language editions | 3 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 278 elements (outline 1, marker 6, road 141, building 327, wall 7, waterway 2, zone 1).

Evidence: documented 0, mapped 278, inferred 0, derived 0; heights documented 3, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/107291749 historic=monument Q5095990 160 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 327 mapped (trace size budget); the rest of the town is not drawn
- origin moved 161 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8351/-0.77968) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=3; wikidata:Q17528854 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 278 elements); data/traces/canon-gate-q17528854.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
