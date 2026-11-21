# Enceinte romaine de Vienne

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-romaine-de-vienne-q3053752` |
| Coordinates | 45.5223, 4.87064 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.5223/4.87064)) |
| Wikidata | [Q3053752](https://www.wikidata.org/wiki/Q3053752) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Vienne |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `description` | vestige de la fortification antique |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 5, road 326, building 251, waterway 1, water 3, wall 18, zone 7, retaining-wall 3).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 13, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1564843766 historic=citywalls 29 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 251 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 326 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.5223/4.87064) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=2; wikidata:Q3053752 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/enceinte-romaine-de-vienne-q3053752.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
