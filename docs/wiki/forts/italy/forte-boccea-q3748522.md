# Forte Boccea

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-boccea-q3748522` |
| Coordinates | 41.9021, 12.41736 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.9021/12.41736)) |
| Wikidata | [Q3748522](https://www.wikidata.org/wiki/Q3748522) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Rome |
| Inception | 1877 |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 232 elements (outline 1, marker 1, road 105, building 326, zone 5).

Evidence: documented 0, mapped 232, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/219591935 historic=(none; chosen by its Wikidata id) Q3748522 63 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 326 mapped (trace size budget); the rest of the town is not drawn
- origin moved 67 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.9021/12.41736) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q3748522 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 152 elements); data/traces/forte-boccea-q3748522.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 232 elements; outline osm:way/219591935 historic=(none; chosen by its Wikidata id) Q3748522 63 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
