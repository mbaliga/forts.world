# Komenda Castle

> Slovenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `komenda-castle-q26218282` |
| Coordinates | 46.28028, 15.0775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.28028/15.0775)) |
| Wikidata | [Q26218282](https://www.wikidata.org/wiki/Q26218282) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Municipality of Polzela |
| Designations | monument of local significance |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 101 elements (outline 1, marker 1, road 43, waterway 1, building 37, zone 16, wall 2).

Evidence: documented 0, mapped 101, inferred 0, derived 0; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/326905990 historic=(none; chosen by its Wikidata id) Q26218282 381 m from ledger point
- origin moved 380 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.28028/15.0775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q26218282 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 94 elements); data/traces/komenda-castle-q26218282.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 101 elements; outline osm:way/326905990 historic=(none; chosen by its Wikidata id) Q26218282 381 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
