# City walls of Sabbioneta

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-sabbioneta-q60837187` |
| Coordinates | 44.99441, 10.49157 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.99441/10.49157)) |
| Wikidata | [Q60837187](https://www.wikidata.org/wiki/Q60837187) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Sabbioneta |
| Inception | 1554 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, marker 5, road 56, building 220, wall 19, waterway 8, zone 40).

Evidence: documented 0, mapped 350, inferred 0, derived 0; heights documented 227, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/574051183 historic=citywalls 107 m from ledger point
- origin moved 103 m from the ledger point to the centre of the mapped site
- 1749 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.99441/10.49157) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=2; wikidata:Q60837187 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 350 elements); data/traces/city-walls-of-sabbioneta-q60837187.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
