# Legazpi dorrea

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `legazpi-dorrea-q12262063` |
| Coordinates | 43.08652, -2.31959 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.08652/-2.31959)) |
| Wikidata | [Q12262063](https://www.wikidata.org/wiki/Q12262063) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower\|castle\|tower house\|birth house\|monument |
| Administrative area | Zumarraga |
| Designations | Basque government heritage site\|bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 313 elements (marker 2, building 297, road 610, zone 8, waterway 2, wall 23, water 1, retaining-wall 7).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 2, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6076801 historic=yes Q39080972 33290 m from ledger point
- site is a route relation of 542 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (24672 x 83197 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 297 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 610 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.08652/-2.31959) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower\|castle\|tower house\|birth house\|monument; sitelinks=2; wikidata:Q12262063 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 313 elements); data/traces/legazpi-dorrea-q12262063.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
