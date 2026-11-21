# Caponier 6 of Ulm Fortress

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `caponier-6-of-ulm-fortress-q69643044` |
| Coordinates | 48.38873, 9.99847 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.38873/9.99847)) |
| Wikidata | [Q69643044](https://www.wikidata.org/wiki/Q69643044) (CC0) |
| Wikidata class | fortification |
| Types | caponier\|defence work |
| Administrative area | Neu-Ulm |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.festung-ulm.de/ |

## What the model contains

Tier **T1**, status `location-only`, 322 elements (marker 1, road 888, building 355, waterway 3, water 2, zone 24, wall 22).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 10, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9584658 historic=castle Q50709 1952 m from ledger point
- site is a site relation of 62 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4860 x 5351 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 355 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 888 mapped (trace size budget); minor lanes are not drawn
- 3549 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.38873/9.99847) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; caponier\|defence work; sitelinks=1; wikidata:Q69643044 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 322 elements); data/traces/caponier-6-of-ulm-fortress-q69643044.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
