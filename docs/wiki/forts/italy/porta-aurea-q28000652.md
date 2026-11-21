# Porta Aurea

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-aurea-q28000652` |
| Coordinates | 40.42669, 15.00515 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.42669/15.00515)) |
| Wikidata | [Q28000652](https://www.wikidata.org/wiki/Q28000652) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Capaccio Paestum |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 155 elements (outline 1, marker 2, road 51, zone 36, building 34, wall 29, waterway 1).

Evidence: documented 0, mapped 155, inferred 0, derived 0; heights documented 0, inferred 0, unknown 64.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/411670714 historic=citywalls 80 m from ledger point
- origin moved 76 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.42669/15.00515) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q28000652 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 155 elements); data/traces/porta-aurea-q28000652.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
