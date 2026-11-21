# Straßenstation Rheinberg

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stra-enstation-rheinberg-q140935209` |
| Coordinates | 51.53917, 6.58972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.53917/6.58972)) |
| Wikidata | [Q140935209](https://www.wikidata.org/wiki/Q140935209) (CC0) |
| Wikidata class | fort |
| Types | Roman military frontiers and fortifications |
| Administrative area | Rheinberg |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `location-only`, 301 elements (road 178, waterway 3, building 737, zone 20, water 5, wall 3).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 2, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3987866 historic=archaeological_site Q638683 19210 m from ledger point
- site is a site relation of 200 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (28597 x 18884 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 737 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 178 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.53917/6.58972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; Roman military frontiers and fortifications; sitelinks=1; wikidata:Q140935209 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 301 elements); data/traces/stra-enstation-rheinberg-q140935209.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
