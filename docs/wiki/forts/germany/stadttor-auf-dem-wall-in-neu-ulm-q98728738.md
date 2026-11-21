# Stadttor Auf dem Wall in Neu-Ulm

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-auf-dem-wall-in-neu-ulm-q98728738` |
| Coordinates | 48.39189, 9.98939 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.39189/9.98939)) |
| Wikidata | [Q98728738](https://www.wikidata.org/wiki/Q98728738) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Neu-Ulm |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.festung-ulm.de/ |

## What the model contains

Tier **T1**, status `location-only`, 394 elements (marker 4, road 983, water 3, waterway 15, building 428, wall 48, zone 47, retaining-wall 7).

Evidence: documented 0, mapped 394, inferred 0, derived 0; heights documented 21, inferred 0, unknown 154.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9584658 historic=castle Q50709 1298 m from ledger point
- site is a site relation of 62 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4859 x 5351 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 428 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 983 mapped (trace size budget); minor lanes are not drawn
- 8281 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.39189/9.98939) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q98728738 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 394 elements); data/traces/stadttor-auf-dem-wall-in-neu-ulm-q98728738.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
