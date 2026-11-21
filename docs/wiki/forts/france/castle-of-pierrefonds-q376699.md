# Castle of Pierrefonds

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-pierrefonds-q376699` |
| Coordinates | 49.34694, 2.98028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.34694/2.98028)) |
| Wikidata | [Q376699](https://www.wikidata.org/wiki/Q376699) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Pierrefonds |
| Inception | 1393 |
| Designations | classified historical monument |
| Wikipedia language editions | 27 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://demo.f4map.com/#lat=49.3465818&lon=2.9801699&zoom=18 |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, marker 2, road 57, water 2, building 217, wall 8, zone 4, waterway 7, retaining-wall 7).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 4, inferred 0, unknown 228.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1996980 historic=castle Q376699 8 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.34694/2.98028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=27; wikidata:Q376699 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/castle-of-pierrefonds-q376699.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
