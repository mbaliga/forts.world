# Arco de la Cárcel

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arco-de-la-carcel-q109919968` |
| Coordinates | 42.02622, -3.76011 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.02622/-3.76011)) |
| Wikidata | [Q109919968](https://www.wikidata.org/wiki/Q109919968) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Lerma |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, marker 4, road 94, waterway 3, building 369, zone 1, wall 11, retaining-wall 10).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 95, inferred 0, unknown 46.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/375004621 historic=yes 246 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 369 mapped (trace size budget); the rest of the town is not drawn
- origin moved 245 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.02622/-3.76011) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q109919968 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 244 elements); data/traces/arco-de-la-carcel-q109919968.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
