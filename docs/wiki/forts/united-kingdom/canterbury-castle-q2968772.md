# Canterbury Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `canterbury-castle-q2968772` |
| Coordinates | 51.2757, 1.07462 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2757/1.07462)) |
| Wikidata | [Q2968772](https://www.wikidata.org/wiki/Q2968772) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Canterbury |
| Inception | 1135 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 14 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, road 204, zone 11, waterway 4, building 226, wall 5).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 8, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121814606 historic=castle Q2968772 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 226 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 204 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2757/1.07462) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=14; wikidata:Q2968772 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/canterbury-castle-q2968772.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
