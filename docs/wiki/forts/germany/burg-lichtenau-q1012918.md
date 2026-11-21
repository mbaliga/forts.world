# Burg Lichtenau

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-lichtenau-q1012918` |
| Coordinates | 51.616, 8.89822 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.616/8.89822)) |
| Wikidata | [Q1012918](https://www.wikidata.org/wiki/Q1012918) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lichtenau |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 2, road 131, building 180, retaining-wall 7, wall 7, zone 5, waterway 1).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 36, inferred 0, unknown 158.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25412789 historic=(none; chosen by its Wikidata id) Q1012918 13 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.616/8.89822) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1012918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 337 elements); data/traces/burg-lichtenau-q1012918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 334 elements; outline osm:way/25412789 historic=(none; chosen by its Wikidata id) Q1012918 13 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
