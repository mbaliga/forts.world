# Wall of Astorga

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wall-of-astorga-q6032832` |
| Coordinates | 42.4575, -6.055 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.4575/-6.055)) |
| Wikidata | [Q6032832](https://www.wikidata.org/wiki/Q6032832) (CC0) |
| Wikidata class | fortification |
| Types | monument\|city walls |
| Administrative area | Astorga |
| Designations | bien de interés cultural |
| UNESCO WHC id | 669-1733 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.palaciodegaudi.es/ |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 1, road 128, wall 3, building 151, zone 1, retaining-wall 1).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 2, inferred 0, unknown 153.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51139525 historic=castle Q507390 87 m from ledger point
- origin moved 87 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.4575/-6.055) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; monument\|city walls; sitelinks=3; wikidata:Q6032832 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/wall-of-astorga-q6032832.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
