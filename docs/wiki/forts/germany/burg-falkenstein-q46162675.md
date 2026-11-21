# Burg Falkenstein

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-falkenstein-q46162675` |
| Coordinates | 48.80581, 8.44014 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.80581/8.44014)) |
| Wikidata | [Q46162675](https://www.wikidata.org/wiki/Q46162675) (CC0) |
| Wikidata class | castle |
| Types | hill castle\|destroyed building or structure |
| Administrative area | Bad Herrenalb |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 103 elements (outline 1, waterway 4, road 67, building 26, zone 2, cliff 2, wall 1).

Evidence: documented 0, mapped 103, inferred 0, derived 0; heights documented 1, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/614951776 historic=(none; chosen by its Wikidata id) Q46162675 24 m from ledger point
- origin moved 24 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.80581/8.44014) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; hill castle\|destroyed building or structure; sitelinks=1; wikidata:Q46162675 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 100 elements); data/traces/burg-falkenstein-q46162675.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 103 elements; outline osm:way/614951776 historic=(none; chosen by its Wikidata id) Q46162675 24 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
