# Werk XXVIII

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `werk-xxviii-q108123730` |
| Coordinates | 48.39256, 9.98758 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.39256/9.98758)) |
| Wikidata | [Q108123730](https://www.wikidata.org/wiki/Q108123730) (CC0) |
| Wikidata class | fortification |
| Types | battery tower\|defence work |
| Administrative area | Ulm |
| Inception | 1855 |
| Wikipedia language editions | 1 |
| OSM `website` | https://www.atarimuseum.de/festung/ul28.html |

## What the model contains

Tier **T1**, status `outline+walls`, 128 elements (outline 1, marker 1, road 181, water 1, waterway 3, building 64, wall 24, zone 6, retaining-wall 4).

Evidence: documented 0, mapped 128, inferred 0, derived 0; heights documented 6, inferred 0, unknown 36.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/132331022 historic=(none; chosen by its Wikidata id) Q108123730 3 m from ledger point
- pruned to the outline plus 150 m: 285 -> 156 elements
- roads capped: kept the 80 longest of 108 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.39256/9.98758) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; battery tower\|defence work; sitelinks=1; wikidata:Q108123730 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 282 elements); data/traces/werk-xxviii-q108123730.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 128 elements; outline osm:way/132331022 historic=(none; chosen by its Wikidata id) Q108123730 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
