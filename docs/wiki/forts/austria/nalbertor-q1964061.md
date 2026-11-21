# Nalbertor

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nalbertor-q1964061` |
| Coordinates | 48.75561, 15.95156 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.75561/15.95156)) |
| Wikidata | [Q1964061](https://www.wikidata.org/wiki/Q1964061) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Retz |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 8, road 94, building 295, wall 23, zone 8, water 2).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 21, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1562568947 historic=citywalls 54 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 295 mapped (trace size budget); the rest of the town is not drawn
- origin moved 61 m from the ledger point to the outline centroid
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.75561/15.95156) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q1964061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/nalbertor-q1964061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
