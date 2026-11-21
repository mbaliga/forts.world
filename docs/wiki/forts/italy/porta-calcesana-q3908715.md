# Porta Calcesana

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-calcesana-q3908715` |
| Coordinates | 43.71537, 10.41171 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.71537/10.41171)) |
| Wikidata | [Q3908715](https://www.wikidata.org/wiki/Q3908715) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Pisa |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 339 elements (marker 3, road 206, water 1, wall 49, waterway 5, building 163, zone 11).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 55, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6793678 historic=citywalls Q3678366 551 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (127 x 257 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 163 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 206 mapped (trace size budget); minor lanes are not drawn
- origin moved 551 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.71537/10.41171) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q3908715 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 339 elements); data/traces/porta-calcesana-q3908715.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
