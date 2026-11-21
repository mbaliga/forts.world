# Flank Casemate Bastion III Torgau

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flank-casemate-bastion-iii-torgau-q49595284` |
| Coordinates | 51.55478, 13.00222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.55478/13.00222)) |
| Wikidata | [Q49595284](https://www.wikidata.org/wiki/Q49595284) (CC0) |
| Wikidata class | fortification |
| Types | casemate |
| Administrative area | Torgau |
| Inception | 1811 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `website` | https://www.vesteburg.com/festung/fest_index.html |

## What the model contains

Tier **T1**, status `location-only`, 290 elements (marker 11, road 280, water 1, building 725, wall 91, retaining-wall 9, zone 31, waterway 7).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 16, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3089842 historic=fort Q14538492 648 m from ledger point
- site is a site relation of 43 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (3042 x 3079 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 725 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 280 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.55478/13.00222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; casemate; sitelinks=1; wikidata:Q49595284 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 290 elements); data/traces/flank-casemate-bastion-iii-torgau-q49595284.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
