# Carpenters Tower in Kraków

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carpenters-tower-in-krakow-q9166764` |
| Coordinates | 50.065, 19.94 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.065/19.94)) |
| Wikidata | [Q9166764](https://www.wikidata.org/wiki/Q9166764) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Kraków |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 239 elements (outline 1, marker 17, road 310, zone 88, building 237, wall 51, retaining-wall 2).

Evidence: documented 0, mapped 239, inferred 0, derived 0; heights documented 60, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/200499484 historic=castle Q9160342 19 m from ledger point
- pruned to the outline plus 150 m: 706 -> 428 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 127 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 202 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the outline centroid
- 69 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.065/19.94) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q9166764 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 239 elements); data/traces/carpenters-tower-in-krakow-q9166764.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
