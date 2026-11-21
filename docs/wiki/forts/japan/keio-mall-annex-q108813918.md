# Keio Mall Annex

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `keio-mall-annex-q108813918` |
| Coordinates | 35.68841, 139.69841 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.68841/139.69841)) |
| Wikidata | [Q108813918](https://www.wikidata.org/wiki/Q108813918) (CC0) |
| Wikidata class | fortification |
| Types | underground city |
| Administrative area | Nishi-Shinjuku |
| Wikipedia language editions | 1 |
| OSM `website` | https://www.keiochika.co.jp/mall/ |

## What the model contains

Tier **T1**, status `outline+walls`, 274 elements (outline 1, marker 1, road 323, building 266, zone 1, wall 1).

Evidence: documented 0, mapped 274, inferred 0, derived 0; heights documented 72, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/670965129 historic=(none; chosen by its Wikidata id) Q108813918 72 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 266 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 323 mapped (trace size budget); minor lanes are not drawn
- origin moved 61 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.68841/139.69841) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; underground city; sitelinks=1; wikidata:Q108813918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 282 elements); data/traces/keio-mall-annex-q108813918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 274 elements; outline osm:way/670965129 historic=(none; chosen by its Wikidata id) Q108813918 72 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
