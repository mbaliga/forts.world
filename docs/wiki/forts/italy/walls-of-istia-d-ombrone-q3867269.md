# walls of Istia d'Ombrone

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-istia-d-ombrone-q3867269` |
| Coordinates | 42.7825, 11.19123 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.7825/11.19123)) |
| Wikidata | [Q3867269](https://www.wikidata.org/wiki/Q3867269) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Grosseto |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `description` | Proposed hiking trail of the archaeological sites of the ancient Via Clodia. Problems. The current route does not pass through the Careias (Gaòeria) and Forum Clodii (San Liberato) mansiones as it has to cross private properties. |

## What the model contains

Tier **T1**, status `location-only`, 164 elements (marker 1, road 40, waterway 1, zone 2, building 385).

Evidence: documented 0, mapped 164, inferred 0, derived 0; heights documented 120, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13775511 historic=yes 2667 m from ledger point
- site is a route relation of 66 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (11167 x 11796 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 385 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.7825/11.19123) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3867269 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 164 elements); data/traces/walls-of-istia-d-ombrone-q3867269.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
