# Enceinte de Mézières

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-de-mezieres-q22915515` |
| Coordinates | 49.75978, 4.72009 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.75978/4.72009)) |
| Wikidata | [Q22915515](https://www.wikidata.org/wiki/Q22915515) (CC0) |
| Wikidata class | fortification |
| Types | enceinte |
| Administrative area | Charleville-Mézières |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 4, water 5, waterway 5, road 147, building 209, wall 9, retaining-wall 7, zone 17).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 6, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/91141129 historic=building Q22915507 114 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 209 mapped (trace size budget); the rest of the town is not drawn
- origin moved 114 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.75978/4.72009) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; enceinte; sitelinks=2; wikidata:Q22915515 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/enceinte-de-mezieres-q22915515.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
