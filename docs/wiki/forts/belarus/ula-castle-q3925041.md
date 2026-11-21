# Ula Castle

> Belarus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ula-castle-q3925041` |
| Coordinates | 55.23314, 29.23962 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.23314/29.23962)) |
| Wikidata | [Q3925041](https://www.wikidata.org/wiki/Q3925041) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Uła |
| Inception | 1563 |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |
| OSM `website` | https://catholicvitebsk.by/parish/%d1%83%d0%bb%d0%b0-%d0%bf%d0%b0%d1%80%d0%b0%d1%84%d1%96%d1%8f-%d0%bd%d0%b0%d0%b9%d1%81%d0%b2%d1%8f%d1%86%d0%b5%d0%b9%d1%88%d0%b0%d0%b9-%d1%82%d1%80%d0%be%d0%b9%d1%86%d1%8b/ |

## What the model contains

Tier **T1**, status `outline-only`, 35 elements (outline 1, waterway 2, road 6, building 25, zone 1).

Evidence: documented 0, mapped 35, inferred 0, derived 0; heights documented 23, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/370563694 historic=yes 44 m from ledger point
- origin moved 44 m from the ledger point to the outline centroid
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.23314/29.23962) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q3925041 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 35 elements); data/traces/ula-castle-q3925041.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belarus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
