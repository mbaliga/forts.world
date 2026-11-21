# Porta a Mare

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-a-mare-q55181408` |
| Coordinates | 42.81439, 10.33122 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.81439/10.33122)) |
| Wikidata | [Q55181408](https://www.wikidata.org/wiki/Q55181408) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Portoferraio |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 394 elements (outline 1, marker 12, road 156, building 121, wall 69, zone 21, retaining-wall 11, coastline 1, water 1).

Evidence: documented 0, mapped 394, inferred 0, derived 1; heights documented 3, inferred 0, unknown 199.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1354676070 historic=citywalls 155 m from ledger point
- origin moved 157 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":265,"medianInside":0,"medianOutside":4.7}
- 48 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.81439/10.33122) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q55181408 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 394 elements); data/traces/porta-a-mare-q55181408.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
