# Porta Ovile

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-ovile-q5475719` |
| Coordinates | 43.32366, 11.3329 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.32366/11.3329)) |
| Wikidata | [Q5475719](https://www.wikidata.org/wiki/Q5475719) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Siena |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 363 elements (outline 1, road 207, building 103, wall 21, retaining-wall 26, zone 4).

Evidence: documented 0, mapped 363, inferred 0, derived 0; heights documented 25, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17449507 historic=citywalls 55 m from ledger point
- origin moved 56 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.32366/11.3329) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q5475719 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 363 elements); data/traces/porta-ovile-q5475719.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
