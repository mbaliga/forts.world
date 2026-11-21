# Brașov Fortress

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brasov-fortress-q733678` |
| Coordinates | 45.6493, 25.5919 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.6493/25.5919)) |
| Wikidata | [Q733678](https://www.wikidata.org/wiki/Q733678) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Brașov |
| Designations | Historic Monument |
| Wikipedia language editions | 6 |
| OSM `historic` | fortress |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 180 elements (outline 1, marker 1, road 47, zone 2, building 127, wall 1).

Evidence: documented 0, mapped 180, inferred 0, derived 0; heights documented 1, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29603043 historic=fortress Q733678 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.6493/25.5919) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=6; wikidata:Q733678 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 180 elements); data/traces/brasov-fortress-q733678.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
