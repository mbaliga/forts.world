# Altes Boyneburger Schloss

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `altes-boyneburger-schloss-q439141` |
| Coordinates | 51.10744, 9.9705 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.10744/9.9705)) |
| Wikidata | [Q439141](https://www.wikidata.org/wiki/Q439141) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Sontra |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 1, road 41, waterway 7, building 256, zone 8, wall 1).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 0, inferred 0, unknown 257.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/201795709 historic=(none; chosen by its Wikidata id) Q439141 24 m from ledger point
- origin moved 22 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.10744/9.9705) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q439141 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 323 elements); data/traces/altes-boyneburger-schloss-q439141.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 315 elements; outline osm:way/201795709 historic=(none; chosen by its Wikidata id) Q439141 24 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
