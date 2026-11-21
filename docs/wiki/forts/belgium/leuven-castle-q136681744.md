# Leuven Castle

> Belgium · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `leuven-castle-q136681744` |
| Coordinates | 50.88781, 4.69656 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.88781/4.69656)) |
| Wikidata | [Q136681744](https://www.wikidata.org/wiki/Q136681744) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Leuven |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `location-only`, 280 elements (marker 2, road 158, water 6, wall 108, building 281, waterway 20, zone 4).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 6, inferred 0, unknown 162.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20823983 historic=citywalls Q59954398 1080 m from ledger point
- site is a site relation of 23 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (829 x 862 m)
- present-day buildings capped: kept the 60 nearest the outline centre of 281 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 992 m from the ledger point to the centre of the mapped site
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.88781/4.69656) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q136681744 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 372 elements); data/traces/leuven-castle-q136681744.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
