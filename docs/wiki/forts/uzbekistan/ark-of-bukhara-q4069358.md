# Ark of Bukhara

> Uzbekistan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ark-of-bukhara-q4069358` |
| Coordinates | 39.77778, 64.41028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.77778/64.41028)) |
| Wikidata | [Q4069358](https://www.wikidata.org/wiki/Q4069358) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Bukhara |
| Designations | object of tangible cultural heritage of Uzbekistan |
| Wikipedia language editions | 25 |
| OSM `historic` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, road 171, building 248, water 2, zone 3, waterway 4, wall 2).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 2, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/904471943 historic=yes Q4069358 43 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 248 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 171 mapped (trace size budget); minor lanes are not drawn
- origin moved 44 m from the ledger point to the outline centroid
- 80 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.77778/64.41028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=25; wikidata:Q4069358 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/ark-of-bukhara-q4069358.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/uzbekistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
