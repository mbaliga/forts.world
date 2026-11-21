# Château des Rois ducs

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-des-rois-ducs-q1876458` |
| Coordinates | 44.5911, 1.0193 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.5911/1.0193)) |
| Wikidata | [Q1876458](https://www.wikidata.org/wiki/Q1876458) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Sauveterre-la-Lémance |
| Designations | classified historical monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, road 39, zone 8, building 59, waterway 2, wall 16, retaining-wall 15, cliff 1).

Evidence: documented 0, mapped 141, inferred 0, derived 0; heights documented 3, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13887838 historic=castle Q78659231 10 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.5911/1.0193) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=4; wikidata:Q1876458 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 141 elements); data/traces/chateau-des-rois-ducs-q1876458.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
