# Château Courcelles de Montigny-lès-Metz

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-courcelles-de-montigny-les-metz-q72401839` |
| Coordinates | 49.10298, 6.15802 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.10298/6.15802)) |
| Wikidata | [Q72401839](https://www.wikidata.org/wiki/Q72401839) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Montigny-lès-Metz |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 256 elements (outline 1, marker 2, road 122, building 393, waterway 1, water 5, wall 5).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 5, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/100479595 historic=castle Q72401839 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 393 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.10298/6.15802) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=2; wikidata:Q72401839 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 256 elements); data/traces/chateau-courcelles-de-montigny-les-metz-q72401839.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
