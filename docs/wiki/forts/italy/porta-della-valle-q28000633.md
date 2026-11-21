# Porta della Valle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-della-valle-q28000633` |
| Coordinates | 42.55733, 12.41075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.55733/12.41075)) |
| Wikidata | [Q28000633](https://www.wikidata.org/wiki/Q28000633) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Amelia |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 224 elements (outline 1, marker 1, road 138, building 72, wall 8, zone 2, waterway 1).

Evidence: documented 0, mapped 224, inferred 0, derived 0; heights documented 3, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/211745766 historic=citywalls 652 m from ledger point
- origin moved 652 m from the ledger point to the centre of the mapped site
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.55733/12.41075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q28000633 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 224 elements); data/traces/porta-della-valle-q28000633.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
