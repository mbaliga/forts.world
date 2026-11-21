# Gród bydgoski

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grod-bydgoski-q9282389` |
| Coordinates | 53.1214, 18.0047 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.1214/18.0047)) |
| Wikidata | [Q9282389](https://www.wikidata.org/wiki/Q9282389) (CC0) |
| Wikidata class | fortification |
| Types | gord |
| Administrative area | Bydgoszcz |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 7, waterway 2, road 303, building 197, zone 43, wall 8).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 2, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/139179589 historic=castle 171 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 197 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 303 mapped (trace size budget); minor lanes are not drawn
- origin moved 171 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.1214/18.0047) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gord; sitelinks=2; wikidata:Q9282389 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/grod-bydgoski-q9282389.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
