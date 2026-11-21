# Fort Gorgast

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-gorgast-q50774` |
| Coordinates | 52.5605, 14.5452 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.5605/14.5452)) |
| Wikidata | [Q50774](https://www.wikidata.org/wiki/Q50774) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Küstriner Vorland |
| Designations | architectural heritage monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.fort-gorgast.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 121 elements (outline 1, road 48, building 57, water 1, zone 11, waterway 1, wall 2).

Evidence: documented 0, mapped 121, inferred 0, derived 0; heights documented 1, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/115918245 historic=castle Q50774 11 m from ledger point
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.5605/14.5452) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q50774 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 121 elements); data/traces/fort-gorgast-q50774.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
