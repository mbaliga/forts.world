# Fortifications of Montivilliers

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-montivilliers-q22951902` |
| Coordinates | 49.5433, 0.18976 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.5433/0.18976)) |
| Wikidata | [Q22951902](https://www.wikidata.org/wiki/Q22951902) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Montivilliers |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, road 111, waterway 21, water 1, building 736, zone 2, wall 1).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 7, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/119225443 historic=yes 286 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 736 mapped (trace size budget); the rest of the town is not drawn
- origin moved 286 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.5433/0.18976) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q22951902 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/fortifications-of-montivilliers-q22951902.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
