# Rotermundstraße bunker

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rotermundstra-e-bunker-q107486212` |
| Coordinates | 52.39997, 9.73313 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.39997/9.73313)) |
| Wikidata | [Q107486212](https://www.wikidata.org/wiki/Q107486212) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Vahrenwald-List |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, road 224, zone 1, building 330, wall 7).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 46, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/184295995 historic=(none; chosen by its Wikidata id) Q107486212 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 330 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 224 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.39997/9.73313) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=1; wikidata:Q107486212 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 278 elements); data/traces/rotermundstra-e-bunker-q107486212.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 279 elements; outline osm:way/184295995 historic=(none; chosen by its Wikidata id) Q107486212 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
