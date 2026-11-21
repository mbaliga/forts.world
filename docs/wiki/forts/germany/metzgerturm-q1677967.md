# Metzgerturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `metzgerturm-q1677967` |
| Coordinates | 48.396, 9.99382 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.396/9.99382)) |
| Wikidata | [Q1677967](https://www.wikidata.org/wiki/Q1677967) (CC0) |
| Wikidata class | fortification |
| Types | tower\|city gate\|inclined tower |
| Administrative area | Ulm |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 185 elements (outline 1, marker 30, road 348, water 2, building 250, waterway 8, wall 17, retaining-wall 3, zone 12).

Evidence: documented 0, mapped 185, inferred 0, derived 0; heights documented 18, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/226360881 historic=city_gate Q1677967 34 m from ledger point
- pruned to the outline plus 150 m: 671 -> 324 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 140 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 139 mapped (trace size budget); minor lanes are not drawn
- origin moved 34 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.396/9.99382) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|city gate\|inclined tower; sitelinks=2; wikidata:Q1677967 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 321 elements); data/traces/metzgerturm-q1677967.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 185 elements; outline osm:way/226360881 historic=city_gate Q1677967 34 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
