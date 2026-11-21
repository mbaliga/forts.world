# Schloss Grafenegg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-grafenegg-q2241259` |
| Coordinates | 48.42863, 15.74633 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.42863/15.74633)) |
| Wikidata | [Q2241259](https://www.wikidata.org/wiki/Q2241259) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum\|château |
| Administrative area | Grafenegg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.grafenegg.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 96 elements (outline 1, road 56, wall 5, building 23, waterway 8, zone 1, water 2).

Evidence: documented 0, mapped 96, inferred 0, derived 0; heights documented 5, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3593839 historic=castle Q2241259 3 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.42863/15.74633) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum\|château; sitelinks=6; wikidata:Q2241259 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 96 elements); data/traces/schloss-grafenegg-q2241259.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
