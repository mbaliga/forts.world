# Kaja Castle Ruins

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kaja-castle-ruins-q1012592` |
| Coordinates | 48.8267, 15.8881 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8267/15.8881)) |
| Wikidata | [Q1012592](https://www.wikidata.org/wiki/Q1012592) (CC0) |
| Wikidata class | ruin |
| Types | museum\|ruins\|rocca |
| Administrative area | Hardegg |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 6 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 93 elements (outline 1, marker 2, road 48, wall 22, cliff 2, building 9, zone 3, waterway 4, retaining-wall 1).

Evidence: documented 0, mapped 93, inferred 0, derived 0; heights documented 12, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1563600562 historic=citywalls 8 m from ledger point
- origin moved 8 m from the ledger point to the outline centroid
- 98 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8267/15.8881) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; museum\|ruins\|rocca; sitelinks=6; wikidata:Q1012592 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 93 elements); data/traces/kaja-castle-ruins-q1012592.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
