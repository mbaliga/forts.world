# Rappenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rappenburg-q1660918` |
| Coordinates | 47.86972, 8.74493 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.86972/8.74493)) |
| Wikidata | [Q1660918](https://www.wikidata.org/wiki/Q1660918) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Engen |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `description` | 3 Glocken |
| OSM `website` | https://www.ebfr-glocken.de/gesamtkarte-2/detail/glocke/id/607-kath-filialkirche-st-ulrich-in-engen-zimmerholz/?gm=1 |

## What the model contains

Tier **T1**, status `outline+walls`, 228 elements (outline 1, marker 7, zone 14, road 56, building 134, waterway 15, wall 1).

Evidence: documented 0, mapped 228, inferred 0, derived 0; heights documented 1, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/601376428 historic=yes 336 m from ledger point
- origin moved 337 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.86972/8.74493) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q1660918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 228 elements); data/traces/rappenburg-q1660918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
