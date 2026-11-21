# Rastatt Fortress

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rastatt-fortress-q1408958` |
| Coordinates | 48.8583, 8.21056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8583/8.21056)) |
| Wikidata | [Q1408958](https://www.wikidata.org/wiki/Q1408958) (CC0) |
| Wikidata class | fort |
| Types | Fortresses of the German Confederation |
| Administrative area | Rastatt |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `website` | https://www.schloss-rastatt.de/ |

## What the model contains

Tier **T1**, status `location-only`, 314 elements (marker 2, road 303, building 219, waterway 1, water 9, wall 5, zone 24, retaining-wall 3).

Evidence: documented 0, mapped 314, inferred 0, derived 0; heights documented 56, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2828786 historic=castle Q315030 424 m from ledger point
- site is a site relation of 9 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (157 x 155 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 219 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 303 mapped (trace size budget); minor lanes are not drawn
- origin moved 426 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8583/8.21056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; Fortresses of the German Confederation; sitelinks=7; wikidata:Q1408958 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 310 elements); data/traces/rastatt-fortress-q1408958.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
