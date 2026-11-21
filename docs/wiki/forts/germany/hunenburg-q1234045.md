# Hünenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hunenburg-q1234045` |
| Coordinates | 51.9853, 9.27178 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.9853/9.27178)) |
| Wikidata | [Q1234045](https://www.wikidata.org/wiki/Q1234045) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Bad Pyrmont |
| Designations | architectural heritage monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 105 elements (outline 1, marker 2, road 43, zone 4, building 54).

Evidence: documented 0, mapped 105, inferred 0, derived 0; heights documented 0, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1254973101 historic=yes 276 m from ledger point
- origin moved 275 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.9853/9.27178) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q1234045 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 105 elements); data/traces/hunenburg-q1234045.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
