# Castel Sant'Angelo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-sant-angelo-q3662141` |
| Coordinates | 37.10081, 13.93184 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.10081/13.93184)) |
| Wikidata | [Q3662141](https://www.wikidata.org/wiki/Q3662141) (CC0) |
| Wikidata class | castle |
| Types | castle\|military museum building |
| Administrative area | Licata |
| Inception | 1583 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 219 elements (outline 1, road 31, zone 4, building 96, coastline 1, wall 77, retaining-wall 7, cliff 2).

Evidence: documented 0, mapped 219, inferred 0, derived 0; heights documented 0, inferred 0, unknown 180.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4514667 historic=castle Q3662141 12 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 10 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.10081/13.93184) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military museum building; sitelinks=3; wikidata:Q3662141 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 219 elements); data/traces/castel-sant-angelo-q3662141.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
