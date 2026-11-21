# Schloss Friedrichsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-friedrichsburg-q1805328` |
| Coordinates | 49.62073, 12.34313 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.62073/12.34313)) |
| Wikidata | [Q1805328](https://www.wikidata.org/wiki/Q1805328) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|archaeological site |
| Administrative area | Vohenstrauß |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | http://www.friedrichsburg.de |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, road 54, building 142, wall 3, zone 2).

Evidence: documented 0, mapped 202, inferred 0, derived 0; heights documented 0, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/336973482 historic=castle Q1805328 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.62073/12.34313) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|archaeological site; sitelinks=3; wikidata:Q1805328 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 202 elements); data/traces/schloss-friedrichsburg-q1805328.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
