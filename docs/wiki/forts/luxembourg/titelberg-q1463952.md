# Titelberg

> Luxembourg · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `titelberg-q1463952` |
| Coordinates | 49.5375, 5.8625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5375/5.8625)) |
| Wikidata | [Q1463952](https://www.wikidata.org/wiki/Q1463952) (CC0) |
| Wikidata class | fortification |
| Types | vicus\|oppidum |
| Administrative area | Pétange |
| Wikipedia language editions | 10 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |
| OSM `description` | Remnants of a refuge stronghold, this embankment was the foundation of a fortification wall. |

## What the model contains

Tier **T1**, status `location-only`, 186 elements (marker 4, building 17, zone 20, road 92, waterway 3, retaining-wall 7, wall 26, cliff 17).

Evidence: documented 0, mapped 186, inferred 0, derived 0; heights documented 0, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12391456 historic=archaeological_site 143 m from ledger point
- site is a site relation of 8 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (938 x 711 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5375/5.8625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; vicus\|oppidum; sitelinks=10; wikidata:Q1463952 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 48 elements); data/traces/titelberg-q1463952.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
