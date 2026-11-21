# Caponniere 8

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `caponniere-8-q41316571` |
| Coordinates | 48.39005, 9.99127 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.39005/9.99127)) |
| Wikidata | [Q41316571](https://www.wikidata.org/wiki/Q41316571) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage ensemble |
| Administrative area | Neu-Ulm |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.festung-ulm.de/ |

## What the model contains

Tier **T1**, status `location-only`, 363 elements (marker 12, road 851, water 2, waterway 8, building 347, zone 23, wall 40, retaining-wall 8).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 21, inferred 0, unknown 147.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9584658 historic=castle Q50709 1543 m from ledger point
- site is a site relation of 62 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4859 x 5351 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 347 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 851 mapped (trace size budget); minor lanes are not drawn
- 8281 DEM cells below -3 m (bathymetry) clamped to -3 m
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.39005/9.99127) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage ensemble; sitelinks=1; wikidata:Q41316571 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 363 elements); data/traces/caponniere-8-q41316571.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
