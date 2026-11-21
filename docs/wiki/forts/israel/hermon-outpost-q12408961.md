# Hermon outpost

> Israel · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hermon-outpost-q12408961` |
| Coordinates | 33.3045, 35.79756 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.3045/35.79756)) |
| Wikidata | [Q12408961](https://www.wikidata.org/wiki/Q12408961) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 25 elements (outline 1, road 4, zone 3, building 17).

Evidence: documented 0, mapped 25, inferred 0, derived 0; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/364408503 historic=(none; chosen by its Wikidata id) Q12408961 61 m from ledger point
- origin moved 49 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.3045/35.79756) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q12408961 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 24 elements); data/traces/hermon-outpost-q12408961.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 25 elements; outline osm:way/364408503 historic=(none; chosen by its Wikidata id) Q12408961 61 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/israel.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
