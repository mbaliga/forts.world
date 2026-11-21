# Kitsuki Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kitsuki-castle-q11528831` |
| Coordinates | 33.41475, 131.62767 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.41475/131.62767)) |
| Wikidata | [Q11528831](https://www.wikidata.org/wiki/Q11528831) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Kitsuki |
| Inception | 1394 |
| Wikipedia language editions | 6 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline-only`, 82 elements (outline 1, marker 2, waterway 2, road 8, building 68, water 1).

Evidence: documented 0, mapped 82, inferred 0, derived 0; heights documented 0, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/153178924 historic=building 694 m from ledger point
- origin moved 695 m from the ledger point to the outline centroid
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.41475/131.62767) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=6; wikidata:Q11528831 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 82 elements); data/traces/kitsuki-castle-q11528831.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
