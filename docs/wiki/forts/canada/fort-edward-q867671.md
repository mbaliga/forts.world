# Fort Edward

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-edward-q867671` |
| Coordinates | 44.9954, -64.1327 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.9954/-64.1327)) |
| Wikidata | [Q867671](https://www.wikidata.org/wiki/Q867671) (CC0) |
| Wikidata class | fort |
| Types | fort\|military museum\|National Historic Site Administered by Parks Canada |
| Administrative area | Windsor |
| Inception | 1750 |
| Designations | national historic site of Canada |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, coastline 1, road 31, building 35, wall 1, retaining-wall 3).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/969799293 historic=castle 229 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 229 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.9954/-64.1327) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|military museum\|National Historic Site Administered by Parks Canada; sitelinks=5; wikidata:Q867671 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/fort-edward-q867671.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
