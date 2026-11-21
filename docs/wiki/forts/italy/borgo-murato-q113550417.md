# Borgo murato

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `borgo-murato-q113550417` |
| Coordinates | 43.39034, 11.22352 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.39034/11.22352)) |
| Wikidata | [Q113550417](https://www.wikidata.org/wiki/Q113550417) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Monteriggioni |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 153 elements (outline 1, marker 2, road 84, zone 14, waterway 2, building 43, wall 6).

Evidence: documented 0, mapped 153, inferred 0, derived 0; heights documented 1, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19237169 historic=citywalls Q55170433 42 m from ledger point
- origin moved 42 m from the ledger point to the centre of the mapped site
- 28 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.39034/11.22352) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113550417 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 153 elements); data/traces/borgo-murato-q113550417.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
