# Fortifications in Pskov

> Russia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-in-pskov-q16682724` |
| Coordinates | 57.80472, 28.33361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.80472/28.33361)) |
| Wikidata | [Q16682724](https://www.wikidata.org/wiki/Q16682724) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Pskov |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |

## What the model contains

Tier **T1**, status `location-only`, 323 elements (marker 16, road 302, water 1, wall 13, zone 15, waterway 8, building 131).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 50, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11341106 historic=castle Q4382987 1669 m from ledger point
- site is a site relation of 110 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1679 x 2696 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 131 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 302 mapped (trace size budget); minor lanes are not drawn
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.80472/28.33361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q16682724 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 323 elements); data/traces/fortifications-in-pskov-q16682724.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
