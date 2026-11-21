# Stadtmauer Güstrow

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-gustrow-q105947253` |
| Coordinates | 53.79328, 12.17541 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.79328/12.17541)) |
| Wikidata | [Q105947253](https://www.wikidata.org/wiki/Q105947253) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Güstrow |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Renaissanceschloss Güstrow |
| OSM `website` | https://www.mv-schloesser.de/de/location/schloss-guestrow/ |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 12, road 157, building 262, waterway 7, wall 11, water 2, zone 1, retaining-wall 3).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 73, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32319247 historic=castle Q2241369 293 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 157 mapped (trace size budget); minor lanes are not drawn
- origin moved 293 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.79328/12.17541) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q105947253 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/stadtmauer-gustrow-q105947253.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
