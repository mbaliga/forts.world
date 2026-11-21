# St Donat's Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-donat-s-castle-q1485119` |
| Coordinates | 51.402, -3.53338 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.402/-3.53338)) |
| Wikidata | [Q1485119](https://www.wikidata.org/wiki/Q1485119) (CC0) |
| Wikidata class | castle |
| Types | house\|castle |
| Administrative area | St Donats |
| Designations | National Monument of Wales\|Grade I listed building |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 161 elements (outline 1, road 87, waterway 1, coastline 2, building 28, wall 19, zone 14, retaining-wall 9).

Evidence: documented 0, mapped 161, inferred 0, derived 0; heights documented 8, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3879106 historic=castle Q1485119 17 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 17 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.402/-3.53338) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; house\|castle; sitelinks=10; wikidata:Q1485119 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 161 elements); data/traces/st-donat-s-castle-q1485119.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
