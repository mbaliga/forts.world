# Garni Fortress

> Armenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `garni-fortress-q28657307` |
| Coordinates | 40.11299, 44.73002 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.11299/44.73002)) |
| Wikidata | [Q28657307](https://www.wikidata.org/wiki/Q28657307) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural property |
| Administrative area | Garni |
| Inception | -0300 |
| Designations | cultural heritage monument in Armenia |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 60 elements (outline 1, building 20, road 33, zone 3, waterway 1, cliff 1, water 1).

Evidence: documented 0, mapped 60, inferred 0, derived 0; heights documented 0, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/484222417 historic=archaeological_site 44 m from ledger point
- origin moved 46 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.11299/44.73002) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural property; sitelinks=4; wikidata:Q28657307 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 60 elements); data/traces/garni-fortress-q28657307.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/armenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
