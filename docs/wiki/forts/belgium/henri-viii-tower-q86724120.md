# Henri VIII Tower

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `henri-viii-tower-q86724120` |
| Coordinates | 50.61233, 3.3921 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.61233/3.3921)) |
| Wikidata | [Q86724120](https://www.wikidata.org/wiki/Q86724120) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Tournai |
| Designations | protected heritage property in Wallonia\|Exceptional heritage property of Wallonia |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 4, road 159, water 1, waterway 1, building 468, wall 8, zone 11).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/761211629 historic=building 266 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 468 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 159 mapped (trace size budget); minor lanes are not drawn
- origin moved 266 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.61233/3.3921) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q86724120 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/henri-viii-tower-q86724120.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
