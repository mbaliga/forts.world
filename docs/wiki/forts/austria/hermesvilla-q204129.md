# Hermesvilla

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hermesvilla-q204129` |
| Coordinates | 48.17069, 16.24616 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.17069/16.24616)) |
| Wikidata | [Q204129](https://www.wikidata.org/wiki/Q204129) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|villa\|museum |
| Administrative area | Hietzing |
| Inception | 1886 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.wienmuseum.at/hermesvilla |

## What the model contains

Tier **T1**, status `outline+walls`, 127 elements (outline 1, zone 13, road 93, building 11, waterway 4, water 1, wall 4).

Evidence: documented 0, mapped 127, inferred 0, derived 0; heights documented 6, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26385157 historic=castle Q204129 3 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.17069/16.24616) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|villa\|museum; sitelinks=17; wikidata:Q204129 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 127 elements); data/traces/hermesvilla-q204129.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
