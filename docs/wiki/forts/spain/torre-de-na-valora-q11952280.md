# Torre de Na Valora

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-na-valora-q11952280` |
| Coordinates | 38.70056, -0.47412 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.70056/-0.47412)) |
| Wikidata | [Q11952280](https://www.wikidata.org/wiki/Q11952280) (CC0) |
| Wikidata class | fortification |
| Types | defensive tower |
| Administrative area | Alcoy |
| Wikipedia language editions | 3 |
| OSM `historic` | monastery |

## What the model contains

Tier **T1**, status `outline+walls`, 298 elements (outline 1, marker 3, road 138, building 296, water 1, wall 30, retaining-wall 2, waterway 3).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 4, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1066434459 historic=monastery Q5912875 186 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 296 mapped (trace size budget); the rest of the town is not drawn
- origin moved 186 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.70056/-0.47412) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive tower; sitelinks=3; wikidata:Q11952280 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 298 elements); data/traces/torre-de-na-valora-q11952280.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
