# St Michael's Mount Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-michael-s-mount-castle-q24659597` |
| Coordinates | 50.11652, -5.47791 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.11652/-5.47791)) |
| Wikidata | [Q24659597](https://www.wikidata.org/wiki/Q24659597) (CC0) |
| Wikidata class | castle |
| Types | house\|castle\|museum\|chapel |
| Administrative area | St Michael's Mount |
| Designations | Grade I listed building |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `website` | https://www.stmichaelsmount.co.uk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 102 elements (outline 1, marker 17, road 36, zone 9, building 13, retaining-wall 4, coastline 1, wall 15, cliff 4, water 2).

Evidence: documented 0, mapped 102, inferred 0, derived 2; heights documented 3, inferred 0, unknown 29.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/55079805 historic=castle Q1431121 38 m from ledger point
- origin moved 38 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":220,"medianInside":-2.5,"medianOutside":9.4}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":0.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.11652/-5.47791) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; house\|castle\|museum\|chapel; sitelinks=3; wikidata:Q24659597 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 102 elements); data/traces/st-michael-s-mount-castle-q24659597.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
