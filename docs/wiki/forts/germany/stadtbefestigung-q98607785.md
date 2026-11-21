# Stadtbefestigung

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-q98607785` |
| Coordinates | 49.29985, 10.40815 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.29985/10.40815)) |
| Wikidata | [Q98607785](https://www.wikidata.org/wiki/Q98607785) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Leutershausen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `location-only`, 304 elements (marker 2, road 185, waterway 12, water 3, building 538, wall 9, zone 8).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 0, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21371891 historic=citywalls Q98607785 13 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (261 x 215 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 538 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 185 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.29985/10.40815) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q98607785 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 304 elements); data/traces/stadtbefestigung-q98607785.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
