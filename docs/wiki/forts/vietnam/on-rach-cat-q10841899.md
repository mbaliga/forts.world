# Đồn Rạch Cát

> Vietnam · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `on-rach-cat-q10841899` |
| Coordinates | 10.50583, 106.72778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/10.50583/106.72778)) |
| Wikidata | [Q10841899](https://www.wikidata.org/wiki/Q10841899) (CC0) |
| Wikidata class | fortification |
| Types | coastal battery |
| Administrative area | Cần Đước |
| Inception | 1903 |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 10 elements (outline 1, water 3, road 3, building 3).

Evidence: documented 0, mapped 10, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15999853 historic=fort 42 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- 31 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/10.50583/106.72778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal battery; sitelinks=5; wikidata:Q10841899 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 10 elements); data/traces/on-rach-cat-q10841899.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/vietnam.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
