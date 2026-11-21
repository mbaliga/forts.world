# Burg Esbeck

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-esbeck-q19276045` |
| Coordinates | 52.16123, 10.95905 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.16123/10.95905)) |
| Wikidata | [Q19276045](https://www.wikidata.org/wiki/Q19276045) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Schöningen |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 205 elements (outline 1, road 36, zone 5, building 158, retaining-wall 2, water 2, wall 1).

Evidence: documented 0, mapped 205, inferred 0, derived 0; heights documented 0, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237205513 historic=(none; chosen by its Wikidata id) Q19276045 46 m from ledger point
- origin moved 46 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.16123/10.95905) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q19276045 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 87 elements); data/traces/burg-esbeck-q19276045.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 205 elements; outline osm:way/237205513 historic=(none; chosen by its Wikidata id) Q19276045 46 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
