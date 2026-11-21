# Porta Sirena

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-sirena-q28000651` |
| Coordinates | 40.42162, 15.01349 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.42162/15.01349)) |
| Wikidata | [Q28000651](https://www.wikidata.org/wiki/Q28000651) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Capaccio Paestum |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, marker 1, road 65, building 48, waterway 1, zone 53, wall 30).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 1, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/146702646 historic=citywalls 99 m from ledger point
- origin moved 99 m from the ledger point to the centre of the mapped site
- 8008 DEM cells below -3 m (bathymetry) clamped to -3 m
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.42162/15.01349) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q28000651 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/porta-sirena-q28000651.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
