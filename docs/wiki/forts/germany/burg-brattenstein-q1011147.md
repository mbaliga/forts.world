# Burg Brattenstein

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-brattenstein-q1011147` |
| Coordinates | 49.50843, 9.96549 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.50843/9.96549)) |
| Wikidata | [Q1011147](https://www.wikidata.org/wiki/Q1011147) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Röttingen |
| Inception | 1230 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 217 elements (outline 1, marker 4, road 79, waterway 4, wall 5, zone 2, water 2, building 378).

Evidence: documented 0, mapped 217, inferred 0, derived 0; heights documented 1, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/384316756 historic=yes 156 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 378 mapped (trace size budget); the rest of the town is not drawn
- origin moved 156 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.50843/9.96549) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1011147 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 217 elements); data/traces/burg-brattenstein-q1011147.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
