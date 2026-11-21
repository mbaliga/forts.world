# Peterskirche

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `peterskirche-q107544336` |
| Coordinates | 48.5751, 8.87881 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.5751/8.87881)) |
| Wikidata | [Q107544336](https://www.wikidata.org/wiki/Q107544336) (CC0) |
| Wikidata class | fort |
| Types | church building\|fortified church |
| Administrative area | Herrenberg |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 173 elements (outline 1, road 48, building 373, zone 2, waterway 1, wall 1).

Evidence: documented 0, mapped 173, inferred 0, derived 0; heights documented 2, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/34079563 historic=(none; chosen by its Wikidata id) Q107544336 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 373 mapped (trace size budget); the rest of the town is not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.5751/8.87881) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; church building\|fortified church; sitelinks=1; wikidata:Q107544336 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 171 elements); data/traces/peterskirche-q107544336.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 173 elements; outline osm:way/34079563 historic=(none; chosen by its Wikidata id) Q107544336 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
