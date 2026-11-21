# Château de Combourg

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-combourg-q1650661` |
| Coordinates | 48.40778, -1.75389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.40778/-1.75389)) |
| Wikidata | [Q1650661](https://www.wikidata.org/wiki/Q1650661) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Combourg |
| Inception | 1025 |
| Designations | classified historical monument\|Maisons des Illustres\|monument historique inscrit |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 1, road 33, water 1, wall 1, building 296, waterway 6, zone 2).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 1, inferred 0, unknown 296.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1304779 historic=castle Q1650661 25 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.40778/-1.75389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q1650661 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/chateau-de-combourg-q1650661.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
