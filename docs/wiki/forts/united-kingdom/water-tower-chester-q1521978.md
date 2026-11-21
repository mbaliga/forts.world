# Water Tower, Chester

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `water-tower-chester-q1521978` |
| Coordinates | 53.1926, -2.8995 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.1926/-2.8995)) |
| Wikidata | [Q1521978](https://www.wikidata.org/wiki/Q1521978) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortified tower |
| Administrative area | Cheshire West and Chester |
| Inception | 1400 |
| Designations | Grade I listed building |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 1, road 183, wall 9, building 288, waterway 13, water 6, zone 3).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 74, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1545574559 historic=citywalls 49 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 288 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 183 mapped (trace size budget); minor lanes are not drawn
- origin moved 49 m from the ledger point to the outline centroid
- 37 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.1926/-2.8995) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortified tower; sitelinks=4; wikidata:Q1521978 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/water-tower-chester-q1521978.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
