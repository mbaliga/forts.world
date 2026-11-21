# Enceinte fortifiée de Rouffach

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-fortifiee-de-rouffach-q15948780` |
| Coordinates | 47.9575, 7.30183 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.9575/7.30183)) |
| Wikidata | [Q15948780](https://www.wikidata.org/wiki/Q15948780) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Rouffach |
| Inception | 1200 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 192 elements (marker 2, road 60, building 511, zone 1, waterway 1, wall 8).

Evidence: documented 0, mapped 192, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- present-day buildings capped: kept the 120 nearest the outline centre of 511 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.9575/7.30183) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=2; wikidata:Q15948780 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 192 elements); data/traces/enceinte-fortifiee-de-rouffach-q15948780.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
