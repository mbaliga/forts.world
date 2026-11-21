# Arc of Granadas

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arc-of-granadas-q3895888` |
| Coordinates | 37.17583, -3.59306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.17583/-3.59306)) |
| Wikidata | [Q3895888](https://www.wikidata.org/wiki/Q3895888) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|monument |
| Administrative area | Granada |
| Designations | bien de interés cultural |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 8, road 147, zone 8, building 255, waterway 3, wall 12, retaining-wall 4, cliff 1).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 113, inferred 0, unknown 23.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20682810 historic=castle Q43115859 45 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 255 mapped (trace size budget); the rest of the town is not drawn
- origin moved 45 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.17583/-3.59306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|monument; sitelinks=8; wikidata:Q3895888 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/arc-of-granadas-q3895888.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
