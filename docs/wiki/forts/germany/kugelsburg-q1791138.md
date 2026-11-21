# Kugelsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kugelsburg-q1791138` |
| Coordinates | 51.4136, 9.13028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.4136/9.13028)) |
| Wikidata | [Q1791138](https://www.wikidata.org/wiki/Q1791138) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Volkmarsen |
| Inception | 1225 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 82 elements (outline 1, marker 1, road 51, waterway 1, building 11, zone 11, cliff 1, retaining-wall 4, wall 1).

Evidence: documented 0, mapped 82, inferred 0, derived 0; heights documented 2, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/57811860 historic=castle Q1791138 20 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.4136/9.13028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q1791138 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 82 elements); data/traces/kugelsburg-q1791138.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
