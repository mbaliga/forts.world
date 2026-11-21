# Castelo de Montalvão

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-de-montalvao-q9705508` |
| Coordinates | 39.59588, -7.52633 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.59588/-7.52633)) |
| Wikidata | [Q9705508](https://www.wikidata.org/wiki/Q9705508) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Montalvão |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, road 39, building 203, wall 1).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 0, inferred 0, unknown 204.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/351279915 historic=castle Q9705508 7 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.59588/-7.52633) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=4; wikidata:Q9705508 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 244 elements); data/traces/castelo-de-montalvao-q9705508.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
