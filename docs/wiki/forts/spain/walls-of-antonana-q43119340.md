# Walls of Antoñana

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walls-of-antonana-q43119340` |
| Coordinates | 42.69378, -2.397 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.69378/-2.397)) |
| Wikidata | [Q43119340](https://www.wikidata.org/wiki/Q43119340) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall\|city walls\|monument |
| Administrative area | Antoñana |
| Inception | 1500 |
| Designations | Basque government heritage site\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 231 elements (marker 1, road 118, waterway 5, building 98, zone 9).

Evidence: documented 0, mapped 231, inferred 0, derived 0; heights documented 0, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6076801 historic=yes Q39080972 11038 m from ledger point
- site is a route relation of 542 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (24829 x 83197 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.69378/-2.397) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall\|city walls\|monument; sitelinks=3; wikidata:Q43119340 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/walls-of-antonana-q43119340.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
