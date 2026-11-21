# Tower of Santa Elena

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-santa-elena-q6150486` |
| Coordinates | 37.54931, -1.17299 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.54931/-1.17299)) |
| Wikidata | [Q6150486](https://www.wikidata.org/wiki/Q6150486) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Cartagena |
| Inception | 1578 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, road 6, coastline 1, building 1, zone 3, cliff 1, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/321089908 historic=ruins 42 m from ledger point
- origin moved 42 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":190,"medianInside":0,"medianOutside":41.5}
- 17 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.54931/-1.17299) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=3; wikidata:Q6150486 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 14 elements); data/traces/tower-of-santa-elena-q6150486.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
