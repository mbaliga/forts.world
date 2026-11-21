# Kara Surları No. T10

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kara-surlar-no-t10-q135035296` |
| Coordinates | 40.99324, 28.9223 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.99324/28.9223)) |
| Wikidata | [Q135035296](https://www.wikidata.org/wiki/Q135035296) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|historic building |
| Administrative area | Fatih |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 282 elements (outline 1, coastline 1, wall 9, building 155, road 100, zone 15, retaining-wall 1).

Evidence: documented 0, mapped 282, inferred 0, derived 0; heights documented 1, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1035943038 historic=castle Q632795 71 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 72 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.99324/28.9223) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|historic building; sitelinks=1; wikidata:Q135035296 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 282 elements); data/traces/kara-surlar-no-t10-q135035296.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
