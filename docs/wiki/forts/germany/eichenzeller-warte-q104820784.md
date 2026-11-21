# Eichenzeller Warte

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eichenzeller-warte-q104820784` |
| Coordinates | 50.49606, 9.71508 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.49606/9.71508)) |
| Wikidata | [Q104820784](https://www.wikidata.org/wiki/Q104820784) (CC0) |
| Wikidata class | fortification |
| Types | observation tower\|medieval watchtower |
| Administrative area | Eichenzell |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 40 elements (outline 1, marker 2, road 21, building 6, wall 1, zone 9).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/772240712 historic=(none; chosen by its Wikidata id) Q104820784 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.49606/9.71508) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; observation tower\|medieval watchtower; sitelinks=2; wikidata:Q104820784 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 40 elements); data/traces/eichenzeller-warte-q104820784.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 40 elements; outline osm:way/772240712 historic=(none; chosen by its Wikidata id) Q104820784 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
