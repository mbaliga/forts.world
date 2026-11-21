# Unteres Tor (Bietigheim)

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `unteres-tor-bietigheim-q96354664` |
| Coordinates | 48.95976, 9.12886 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.95976/9.12886)) |
| Wikidata | [Q96354664](https://www.wikidata.org/wiki/Q96354664) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Bietigheim-Bissingen |
| Inception | 1400 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.bietigheim-bissingen.de/deutsch/stadt-und-tourismus/sehenswertes/sehenswuerdigkeiten/bietigheimer-schloss/ |

## What the model contains

Tier **T1**, status `location-only`, 298 elements (marker 4, road 310, wall 8, building 303, water 2, retaining-wall 8, waterway 4, zone 2).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 11, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1757559 historic=castle Q15844434 348 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (55 x 54 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 303 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 310 mapped (trace size budget); minor lanes are not drawn
- origin moved 350 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.95976/9.12886) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q96354664 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 298 elements); data/traces/unteres-tor-bietigheim-q96354664.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
