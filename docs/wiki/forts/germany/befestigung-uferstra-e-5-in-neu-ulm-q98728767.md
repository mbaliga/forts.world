# Befestigung Uferstraße 5 in Neu-Ulm

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `befestigung-uferstra-e-5-in-neu-ulm-q98728767` |
| Coordinates | 48.39875, 10.00495 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.39875/10.00495)) |
| Wikidata | [Q98728767](https://www.wikidata.org/wiki/Q98728767) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Neu-Ulm |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.festung-ulm.de/ |

## What the model contains

Tier **T1**, status `location-only`, 367 elements (marker 25, road 1165, water 3, waterway 3, building 570, zone 16, wall 40, retaining-wall 10).

Evidence: documented 0, mapped 367, inferred 0, derived 0; heights documented 54, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9584658 historic=castle Q50709 1738 m from ledger point
- site is a site relation of 62 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4859 x 5351 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 570 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 1165 mapped (trace size budget); minor lanes are not drawn
- 1729 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.39875/10.00495) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q98728767 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 367 elements); data/traces/befestigung-uferstra-e-5-in-neu-ulm-q98728767.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
