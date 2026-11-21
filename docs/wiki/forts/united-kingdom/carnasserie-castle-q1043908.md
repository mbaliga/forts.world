# Carnasserie Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carnasserie-castle-q1043908` |
| Coordinates | 56.1515, -5.4809 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.1515/-5.4809)) |
| Wikidata | [Q1043908](https://www.wikidata.org/wiki/Q1043908) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Designations | scheduled monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | http://www.historic-scotland.gov.uk/propertyresults/propertydetail.htm?PropID=PL_056 |

## What the model contains

Tier **T1**, status `outline+walls`, 15 elements (outline 1, waterway 1, road 10, wall 2, zone 1).

Evidence: documented 0, mapped 15, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5332921 historic=castle Q1043908 36 m from ledger point
- origin moved 38 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.1515/-5.4809) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=8; wikidata:Q1043908 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 15 elements); data/traces/carnasserie-castle-q1043908.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
