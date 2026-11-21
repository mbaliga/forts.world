# Čertův hrádek

> Czechia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `certuv-hradek-q11175471` |
| Coordinates | 49.4992, 16.91 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.4992/16.91)) |
| Wikidata | [Q11175471](https://www.wikidata.org/wiki/Q11175471) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Malé Hradisko |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |
| OSM `description` | Rozestavěná dálnice z období protektorátu. Práce byly přerušeny v roce 1942 kvůli špatné vál. situaci Německa. Některé úseky byly ale dostavěny a slouží dopravě. |

## What the model contains

Tier **T1**, status `location-only`, 55 elements (marker 2, road 43, zone 1, waterway 3, building 6).

Evidence: documented 0, mapped 55, inferred 0, derived 0; heights documented 3, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1860416 historic=yes 47326 m from ledger point
- site is a route relation of 140 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (161117 x 43704 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.4992/16.91) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q11175471 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/certuv-hradek-q11175471.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
