# Museggmauer

> Switzerland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `museggmauer-q1571757` |
| Coordinates | 47.05429, 8.3042 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.05429/8.3042)) |
| Wikidata | [Q1571757](https://www.wikidata.org/wiki/Q1571757) (CC0) |
| Wikidata class | fort |
| Types | fortification\|rampart |
| Administrative area | Lucerne |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `website` | https://www.museggmauer.ch/ |

## What the model contains

Tier **T1**, status `location-only`, 327 elements (marker 3, road 986, waterway 16, building 842, wall 19, zone 7, retaining-wall 12).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 39, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21285991 historic=citywalls Q1571757 9 m from ledger point
- site is a site relation of 11 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (786 x 262 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 842 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 986 mapped (trace size budget); minor lanes are not drawn
- origin moved 34 m from the ledger point to the centre of the mapped site
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.05429/8.3042) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|rampart; sitelinks=6; wikidata:Q1571757 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/museggmauer-q1571757.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
