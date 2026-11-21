# Castle of Vinhais

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-vinhais-q5049847` |
| Coordinates | 41.83516, -7.0002 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.83516/-7.0002)) |
| Wikidata | [Q5049847](https://www.wikidata.org/wiki/Q5049847) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Vinhais |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 134 elements (marker 2, road 47, building 65, zone 7, wall 12, waterway 1).

Evidence: documented 0, mapped 134, inferred 0, derived 0; heights documented 3, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18508438 historic=castle 12 m from ledger point
- site is a site relation of 14 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (135 x 142 m)
- origin moved 10 m from the ledger point to the centre of the mapped site
- 24 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.83516/-7.0002) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=6; wikidata:Q5049847 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 113 elements); data/traces/castle-of-vinhais-q5049847.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
