# Remparts de Cadillac

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remparts-de-cadillac-q3424611` |
| Coordinates | 44.6365, -0.32103 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.6365/-0.32103)) |
| Wikidata | [Q3424611](https://www.wikidata.org/wiki/Q3424611) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Cadillac-sur-Garonne |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 5, road 92, waterway 2, building 319, water 1, zone 8, wall 17).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 0, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1700638 historic=castle Q2968730 168 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 319 mapped (trace size budget); the rest of the town is not drawn
- origin moved 168 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.6365/-0.32103) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3424611 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/remparts-de-cadillac-q3424611.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
