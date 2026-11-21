# Palace of the Shirvanshahs

> Azerbaijan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-the-shirvanshahs-q338889` |
| Coordinates | 40.36618, 49.83315 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.36618/49.83315)) |
| Wikidata | [Q338889](https://www.wikidata.org/wiki/Q338889) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace |
| Administrative area | Sabail raion |
| Inception | 1500 |
| UNESCO WHC id | 958-001 |
| Wikipedia language editions | 50 |
| OSM `historic` | castle |
| OSM `website` | https://guide.icherisheher.az/ru |

## What the model contains

Tier **T1**, status `outline+walls`, 398 elements (outline 1, marker 2, road 159, building 221, zone 8, water 5, wall 1, retaining-wall 1).

Evidence: documented 0, mapped 398, inferred 0, derived 0; heights documented 44, inferred 0, unknown 179.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/299450008 historic=castle Q338889 6 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- 328 DEM cells below -3 m (bathymetry) clamped to -3 m
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.36618/49.83315) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace; sitelinks=50; wikidata:Q338889 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 398 elements); data/traces/palace-of-the-shirvanshahs-q338889.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/azerbaijan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
