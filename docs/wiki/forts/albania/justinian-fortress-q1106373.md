# Justinian Fortress

> Albania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `justinian-fortress-q1106373` |
| Coordinates | 41.32639, 19.82194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.32639/19.82194)) |
| Wikidata | [Q1106373](https://www.wikidata.org/wiki/Q1106373) (CC0) |
| Wikidata class | castle |
| Types | castle\|historic site\|Cultural Monument of Albania |
| Administrative area | Tirana County |
| Designations | Cultural Monument of Albania |
| Wikipedia language editions | 10 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 345 elements (outline 1, marker 12, building 115, road 200, zone 7, water 2, wall 6, waterway 1).

Evidence: documented 0, mapped 345, inferred 0, derived 0; heights documented 52, inferred 0, unknown 70.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1013420899 historic=citywalls 86 m from ledger point
- origin moved 86 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.32639/19.82194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historic site\|Cultural Monument of Albania; sitelinks=10; wikidata:Q1106373 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 345 elements); data/traces/justinian-fortress-q1106373.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/albania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
