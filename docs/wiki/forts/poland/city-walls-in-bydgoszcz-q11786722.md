# City walls in Bydgoszcz

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-in-bydgoszcz-q11786722` |
| Coordinates | 53.12035, 17.99983 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.12035/17.99983)) |
| Wikidata | [Q11786722](https://www.wikidata.org/wiki/Q11786722) (CC0) |
| Wikidata class | fortification |
| Types | architectural heritage monument\|city walls |
| Administrative area | Bydgoszcz |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, marker 8, waterway 4, road 247, building 292, wall 13, zone 56, cliff 2, water 2).

Evidence: documented 0, mapped 357, inferred 0, derived 0; heights documented 14, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/385620660 historic=citywalls 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 292 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 247 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.12035/17.99983) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; architectural heritage monument\|city walls; sitelinks=2; wikidata:Q11786722 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 357 elements); data/traces/city-walls-in-bydgoszcz-q11786722.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
