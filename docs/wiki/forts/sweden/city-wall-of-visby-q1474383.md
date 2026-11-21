# City wall of Visby

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-wall-of-visby-q1474383` |
| Coordinates | 57.64028, 18.29444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.64028/18.29444)) |
| Wikidata | [Q1474383](https://www.wikidata.org/wiki/Q1474383) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Region Gotland |
| Inception | 1300 |
| Designations | monument in Fornminnesregistret |
| Wikipedia language editions | 21 |
| OSM `historic` | archaeological_site |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 8, road 394, building 804, zone 27, cliff 1, coastline 1, wall 28, water 2, waterway 1, retaining-wall 2).

Evidence: documented 0, mapped 342, inferred 0, derived 1; heights documented 12, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14377275 historic=archaeological_site Q1474383 184 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 804 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 394 mapped (trace size budget); minor lanes are not drawn
- origin moved 423 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":329,"medianInside":2.8,"medianOutside":32.3}
- 75 DEM cells below -3 m (bathymetry) clamped to -3 m
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.64028/18.29444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=21; wikidata:Q1474383 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/city-wall-of-visby-q1474383.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
