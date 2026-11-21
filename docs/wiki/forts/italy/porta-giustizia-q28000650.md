# Porta Giustizia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-giustizia-q28000650` |
| Coordinates | 40.41801, 15.00444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.41801/15.00444)) |
| Wikidata | [Q28000650](https://www.wikidata.org/wiki/Q28000650) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Capaccio Paestum |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 7, road 73, zone 33, waterway 2, wall 652, building 30, retaining-wall 4).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 1, inferred 0, unknown 238.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/411670712 historic=citywalls 106 m from ledger point
- pruned to the outline plus 150 m: 802 -> 326 elements
- origin moved 105 m from the ledger point to the centre of the mapped site
- 441 DEM cells below -3 m (bathymetry) clamped to -3 m
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.41801/15.00444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q28000650 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/porta-giustizia-q28000650.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
