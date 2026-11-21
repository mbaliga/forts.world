# City walls of Saint-Lizier

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-saint-lizier-q22937227` |
| Coordinates | 43.0032, 1.1378 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.0032/1.1378)) |
| Wikidata | [Q22937227](https://www.wikidata.org/wiki/Q22937227) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Saint-Lizier |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, marker 1, road 93, waterway 4, building 373, zone 8, wall 24, retaining-wall 1).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 1, inferred 0, unknown 144.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3082115 historic=yes Q2942375 198 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 373 mapped (trace size budget); the rest of the town is not drawn
- origin moved 200 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.0032/1.1378) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=2; wikidata:Q22937227 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 252 elements); data/traces/city-walls-of-saint-lizier-q22937227.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
