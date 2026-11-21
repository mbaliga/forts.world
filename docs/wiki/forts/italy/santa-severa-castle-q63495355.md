# Santa Severa Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `santa-severa-castle-q63495355` |
| Coordinates | 42.01609, 11.95699 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.01609/11.95699)) |
| Wikidata | [Q63495355](https://www.wikidata.org/wiki/Q63495355) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum building |
| Administrative area | Santa Marinella |
| Designations | Italian national heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 135 elements (outline 1, marker 1, road 65, zone 10, retaining-wall 1, building 41, wall 12, waterway 1, coastline 1, water 2).

Evidence: documented 0, mapped 135, inferred 0, derived 1; heights documented 4, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1491582 historic=castle Q63495355 11 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":259,"medianInside":0,"medianOutside":2.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.01609/11.95699) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum building; sitelinks=5; wikidata:Q63495355 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 135 elements); data/traces/santa-severa-castle-q63495355.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
