# Metchley Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `metchley-fort-q6823362` |
| Coordinates | 52.4514, -1.9388 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.4514/-1.9388)) |
| Wikidata | [Q6823362](https://www.wikidata.org/wiki/Q6823362) (CC0) |
| Wikidata class | fortification |
| Types | castrum |
| Administrative area | Birmingham |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 6, road 464, building 82, waterway 2, zone 56, wall 7, water 2, retaining-wall 16).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 11, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/251488208 historic=archaeological_site 90 m from ledger point
- roads capped: kept the 150 longest of 464 mapped (trace size budget); minor lanes are not drawn
- origin moved 104 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.4514/-1.9388) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum; sitelinks=2; wikidata:Q6823362 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/metchley-fort-q6823362.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
