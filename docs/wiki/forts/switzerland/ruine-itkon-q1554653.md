# Ruine Itkon

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ruine-itkon-q1554653` |
| Coordinates | 47.4754, 7.82783 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.4754/7.82783)) |
| Wikidata | [Q1554653](https://www.wikidata.org/wiki/Q1554653) (CC0) |
| Wikidata class | ruin |
| Types | castle\|castle ruin |
| Administrative area | Canton of Basel-Landschaft |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, marker 1, road 21, wall 9, cliff 4).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33054997 historic=castle Q1011037 102 m from ledger point
- origin moved 102 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.4754/7.82783) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle\|castle ruin; sitelinks=2; wikidata:Q1554653 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/ruine-itkon-q1554653.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
