# Stöckenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stockenburg-q1295159` |
| Coordinates | 49.0894, 9.88167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.0894/9.88167)) |
| Wikidata | [Q1295159](https://www.wikidata.org/wiki/Q1295159) (CC0) |
| Wikidata class | castle |
| Types | castle\|deserted castle site |
| Administrative area | Vellberg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 1, road 114, waterway 4, wall 13, building 153, zone 8, retaining-wall 8).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 42, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/246120004 historic=castle Q1014370 215 m from ledger point
- origin moved 215 m from the ledger point to the centre of the mapped site
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.0894/9.88167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|deserted castle site; sitelinks=1; wikidata:Q1295159 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/stockenburg-q1295159.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
