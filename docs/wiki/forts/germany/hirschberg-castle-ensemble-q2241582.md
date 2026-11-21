# Hirschberg Castle (ensemble)

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hirschberg-castle-ensemble-q2241582` |
| Coordinates | 49.03677, 11.45718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.03677/11.45718)) |
| Wikidata | [Q2241582](https://www.wikidata.org/wiki/Q2241582) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|cultural heritage ensemble |
| Administrative area | Beilngries |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `location-only`, 341 elements (marker 3, road 74, building 244, zone 6, wall 10, cliff 3, water 1).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 1, inferred 0, unknown 253.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13407250 historic=castle 14 m from ledger point
- site is a site relation of 25 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (295 x 129 m)
- 26 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.03677/11.45718) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|cultural heritage ensemble; sitelinks=4; wikidata:Q2241582 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 107 elements); data/traces/hirschberg-castle-ensemble-q2241582.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
