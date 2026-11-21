# Wemyss Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wemyss-castle-q7982215` |
| Coordinates | 56.14431, -3.081 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.14431/-3.081)) |
| Wikidata | [Q7982215](https://www.wikidata.org/wiki/Q7982215) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Fife |
| Designations | category A listed building |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `outline+walls`, 30 elements (outline 1, coastline 1, road 17, building 4, zone 3, wall 3, water 1).

Evidence: documented 0, mapped 30, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/303456268 historic=(none; chosen by its Wikidata id) Q7982215 8 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":119,"medianInside":6.6,"medianOutside":27.1}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.14431/-3.081) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q7982215 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 30 elements); data/traces/wemyss-castle-q7982215.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 30 elements; outline osm:way/303456268 historic=(none; chosen by its Wikidata id) Q7982215 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
