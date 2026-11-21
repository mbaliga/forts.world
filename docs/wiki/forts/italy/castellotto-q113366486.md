# Castellotto

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castellotto-q113366486` |
| Coordinates | 44.56362, 7.48292 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.56362/7.48292)) |
| Wikidata | [Q113366486](https://www.wikidata.org/wiki/Q113366486) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Costigliole Saluzzo |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 387 elements (outline 1, road 75, building 290, zone 8, wall 4, retaining-wall 7, water 1, waterway 1).

Evidence: documented 0, mapped 387, inferred 0, derived 0; heights documented 0, inferred 0, unknown 301.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/384949992 historic=castle 6 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.56362/7.48292) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q113366486 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 387 elements); data/traces/castellotto-q113366486.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
