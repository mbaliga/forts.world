# Neurathen Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `neurathen-castle-q876135` |
| Coordinates | 50.9617, 14.0746 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.9617/14.0746)) |
| Wikidata | [Q876135](https://www.wikidata.org/wiki/Q876135) (CC0) |
| Wikidata class | castle |
| Types | rock castle |
| Administrative area | Lohmen |
| Inception | 1100 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `description` | Burgruine Altrathen, Am Grünbach 11 in Rathen |

## What the model contains

Tier **T1**, status `outline+walls`, 260 elements (outline 1, waterway 4, road 93, water 6, building 88, zone 26, cliff 28, retaining-wall 12, wall 2).

Evidence: documented 0, mapped 260, inferred 0, derived 0; heights documented 21, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/78327107 historic=castle Q49515590 527 m from ledger point
- origin moved 528 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.9617/14.0746) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; rock castle; sitelinks=6; wikidata:Q876135 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 260 elements); data/traces/neurathen-castle-q876135.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
