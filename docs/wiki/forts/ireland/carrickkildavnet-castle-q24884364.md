# Carrickkildavnet Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carrickkildavnet-castle-q24884364` |
| Coordinates | 53.88113, -9.94593 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.88113/-9.94593)) |
| Wikidata | [Q24884364](https://www.wikidata.org/wiki/Q24884364) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | County Mayo |
| Designations | national monument of Ireland |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | yes |
| OSM `website` | http://www.visitachill.com/en/kildavnet.html |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, road 15, building 14, coastline 2, zone 2, wall 2, water 2).

Evidence: documented 0, mapped 38, inferred 0, derived 2; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/773848427 historic=castle Q24884364 30 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":222,"medianInside":36,"medianOutside":17.1}
- sea-1: DEM check failed {"cells":400,"medianInside":18.3,"medianOutside":36}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.88113/-9.94593) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=6; wikidata:Q24884364 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/carrickkildavnet-castle-q24884364.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
