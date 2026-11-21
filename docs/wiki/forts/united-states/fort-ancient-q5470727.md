# Fort Ancient

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-ancient-q5470727` |
| Coordinates | 39.40778, -84.09025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.40778/-84.09025)) |
| Wikidata | [Q5470727](https://www.wikidata.org/wiki/Q5470727) (CC0) |
| Wikidata class | fortification |
| Types | park |
| Administrative area | Washington Township |
| Designations | part of UNESCO World Heritage Site\|National Register of Historic Places listed place\|National Historic Landmark |
| UNESCO WHC id | 1689-008 |
| Wikipedia language editions | 5 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 66 elements (outline 1, waterway 3, road 45, building 4, zone 3, wall 10).

Evidence: documented 0, mapped 66, inferred 0, derived 0; heights documented 2, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20703438 historic=archaeological_site Q34830542 422 m from ledger point
- origin moved 442 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.40778/-84.09025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; park; sitelinks=5; wikidata:Q5470727 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 66 elements); data/traces/fort-ancient-q5470727.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
