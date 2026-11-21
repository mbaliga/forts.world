# Stadtbefestigung

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-q41292422` |
| Coordinates | 49.64433, 9.21987 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.64433/9.21987)) |
| Wikidata | [Q41292422](https://www.wikidata.org/wiki/Q41292422) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Amorbach |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://fuerst-leiningen.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 7, road 148, water 3, building 421, waterway 2, zone 18, wall 6, retaining-wall 4).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 0, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2177879 historic=castle Q1349149 173 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 421 mapped (trace size budget); the rest of the town is not drawn
- origin moved 173 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.64433/9.21987) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q41292422 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/stadtbefestigung-q41292422.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
