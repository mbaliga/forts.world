# Castle of Faro

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-faro-q17390064` |
| Coordinates | 37.01197, -7.93408 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.01197/-7.93408)) |
| Wikidata | [Q17390064](https://www.wikidata.org/wiki/Q17390064) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Faro |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 303 elements (marker 7, road 219, coastline 2, building 235, waterway 3, wall 14, zone 5, water 2).

Evidence: documented 0, mapped 303, inferred 0, derived 2; heights documented 5, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7013980 historic=citywalls 96 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (268 x 376 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 235 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 219 mapped (trace size budget); minor lanes are not drawn
- origin moved 112 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":1128,"medianInside":3.9,"medianOutside":3}
- sea-1: DEM check ok {"cells":534,"medianInside":0,"medianOutside":9.1}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.01197/-7.93408) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q17390064 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 356 elements); data/traces/castle-of-faro-q17390064.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
