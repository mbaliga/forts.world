# Alte Burg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alte-burg-q435450` |
| Coordinates | 49.3661, 6.86663 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.3661/6.86663)) |
| Wikidata | [Q435450](https://www.wikidata.org/wiki/Q435450) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Saarwellingen |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `location-only`, 86 elements (marker 7, road 31, building 33, waterway 4, zone 11).

Evidence: documented 0, mapped 86, inferred 0, derived 0; heights documented 0, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1629004 historic=ruins Q154504 70671 m from ledger point
- site is a collection relation of 412 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (152318 x 201126 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.3661/6.86663) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=2; wikidata:Q435450 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 86 elements); data/traces/alte-burg-q435450.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
