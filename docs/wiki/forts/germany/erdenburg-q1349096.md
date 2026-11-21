# Erdenburg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `erdenburg-q1349096` |
| Coordinates | 50.9706, 7.17405 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9706/7.17405)) |
| Wikidata | [Q1349096](https://www.wikidata.org/wiki/Q1349096) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Bergisch Gladbach |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `barrier` | earthworks |

## What the model contains

Tier **T1**, status `location-only`, 72 elements (marker 3, road 28, water 3, waterway 12, building 6, zone 20).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6858129 historic=archaeological_site Q1349096 25 m from ledger point
- site is a site relation of 7 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (319 x 225 m)
- origin moved 26 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9706/7.17405) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=2; wikidata:Q1349096 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 72 elements); data/traces/erdenburg-q1349096.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
