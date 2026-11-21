# Rocca di Pietracassia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-di-pietracassia-q3939486` |
| Coordinates | 43.43035, 10.6828 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.43035/10.6828)) |
| Wikidata | [Q3939486](https://www.wikidata.org/wiki/Q3939486) (CC0) |
| Wikidata class | fortification |
| Types | rocca |
| Administrative area | Lajatico |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 13 elements (outline 1, road 8, building 2, waterway 1).

Evidence: documented 0, mapped 13, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/164861760 historic=ruins Q3939486 41 m from ledger point
- origin moved 39 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.43035/10.6828) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rocca; sitelinks=3; wikidata:Q3939486 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 13 elements); data/traces/rocca-di-pietracassia-q3939486.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
