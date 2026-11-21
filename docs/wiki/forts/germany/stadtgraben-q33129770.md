# Stadtgraben

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtgraben-q33129770` |
| Coordinates | 53.86823, 10.67584 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.86823/10.67584)) |
| Wikidata | [Q33129770](https://www.wikidata.org/wiki/Q33129770) (CC0) |
| Wikidata class | fortification |
| Types | moat |
| Administrative area | Lübeck |
| Wikipedia language editions | 3 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 17, road 179, building 268, water 2, retaining-wall 3, waterway 3, zone 2, wall 2).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 19, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28831875 historic=building Q657603 387 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 268 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 179 mapped (trace size budget); minor lanes are not drawn
- origin moved 388 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.86823/10.67584) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat; sitelinks=3; wikidata:Q33129770 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 300 elements); data/traces/stadtgraben-q33129770.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
