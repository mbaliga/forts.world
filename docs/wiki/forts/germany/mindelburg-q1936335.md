# Mindelburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mindelburg-q1936335` |
| Coordinates | 48.03645, 10.48449 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.03645/10.48449)) |
| Wikidata | [Q1936335](https://www.wikidata.org/wiki/Q1936335) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|built structure |
| Administrative area | Mindelheim |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 139 elements (outline 1, marker 2, waterway 4, road 73, building 28, water 1, zone 18, wall 10, retaining-wall 2).

Evidence: documented 0, mapped 139, inferred 0, derived 0; heights documented 2, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/496512254 historic=castle Q1936335 21 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.03645/10.48449) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|built structure; sitelinks=3; wikidata:Q1936335 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 139 elements); data/traces/mindelburg-q1936335.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
