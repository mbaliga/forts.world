# city walls of Montblanc

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-montblanc-q9046655` |
| Coordinates | 41.37503, 1.16334 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.37503/1.16334)) |
| Wikidata | [Q9046655](https://www.wikidata.org/wiki/Q9046655) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Montblanc |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 305 elements (marker 5, road 362, waterway 5, building 1000, zone 23, wall 132).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 0, inferred 0, unknown 192.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20414702 historic=citywalls Q9046655 262 m from ledger point
- site is a site relation of 53 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (433 x 466 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 1000 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 362 mapped (trace size budget); minor lanes are not drawn
- origin moved 265 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.37503/1.16334) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q9046655 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 228 elements); data/traces/city-walls-of-montblanc-q9046655.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
