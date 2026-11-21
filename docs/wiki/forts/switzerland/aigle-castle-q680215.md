# Aigle Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aigle-castle-q680215` |
| Coordinates | 46.315, 6.97639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.315/6.97639)) |
| Wikidata | [Q680215](https://www.wikidata.org/wiki/Q680215) (CC0) |
| Wikidata class | castle |
| Types | castle\|historic site\|memory institution\|local museum\|wine museum |
| Administrative area | Aigle |
| Inception | 1200 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://chateauaigle.ch/ |

## What the model contains

Tier **T1**, status `outline+walls`, 125 elements (outline 1, road 46, building 44, wall 18, retaining-wall 16).

Evidence: documented 0, mapped 125, inferred 0, derived 0; heights documented 2, inferred 0, unknown 76.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14975489 historic=castle Q680215 14 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.315/6.97639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historic site\|memory institution\|local museum\|wine museum; sitelinks=12; wikidata:Q680215 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 125 elements); data/traces/aigle-castle-q680215.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
