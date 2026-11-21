# Fort of Santa Catarina

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-santa-catarina-q5472493` |
| Coordinates | 37.11634, -8.52959 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.11634/-8.52959)) |
| Wikidata | [Q5472493](https://www.wikidata.org/wiki/Q5472493) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Portimão |
| Inception | 1633 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 151 elements (outline 1, road 73, waterway 1, building 55, zone 9, wall 4, retaining-wall 6, coastline 1).

Evidence: documented 0, mapped 151, inferred 0, derived 0; heights documented 0, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1144636066 historic=citywalls 23 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 22 m from the ledger point to the outline centroid
- 40 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.11634/-8.52959) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=4; wikidata:Q5472493 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 151 elements); data/traces/fort-of-santa-catarina-q5472493.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
