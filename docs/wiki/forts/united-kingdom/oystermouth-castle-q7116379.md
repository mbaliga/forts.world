# Oystermouth Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oystermouth-castle-q7116379` |
| Coordinates | 51.57706, -4.00264 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.57706/-4.00264)) |
| Wikidata | [Q7116379](https://www.wikidata.org/wiki/Q7116379) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Mumbles |
| Designations | National Monument of Wales\|Grade I listed building\|scheduled monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.swansea.gov.uk/oystermouthcastle |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, road 57, coastline 1, building 224, wall 4, zone 6).

Evidence: documented 0, mapped 293, inferred 0, derived 0; heights documented 1, inferred 0, unknown 227.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1418030462 historic=castle Q7116379 8 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 8 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.57706/-4.00264) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q7116379 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/oystermouth-castle-q7116379.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
