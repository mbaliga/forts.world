# Wasenbourg

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasenbourg-q1455591` |
| Coordinates | 48.96028, 7.61639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.96028/7.61639)) |
| Wikidata | [Q1455591](https://www.wikidata.org/wiki/Q1455591) (CC0) |
| Wikidata class | castle |
| Types | promontory\|rock castle |
| Administrative area | Niederbronn-les-Bains |
| Inception | 1272 |
| Designations | classified historical monument |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, road 17, zone 2, waterway 1, wall 10, cliff 1).

Evidence: documented 0, mapped 32, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/192101108 historic=castle Q1455591 18 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.96028/7.61639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; promontory\|rock castle; sitelinks=4; wikidata:Q1455591 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/wasenbourg-q1455591.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
