# Motte Aldeberg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `motte-aldeberg-q1431681` |
| Coordinates | 51.1465, 6.19595 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1465/6.19595)) |
| Wikidata | [Q1431681](https://www.wikidata.org/wiki/Q1431681) (CC0) |
| Wikidata class | castle |
| Types | castle\|motte-and-bailey castle |
| Administrative area | Wegberg |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | motte |
| OSM `barrier` | earthworks |

## What the model contains

Tier **T1**, status `location-only`, 62 elements (marker 2, water 3, road 36, waterway 9, zone 6, building 6).

Evidence: documented 0, mapped 62, inferred 0, derived 0; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6945239 historic=archaeological_site Q1431681 32 m from ledger point
- site is a site relation of 9 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (153 x 155 m)
- origin moved 31 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1465/6.19595) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|motte-and-bailey castle; sitelinks=4; wikidata:Q1431681 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 53 elements); data/traces/motte-aldeberg-q1431681.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
