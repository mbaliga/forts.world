# Marly Palace

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marly-palace-q4282306` |
| Coordinates | 59.88873, 29.89634 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.88873/29.89634)) |
| Wikidata | [Q4282306](https://www.wikidata.org/wiki/Q4282306) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|museum building |
| Administrative area | Saint Petersburg |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 203 elements (outline 1, marker 3, water 4, road 156, building 10, wall 7, waterway 5, zone 14, coastline 1, retaining-wall 2).

Evidence: documented 0, mapped 203, inferred 0, derived 1; heights documented 5, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29359671 historic=castle Q4282306 2 m from ledger point
- sea-0: DEM check failed {"cells":39,"medianInside":9,"medianOutside":7.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.88873/29.89634) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|museum building; sitelinks=4; wikidata:Q4282306 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 203 elements); data/traces/marly-palace-q4282306.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
