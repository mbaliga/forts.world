# Alcazaba of Málaga

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alcazaba-of-malaga-q3127243` |
| Coordinates | 36.72118, -4.41575 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.72118/-4.41575)) |
| Wikidata | [Q3127243](https://www.wikidata.org/wiki/Q3127243) (CC0) |
| Wikidata class | fort |
| Types | alcazaba\|fortress\|monument |
| Administrative area | Málaga |
| Inception | 1057 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 24 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 378 elements (outline 1, marker 28, road 360, building 97, zone 4, wall 85, water 12).

Evidence: documented 0, mapped 378, inferred 0, derived 0; heights documented 82, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/183832022 historic=citywalls 3 m from ledger point
- roads capped: kept the 150 longest of 360 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.72118/-4.41575) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; alcazaba\|fortress\|monument; sitelinks=24; wikidata:Q3127243 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 378 elements); data/traces/alcazaba-of-malaga-q3127243.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
