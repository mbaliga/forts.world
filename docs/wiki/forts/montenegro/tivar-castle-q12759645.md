# Tivar Castle

> Montenegro · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tivar-castle-q12759645` |
| Coordinates | 42.09433, 19.13463 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.09433/19.13463)) |
| Wikidata | [Q12759645](https://www.wikidata.org/wiki/Q12759645) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 1, road 123, wall 40, building 256, waterway 4, retaining-wall 5, zone 4).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 1, inferred 0, unknown 165.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/210722592 historic=castle Q12759645 129 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 256 mapped (trace size budget); the rest of the town is not drawn
- origin moved 130 m from the ledger point to the outline centroid
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.09433/19.13463) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q12759645 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/tivar-castle-q12759645.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/montenegro.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
