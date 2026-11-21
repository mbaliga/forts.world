# Castleburke

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castleburke-q68032064` |
| Coordinates | 53.7388, -9.2632 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.7388/-9.2632)) |
| Wikidata | [Q68032064](https://www.wikidata.org/wiki/Q68032064) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | County Mayo |
| Designations | national monument of Ireland |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `heritage` | 2 |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, road 6, building 11, wall 4).

Evidence: documented 0, mapped 22, inferred 0, derived 0; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1274050664 historic=ruins Q68032064 7 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.7388/-9.2632) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q68032064 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 22 elements); data/traces/castleburke-q68032064.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
