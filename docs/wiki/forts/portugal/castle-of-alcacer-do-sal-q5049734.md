# Castle of Alcácer do Sal

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-alcacer-do-sal-q5049734` |
| Coordinates | 38.37272, -8.51258 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.37272/-8.51258)) |
| Wikidata | [Q5049734](https://www.wikidata.org/wiki/Q5049734) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Alcácer do Sal (Santa Maria do Castelo e Santiago) e Santa Susana |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 300 elements (marker 6, road 176, waterway 1, zone 13, building 610, wall 8, retaining-wall 1, cliff 1).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 0, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21472575 historic=citywalls 50 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (274 x 159 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 610 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 176 mapped (trace size budget); minor lanes are not drawn
- origin moved 33 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.37272/-8.51258) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=6; wikidata:Q5049734 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 250 elements); data/traces/castle-of-alcacer-do-sal-q5049734.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
