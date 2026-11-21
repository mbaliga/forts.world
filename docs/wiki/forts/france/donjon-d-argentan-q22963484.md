# Donjon d'Argentan

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-d-argentan-q22963484` |
| Coordinates | 48.74389, -0.01806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.74389/-0.01806)) |
| Wikidata | [Q22963484](https://www.wikidata.org/wiki/Q22963484) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Argentan |
| Inception | 1200 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 3, road 146, building 596, zone 17, wall 3).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52165527 historic=castle Q22963484 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 596 mapped (trace size budget); the rest of the town is not drawn
- origin moved 14 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.74389/-0.01806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q22963484 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/donjon-d-argentan-q22963484.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
