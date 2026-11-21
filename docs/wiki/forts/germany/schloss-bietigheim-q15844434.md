# Schloss Bietigheim

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-bietigheim-q15844434` |
| Coordinates | 48.9593, 9.12412 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.9593/9.12412)) |
| Wikidata | [Q15844434](https://www.wikidata.org/wiki/Q15844434) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Bietigheim-Bissingen |
| Inception | 1546 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.bietigheim-bissingen.de/deutsch/stadt-und-tourismus/sehenswertes/sehenswuerdigkeiten/bietigheimer-schloss/ |

## What the model contains

Tier **T1**, status `location-only`, 298 elements (marker 4, road 310, wall 8, building 304, water 2, retaining-wall 8, waterway 4, zone 2).

Evidence: documented 0, mapped 298, inferred 0, derived 0; heights documented 11, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1757559 historic=castle Q15844434 4 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (55 x 54 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 304 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 310 mapped (trace size budget); minor lanes are not drawn
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.9593/9.12412) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q15844434 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 298 elements); data/traces/schloss-bietigheim-q15844434.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
