# Cervera Tower

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cervera-tower-q6150660` |
| Coordinates | 38.00088, -0.65141 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.00088/-0.65141)) |
| Wikidata | [Q6150660](https://www.wikidata.org/wiki/Q6150660) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Torrevieja |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 216 elements (outline 1, marker 1, road 130, coastline 1, building 225, wall 258, zone 1).

Evidence: documented 0, mapped 216, inferred 0, derived 0; heights documented 24, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1092710852 historic=castle Q6150660 21 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- pruned to the outline plus 150 m: 617 -> 244 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 88 mapped (trace size budget); the rest of the town is not drawn
- origin moved 21 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.00088/-0.65141) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=4; wikidata:Q6150660 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 216 elements); data/traces/cervera-tower-q6150660.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
