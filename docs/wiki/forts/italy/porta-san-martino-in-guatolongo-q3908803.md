# Porta San Martino in Guatolongo

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-san-martino-in-guatolongo-q3908803` |
| Coordinates | 43.71036, 10.40332 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.71036/10.40332)) |
| Wikidata | [Q3908803](https://www.wikidata.org/wiki/Q3908803) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Pisa |
| Inception | 1243 |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 356 elements (marker 4, road 263, water 1, building 220, wall 61, waterway 5, zone 15).

Evidence: documented 0, mapped 356, inferred 0, derived 0; heights documented 56, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6793678 historic=citywalls Q3678366 345 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (127 x 257 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 220 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 263 mapped (trace size budget); minor lanes are not drawn
- origin moved 335 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.71036/10.40332) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q3908803 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 356 elements); data/traces/porta-san-martino-in-guatolongo-q3908803.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
