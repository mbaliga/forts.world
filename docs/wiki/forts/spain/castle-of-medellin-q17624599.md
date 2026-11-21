# Castle of Medellín

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-medellin-q17624599` |
| Coordinates | 38.96695, -5.95629 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.96695/-5.95629)) |
| Wikidata | [Q17624599](https://www.wikidata.org/wiki/Q17624599) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Medellín |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 3, waterway 3, water 2, road 40, building 127, wall 187, zone 2).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 0, inferred 0, unknown 314.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1053645703 historic=archaeological_site 91 m from ledger point
- origin moved 91 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.96695/-5.95629) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=4; wikidata:Q17624599 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/castle-of-medellin-q17624599.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
