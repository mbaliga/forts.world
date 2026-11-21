# Stadttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-q1401579` |
| Coordinates | 49.7227, 9.99934 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.7227/9.99934)) |
| Wikidata | [Q1401579](https://www.wikidata.org/wiki/Q1401579) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Eibelstadt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 3, road 60, waterway 1, wall 8, building 241, zone 11).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 0, inferred 0, unknown 249.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1111706592 historic=(none; chosen by its Wikidata id) Q1401579 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 328 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.7227/9.99934) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q1401579 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 326 elements); data/traces/stadttor-q1401579.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 325 elements; outline osm:way/1111706592 historic=(none; chosen by its Wikidata id) Q1401579 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
