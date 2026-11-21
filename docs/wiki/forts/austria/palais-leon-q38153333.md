# Palais Léon

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palais-leon-q38153333` |
| Coordinates | 48.21617, 16.3661 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.21617/16.3661)) |
| Wikidata | [Q38153333](https://www.wikidata.org/wiki/Q38153333) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|city palace |
| Administrative area | Innere Stadt |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 12, road 453, zone 65, waterway 1, building 52, wall 11, retaining-wall 7).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 47, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2448788 historic=castle Q38153333 3 m from ledger point
- roads capped: kept the 150 longest of 453 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.21617/16.3661) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|city palace; sitelinks=1; wikidata:Q38153333 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/palais-leon-q38153333.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
