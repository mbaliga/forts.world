# Stadtmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtmauer-q41327298` |
| Coordinates | 50.45812, 10.23223 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.45812/10.23223)) |
| Wikidata | [Q41327298](https://www.wikidata.org/wiki/Q41327298) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Ostheim vor der Rhön |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, marker 3, road 85, wall 2, building 262, waterway 2, zone 2).

Evidence: documented 0, mapped 357, inferred 0, derived 0; heights documented 9, inferred 0, unknown 255.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/248333619 historic=yes 125 m from ledger point
- origin moved 128 m from the ledger point to the centre of the mapped site
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.45812/10.23223) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q41327298 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 357 elements); data/traces/stadtmauer-q41327298.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
