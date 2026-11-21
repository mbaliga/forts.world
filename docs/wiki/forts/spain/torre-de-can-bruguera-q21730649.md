# Torre de Can Bruguera

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-can-bruguera-q21730649` |
| Coordinates | 41.2447, 1.78868 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.2447/1.78868)) |
| Wikidata | [Q21730649](https://www.wikidata.org/wiki/Q21730649) (CC0) |
| Wikidata class | fort |
| Types | masia\|fortified house |
| Administrative area | Sant Pere de Ribes |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `website` | https://camiramaderdemarina.cat/ |

## What the model contains

Tier **T1**, status `location-only`, 77 elements (marker 2, road 60, zone 4, building 59, waterway 1).

Evidence: documented 0, mapped 77, inferred 0, derived 0; heights documented 6, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15557473 historic=yes Q51881900 66957 m from ledger point
- site is a route relation of 1423 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (46024 x 139262 m)
- present-day buildings capped: kept the 30 nearest the outline centre of 59 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 60 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.2447/1.78868) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; masia\|fortified house; sitelinks=1; wikidata:Q21730649 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 77 elements); data/traces/torre-de-can-bruguera-q21730649.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
