# Oerscher Hof

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oerscher-hof-q123463925` |
| Coordinates | 51.95814, 7.62602 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.95814/7.62602)) |
| Wikidata | [Q123463925](https://www.wikidata.org/wiki/Q123463925) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|no\|built structure |
| Administrative area | Münster |
| Inception | 1749 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 282 elements (outline 1, marker 3, road 157, water 2, building 311, wall 5, waterway 1).

Evidence: documented 0, mapped 282, inferred 0, derived 0; heights documented 22, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/172707608 historic=castle Q123463925 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 311 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 157 mapped (trace size budget); minor lanes are not drawn
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.95814/7.62602) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|no\|built structure; sitelinks=2; wikidata:Q123463925 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 282 elements); data/traces/oerscher-hof-q123463925.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
