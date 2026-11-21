# Newport Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `newport-castle-q7018806` |
| Coordinates | 51.5907, -2.99507 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.5907/-2.99507)) |
| Wikidata | [Q7018806](https://www.wikidata.org/wiki/Q7018806) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Stow Hill |
| Designations | National Monument of Wales\|Grade II* listed building\|scheduled monument |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortification |
| OSM `description` | A ruined castle in Newport, Wales. Built in the 14th century believed to be by Hugh de Audley, 1st Earl of Gloucester to manage the crossing of the River Usk and administer taxes. |

## What the model contains

Tier **T1**, status `location-only`, 300 elements (marker 6, coastline 4, road 168, building 99, waterway 4, wall 10, zone 6, retaining-wall 1, water 2).

Evidence: documented 0, mapped 300, inferred 0, derived 2; heights documented 25, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12302036 historic=castle Q7018806 10 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (29 x 68 m)
- origin moved 12 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":363,"medianInside":9.8,"medianOutside":5.9}
- sea-1: DEM check ok {"cells":164,"medianInside":4,"medianOutside":11.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.5907/-2.99507) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q7018806 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/newport-castle-q7018806.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
