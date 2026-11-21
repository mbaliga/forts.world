# Château de Bellegarde

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-bellegarde-q115308923` |
| Coordinates | 46.37311, 6.47734 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.37311/6.47734)) |
| Wikidata | [Q115308923](https://www.wikidata.org/wiki/Q115308923) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Thonon-les-Bains |
| Inception | 1500 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 15, road 243, building 391, zone 31, water 4, retaining-wall 10, wall 6).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 24, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/67051100 historic=castle Q115308923 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 391 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 243 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.37311/6.47734) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=1; wikidata:Q115308923 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/chateau-de-bellegarde-q115308923.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
