# Batería de la Primera Aguada

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bateria-de-la-primera-aguada-q98059159` |
| Coordinates | 36.52031, -6.27706 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.52031/-6.27706)) |
| Wikidata | [Q98059159](https://www.wikidata.org/wiki/Q98059159) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Cádiz |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, marker 3, road 162, building 62, zone 10, coastline 1, wall 5).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 2, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/699009268 historic=castle 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.52031/-6.27706) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=1; wikidata:Q98059159 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 244 elements); data/traces/bateria-de-la-primera-aguada-q98059159.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
