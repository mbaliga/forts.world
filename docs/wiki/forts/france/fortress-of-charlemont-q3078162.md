# Fortress of Charlemont

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-charlemont-q3078162` |
| Coordinates | 50.13484, 4.81199 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.13484/4.81199)) |
| Wikidata | [Q3078162](https://www.wikidata.org/wiki/Q3078162) (CC0) |
| Wikidata class | fort |
| Types | fort\|built structure |
| Administrative area | Givet |
| Inception | 1555 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `location-only`, 322 elements (marker 2, road 71, building 127, wall 73, retaining-wall 17, zone 29, cliff 1, waterway 1, water 1).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 1, inferred 0, unknown 216.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11502184 historic=fort Q3078162 146 m from ledger point
- site is a site relation of 96 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1638 x 751 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.13484/4.81199) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|built structure; sitelinks=8; wikidata:Q3078162 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/fortress-of-charlemont-q3078162.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
