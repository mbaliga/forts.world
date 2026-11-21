# Harbour Battery

> Australia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `harbour-battery-q135645692` |
| Coordinates | -32.05584, 115.73244 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-32.05584/115.73244)) |
| Wikidata | [Q135645692](https://www.wikidata.org/wiki/Q135645692) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Fremantle Ports |
| Inception | 1942 |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `fortification_type` | battery |

## What the model contains

Tier **T1**, status `location-only`, 17 elements (coastline 3, road 3, building 5, waterway 1, water 2, zone 3).

Evidence: documented 0, mapped 17, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19428272 historic=ruins Q135645692 1 m from ledger point
- site is a site relation of 3 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (16 x 17 m)
- sea-0: DEM check ok {"cells":220,"medianInside":0,"medianOutside":0.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-32.05584/115.73244) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=1; wikidata:Q135645692 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 17 elements); data/traces/harbour-battery-q135645692.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/australia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
