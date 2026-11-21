# Chufut-Kale

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chufut-kale-q1017178` |
| Coordinates | 44.74118, 33.92337 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.74118/33.92337)) |
| Wikidata | [Q1017178](https://www.wikidata.org/wiki/Q1017178) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|ruins\|archaeological site |
| Administrative area | Bakhchysarai Raion |
| Inception | 0500 |
| Designations | State Register of Immovable Monuments of Ukraine |
| Wikipedia language editions | 37 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 54 elements (outline 1, marker 3, cliff 5, wall 3, road 33, zone 3, building 6).

Evidence: documented 0, mapped 54, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/93753131 historic=ruins Q1017178 55 m from ledger point
- origin moved 46 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.74118/33.92337) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|ruins\|archaeological site; sitelinks=37; wikidata:Q1017178 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 54 elements); data/traces/chufut-kale-q1017178.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
