# Oppidum de Marduel

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oppidum-de-marduel-q27961807` |
| Coordinates | 43.93274, 4.55792 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.93274/4.55792)) |
| Wikidata | [Q27961807](https://www.wikidata.org/wiki/Q27961807) (CC0) |
| Wikidata class | fortification |
| Types | oppidum |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 230 elements (marker 3, road 86, building 105, waterway 7, wall 3, retaining-wall 1, zone 24, water 1).

Evidence: documented 0, mapped 230, inferred 0, derived 0; heights documented 0, inferred 0, unknown 109.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13286195 historic=yes Q2859224 2586 m from ledger point
- site is a site relation of 38 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (10219 x 12251 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.93274/4.55792) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; oppidum; sitelinks=2; wikidata:Q27961807 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 230 elements); data/traces/oppidum-de-marduel-q27961807.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
