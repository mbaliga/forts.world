# Palacio ducal de Medinaceli

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-ducal-de-medinaceli-q6057626` |
| Coordinates | 41.17249, -2.43496 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.17249/-2.43496)) |
| Wikidata | [Q6057626](https://www.wikidata.org/wiki/Q6057626) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum\|monument |
| Administrative area | Medinaceli |
| Inception | 1625 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 2, road 105, building 296, zone 14, wall 7).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14103003 historic=castle Q6057626 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 296 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.17249/-2.43496) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum\|monument; sitelinks=2; wikidata:Q6057626 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/palacio-ducal-de-medinaceli-q6057626.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
