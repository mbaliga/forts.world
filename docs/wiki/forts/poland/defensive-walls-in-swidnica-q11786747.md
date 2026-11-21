# Defensive walls in Świdnica

> Poland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-swidnica-q11786747` |
| Coordinates | 50.84412, 16.48851 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.84412/16.48851)) |
| Wikidata | [Q11786747](https://www.wikidata.org/wiki/Q11786747) (CC0) |
| Wikidata class | fortification |
| Types | architectural heritage monument\|city walls |
| Administrative area | Świdnica |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `location-only`, 300 elements (marker 9, road 223, building 370, wall 1, zone 19, waterway 1).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 7, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19785026 historic=castle 347 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 370 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 223 mapped (trace size budget); minor lanes are not drawn
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.84412/16.48851) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; architectural heritage monument\|city walls; sitelinks=1; wikidata:Q11786747 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 300 elements); data/traces/defensive-walls-in-swidnica-q11786747.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
