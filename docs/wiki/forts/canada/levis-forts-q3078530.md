# Lévis Forts

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `levis-forts-q3078530` |
| Coordinates | 46.8145, -71.158 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.8145/-71.158)) |
| Wikidata | [Q3078530](https://www.wikidata.org/wiki/Q3078530) (CC0) |
| Wikidata class | fort |
| Types | fortification\|military museum |
| Administrative area | Lévis |
| Inception | 1865 |
| Designations | national historic site of Canada |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 117 elements (outline 1, marker 2, road 36, building 72, wall 4, zone 1).

Evidence: documented 0, mapped 117, inferred 0, derived 0; heights documented 0, inferred 0, unknown 77.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103869685 historic=fort 5 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.8145/-71.158) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|military museum; sitelinks=3; wikidata:Q3078530 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 117 elements); data/traces/levis-forts-q3078530.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
