# Fortaleza de Segura

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-segura-q5049827` |
| Coordinates | 39.82656, -6.98001 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.82656/-6.98001)) |
| Wikidata | [Q5049827](https://www.wikidata.org/wiki/Q5049827) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|cultural heritage |
| Administrative area | Zebreira e Segura |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline+walls`, 232 elements (outline 1, marker 1, road 36, building 429, waterway 1, wall 73).

Evidence: documented 0, mapped 232, inferred 0, derived 0; heights documented 0, inferred 0, unknown 193.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/913988523 historic=tower Q5049827 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 429 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.82656/-6.98001) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|cultural heritage; sitelinks=3; wikidata:Q5049827 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 233 elements); data/traces/fortaleza-de-segura-q5049827.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 232 elements; outline osm:way/913988523 historic=tower Q5049827 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
