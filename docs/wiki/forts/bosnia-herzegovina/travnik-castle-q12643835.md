# Travnik Castle

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `travnik-castle-q12643835` |
| Coordinates | 44.22999, 17.67106 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.22999/17.67106)) |
| Wikidata | [Q12643835](https://www.wikidata.org/wiki/Q12643835) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|cultural heritage\|architectural heritage monument\|historic site\|cultural property\|historic building |
| Administrative area | Central Bosnia Canton |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, road 122, waterway 15, zone 8, building 282, wall 20, retaining-wall 12, cliff 6, water 2).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 8, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1071542931 historic=castle 28 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 282 mapped (trace size budget); the rest of the town is not drawn
- origin moved 27 m from the ledger point to the outline centroid
- 39 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.22999/17.67106) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|cultural heritage\|architectural heritage monument\|historic site\|cultural property\|historic building; sitelinks=6; wikidata:Q12643835 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/travnik-castle-q12643835.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
