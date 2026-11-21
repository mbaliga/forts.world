# Enceinte de Bazas

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-de-bazas-q3053725` |
| Coordinates | 44.4304, -0.21165 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.4304/-0.21165)) |
| Wikidata | [Q3053725](https://www.wikidata.org/wiki/Q3053725) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Bazas |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 242 elements (marker 5, road 100, zone 4, building 455, waterway 4, retaining-wall 5, wall 4).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 4, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 455 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.4304/-0.21165) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3053725 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 242 elements); data/traces/enceinte-de-bazas-q3053725.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
