# Palacio de los Sada

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-de-los-sada-q29345592` |
| Coordinates | 42.49584, -1.2158 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.49584/-1.2158)) |
| Wikidata | [Q29345592](https://www.wikidata.org/wiki/Q29345592) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Sos del Rey Católico |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Museo dedicado a Fernando II de Aragón. |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, marker 9, road 121, zone 1, building 341, wall 7, retaining-wall 2).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 119, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/683401830 historic=castle Q29345592 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 341 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.49584/-1.2158) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q29345592 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 261 elements); data/traces/palacio-de-los-sada-q29345592.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
