# Rocca Aldobrandesca

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-aldobrandesca-q3939438` |
| Coordinates | 42.55271, 11.13352 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.55271/11.13352)) |
| Wikidata | [Q3939438](https://www.wikidata.org/wiki/Q3939438) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Orbetello |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 234 elements (outline 1, marker 1, road 82, coastline 5, retaining-wall 1, wall 4, building 133, zone 2, cliff 2, water 3).

Evidence: documented 0, mapped 234, inferred 0, derived 3; heights documented 130, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/178000173 historic=castle Q3939438 1 m from ledger point
- sea-0: DEM check ok {"cells":191,"medianInside":0,"medianOutside":9}
- sea-1: DEM check failed {"cells":5,"medianInside":1.5,"medianOutside":0.2}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":0.2}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.55271/11.13352) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=3; wikidata:Q3939438 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 234 elements); data/traces/rocca-aldobrandesca-q3939438.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
