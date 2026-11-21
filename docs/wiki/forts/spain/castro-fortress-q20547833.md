# Castro fortress

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castro-fortress-q20547833` |
| Coordinates | 42.23219, -8.72744 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.23219/-8.72744)) |
| Wikidata | [Q20547833](https://www.wikidata.org/wiki/Q20547833) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Vigo |
| Inception | 1665 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, marker 11, coastline 1, road 269, building 82, zone 8, wall 10, water 4).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 8, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/302242173 historic=castle Q20547833 101 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 102 m from the ledger point to the outline centroid
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.23219/-8.72744) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=7; wikidata:Q20547833 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 386 elements); data/traces/castro-fortress-q20547833.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
