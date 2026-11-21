# Palais ducal de Nevers

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-ducal-de-nevers-q3361198` |
| Coordinates | 46.98821, 3.15858 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.98821/3.15858)) |
| Wikidata | [Q3361198](https://www.wikidata.org/wiki/Q3361198) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Nevers |
| Designations | classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 311 elements (outline 1, marker 10, road 165, building 440, waterway 1, wall 7, zone 20, retaining-wall 2).

Evidence: documented 0, mapped 311, inferred 0, derived 0; heights documented 28, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/127526216 historic=castle Q3361198 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 440 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 165 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.98821/3.15858) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=6; wikidata:Q3361198 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 311 elements); data/traces/palais-ducal-de-nevers-q3361198.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
