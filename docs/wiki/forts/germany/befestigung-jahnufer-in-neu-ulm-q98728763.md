# Befestigung Jahnufer in Neu-Ulm

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `befestigung-jahnufer-in-neu-ulm-q98728763` |
| Coordinates | 48.39222, 9.98858 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.39222/9.98858)) |
| Wikidata | [Q98728763](https://www.wikidata.org/wiki/Q98728763) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Neu-Ulm |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.festung-ulm.de/ |

## What the model contains

Tier **T1**, status `location-only`, 275 elements (marker 8, road 1018, water 2, waterway 16, building 506, wall 48, zone 52, retaining-wall 9).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 6, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9584658 historic=castle Q50709 1241 m from ledger point
- site is a site relation of 62 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4859 x 5351 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 506 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 1018 mapped (trace size budget); minor lanes are not drawn
- 8281 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.39222/9.98858) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q98728763 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 275 elements); data/traces/befestigung-jahnufer-in-neu-ulm-q98728763.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
