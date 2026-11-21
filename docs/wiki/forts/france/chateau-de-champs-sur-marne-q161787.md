# Château de Champs-sur-Marne

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-champs-sur-marne-q161787` |
| Coordinates | 48.85366, 2.60408 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.85366/2.60408)) |
| Wikidata | [Q161787](https://www.wikidata.org/wiki/Q161787) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Champs-sur-Marne |
| Inception | 1708 |
| Designations | classified historical monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 389 elements (outline 1, road 172, wall 10, zone 46, building 156, retaining-wall 4).

Evidence: documented 0, mapped 389, inferred 0, derived 0; heights documented 22, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/113196325 historic=castle Q161787 3 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.85366/2.60408) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=8; wikidata:Q161787 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 389 elements); data/traces/chateau-de-champs-sur-marne-q161787.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
