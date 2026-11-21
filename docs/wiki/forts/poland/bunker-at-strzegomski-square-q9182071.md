# Bunker at Strzegomski Square

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-at-strzegomski-square-q9182071` |
| Coordinates | 51.11333, 17.005 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.11333/17.005)) |
| Wikidata | [Q9182071](https://www.wikidata.org/wiki/Q9182071) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Administrative area | Wrocław |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 1, road 456, building 55, zone 92, wall 5).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 35, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101213796 historic=(none; chosen by its Wikidata id) Q9182071 12 m from ledger point
- roads capped: kept the 150 longest of 456 mapped (trace size budget); minor lanes are not drawn
- origin moved 12 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.11333/17.005) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=2; wikidata:Q9182071 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 309 elements); data/traces/bunker-at-strzegomski-square-q9182071.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 304 elements; outline osm:way/101213796 historic=(none; chosen by its Wikidata id) Q9182071 12 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
