# Rofalco

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rofalco-q3940062` |
| Coordinates | 42.57028, 11.71306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.57028/11.71306)) |
| Wikidata | [Q3940062](https://www.wikidata.org/wiki/Q3940062) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|fort |
| Administrative area | Farnese |
| Inception | -0350 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, road 5, waterway 1).

Evidence: documented 0, mapped 7, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/485570958 historic=archaeological_site Q3940062 44 m from ledger point
- origin moved 49 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.57028/11.71306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|fort; sitelinks=4; wikidata:Q3940062 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 7 elements); data/traces/rofalco-q3940062.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
