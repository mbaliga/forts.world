# Stadtbefestigung Blankenburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-blankenburg-q51875127` |
| Coordinates | 51.78694, 10.95722 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.78694/10.95722)) |
| Wikidata | [Q51875127](https://www.wikidata.org/wiki/Q51875127) (CC0) |
| Wikidata class | fort |
| Types | city fortifications |
| Administrative area | Blankenburg |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.rettung-schloss-blankenburg.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, road 100, water 1, building 90, waterway 2, wall 3, zone 2, retaining-wall 1).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 6, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1020141 historic=castle Q878064 176 m from ledger point
- origin moved 180 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.78694/10.95722) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; city fortifications; sitelinks=2; wikidata:Q51875127 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/stadtbefestigung-blankenburg-q51875127.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
