# Burg Niederzier

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-niederzier-q1013331` |
| Coordinates | 50.885, 6.46167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.885/6.46167)) |
| Wikidata | [Q1013331](https://www.wikidata.org/wiki/Q1013331) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Niederzier |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 189 elements (outline 1, road 64, zone 3, waterway 1, building 376).

Evidence: documented 0, mapped 189, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/388317505 historic=(none; chosen by its Wikidata id) Q1013331 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 376 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.885/6.46167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1013331 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 188 elements); data/traces/burg-niederzier-q1013331.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 189 elements; outline osm:way/388317505 historic=(none; chosen by its Wikidata id) Q1013331 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
