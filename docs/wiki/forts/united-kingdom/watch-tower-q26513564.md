# Watch Tower

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `watch-tower-q26513564` |
| Coordinates | 54.07399, -3.17542 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.07399/-3.17542)) |
| Wikidata | [Q26513564](https://www.wikidata.org/wiki/Q26513564) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|observation tower |
| Administrative area | Barrow-in-Furness |
| Designations | Grade II listed building |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `website` | https://co-curate.ncl.ac.uk/watch-tower-former-customs-house-roa-island/ |

## What the model contains

Tier **T1**, status `outline+walls`, 120 elements (outline 1, road 32, building 52, waterway 1, wall 28, zone 2, coastline 3, water 1).

Evidence: documented 0, mapped 120, inferred 0, derived 1; heights documented 0, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/676617620 historic=castle Q26513564 1 m from ledger point
- sea-0: DEM check ok {"cells":287,"medianInside":-0.2,"medianOutside":6.6}
- 97 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.07399/-3.17542) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|observation tower; sitelinks=0; wikidata:Q26513564 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 120 elements); data/traces/watch-tower-q26513564.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
