# Château d'Eck

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-eck-q2968196` |
| Coordinates | 44.74417, -0.53917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.74417/-0.53917)) |
| Wikidata | [Q2968196](https://www.wikidata.org/wiki/Q2968196) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Cadaujac |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 186 elements (road 60, building 790, waterway 5, zone 1).

Evidence: documented 0, mapped 186, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6496508 historic=yes Q28493657 8830 m from ledger point
- site is a route relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (16974 x 28635 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 790 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.74417/-0.53917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q2968196 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 186 elements); data/traces/chateau-d-eck-q2968196.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
