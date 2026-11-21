# Fortifications of Xi'an

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-xi-an-q1334336` |
| Coordinates | 34.25334, 108.94223 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.25334/108.94223)) |
| Wikidata | [Q1334336](https://www.wikidata.org/wiki/Q1334336) (CC0) |
| Wikidata class | fortification |
| Types | Chinese city wall |
| Administrative area | Xi'an |
| Designations | Major Historical and Cultural Site Protected at the National Level |
| Wikipedia language editions | 21 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 329 elements (outline 1, road 138, retaining-wall 1, building 430, zone 64, wall 4).

Evidence: documented 0, mapped 329, inferred 0, derived 0; heights documented 4, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3450809 historic=citywalls Q1334336 1143 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 430 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1216 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.25334/108.94223) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Chinese city wall; sitelinks=21; wikidata:Q1334336 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 329 elements); data/traces/fortifications-of-xi-an-q1334336.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
