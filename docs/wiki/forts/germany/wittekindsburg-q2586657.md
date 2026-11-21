# Wittekindsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wittekindsburg-q2586657` |
| Coordinates | 52.3262, 8.0833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.3262/8.0833)) |
| Wikidata | [Q2586657](https://www.wikidata.org/wiki/Q2586657) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Wallenhorst |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 4 |
| OSM `description` | Ruinen einer frühmittelalterlichen Burganlage mit Haupt- und Vorburg |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 69 elements (outline 1, marker 3, road 35, waterway 2, zone 12, building 8, water 2, wall 6).

Evidence: documented 0, mapped 69, inferred 0, derived 0; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/948410594 historic=archaeological_site Q2586657 57 m from ledger point
- origin moved 58 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.3262/8.0833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=2; wikidata:Q2586657 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 69 elements); data/traces/wittekindsburg-q2586657.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
