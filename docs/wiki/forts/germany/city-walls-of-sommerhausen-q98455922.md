# City walls of Sommerhausen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-sommerhausen-q98455922` |
| Coordinates | 49.7052, 10.02425 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.7052/10.02425)) |
| Wikidata | [Q98455922](https://www.wikidata.org/wiki/Q98455922) (CC0) |
| Wikidata class | fortification |
| Types | enceinte |
| Administrative area | Sommerhausen |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 246 elements (outline 1, marker 2, road 98, wall 11, building 418, waterway 1, zone 13).

Evidence: documented 0, mapped 246, inferred 0, derived 0; heights documented 36, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/396662833 historic=castle Q41365455 106 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 418 mapped (trace size budget); the rest of the town is not drawn
- origin moved 106 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.7052/10.02425) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; enceinte; sitelinks=1; wikidata:Q98455922 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 246 elements); data/traces/city-walls-of-sommerhausen-q98455922.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
