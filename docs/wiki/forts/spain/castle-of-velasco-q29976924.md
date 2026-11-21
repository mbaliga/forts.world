# Castle of Velasco

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-velasco-q29976924` |
| Coordinates | 43.08295, -3.34131 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.08295/-3.34131)) |
| Wikidata | [Q29976924](https://www.wikidata.org/wiki/Q29976924) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Valle de Mena |
| Designations | bien de interés cultural |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 148 elements (outline 1, road 37, wall 2, waterway 1, building 106, water 1).

Evidence: documented 0, mapped 148, inferred 0, derived 0; heights documented 105, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/168283213 historic=castle Q29976924 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.08295/-3.34131) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q29976924 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 148 elements); data/traces/castle-of-velasco-q29976924.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
