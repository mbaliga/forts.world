# Schloss Dobersberg

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-dobersberg-q28050623` |
| Coordinates | 48.91628, 15.32146 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.91628/15.32146)) |
| Wikidata | [Q28050623](https://www.wikidata.org/wiki/Q28050623) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Dobersberg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, marker 1, road 68, waterway 3, building 137, retaining-wall 1, wall 4, water 2, zone 38).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 0, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14479973 historic=castle Q28050623 10 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.91628/15.32146) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=2; wikidata:Q28050623 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/schloss-dobersberg-q28050623.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
