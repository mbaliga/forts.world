# Dali Old Town

> China · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dali-old-town-q126678744` |
| Coordinates | 25.69391, 100.16108 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.69391/100.16108)) |
| Wikidata | [Q126678744](https://www.wikidata.org/wiki/Q126678744) (CC0) |
| Wikidata class | fort |
| Types | fortified town |
| Administrative area | Dali Town |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 161 elements (outline 1, marker 2, road 92, zone 11, wall 3, waterway 3, building 48).

Evidence: documented 0, mapped 161, inferred 0, derived 0; heights documented 0, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/712293247 historic=citywalls 387 m from ledger point
- origin moved 386 m from the ledger point to the outline centroid
- 30 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.69391/100.16108) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified town; sitelinks=3; wikidata:Q126678744 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 161 elements); data/traces/dali-old-town-q126678744.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
