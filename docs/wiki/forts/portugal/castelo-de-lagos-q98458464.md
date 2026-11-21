# Castelo de Lagos

> Portugal · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-de-lagos-q98458464` |
| Coordinates | 37.09712, -8.67163 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.09712/-8.67163)) |
| Wikidata | [Q98458464](https://www.wikidata.org/wiki/Q98458464) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lagos |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `location-only`, 282 elements (marker 9, road 488, building 749, wall 82, water 4, zone 19, retaining-wall 24, cliff 1, waterway 1, coastline 2).

Evidence: documented 0, mapped 282, inferred 0, derived 3; heights documented 7, inferred 0, unknown 159.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10626678 historic=citywalls Q5049781 314 m from ledger point
- site is a site relation of 15 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (647 x 843 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 749 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 488 mapped (trace size budget); minor lanes are not drawn
- origin moved 421 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":15.2}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":15.2}
- sea-2: DEM check ok {"cells":7,"medianInside":0,"medianOutside":15.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.09712/-8.67163) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q98458464 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 392 elements); data/traces/castelo-de-lagos-q98458464.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
