# Tour Saint-Sauveur

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-saint-sauveur-q22964277` |
| Coordinates | 48.83764, -0.88972 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.83764/-0.88972)) |
| Wikidata | [Q22964277](https://www.wikidata.org/wiki/Q22964277) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Vire Normandie |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 1, road 317, water 1, building 383, waterway 2, zone 5, wall 4).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 1, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/273869973 historic=yes Q22964277 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 383 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 317 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.83764/-0.88972) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22964277 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/tour-saint-sauveur-q22964277.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
