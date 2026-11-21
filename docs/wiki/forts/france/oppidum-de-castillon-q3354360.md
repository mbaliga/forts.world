# oppidum de Castillon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oppidum-de-castillon-q3354360` |
| Coordinates | 43.46226, 4.98297 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.46226/4.98297)) |
| Wikidata | [Q3354360](https://www.wikidata.org/wiki/Q3354360) (CC0) |
| Wikidata class | fortification |
| Types | oppidum |
| Administrative area | Port-de-Bouc |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 49 elements (outline 1, marker 1, road 30, zone 2, water 1, building 3, wall 4, cliff 6).

Evidence: documented 0, mapped 49, inferred 0, derived 0; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/257057424 historic=archaeological_site 99 m from ledger point
- origin moved 98 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.46226/4.98297) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; oppidum; sitelinks=1; wikidata:Q3354360 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 49 elements); data/traces/oppidum-de-castillon-q3354360.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
