# Fortifications de Givet

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-de-givet-q3078498` |
| Coordinates | 50.1352, 4.8238 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.1352/4.8238)) |
| Wikidata | [Q3078498](https://www.wikidata.org/wiki/Q3078498) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Givet |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 258 elements (outline 1, marker 4, road 119, building 419, zone 2, cliff 1, waterway 1, wall 8, water 2).

Evidence: documented 0, mapped 258, inferred 0, derived 0; heights documented 3, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/99636851 historic=citywalls Q3078498 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 419 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.1352/4.8238) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q3078498 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 258 elements); data/traces/fortifications-de-givet-q3078498.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
