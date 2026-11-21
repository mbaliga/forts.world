# Porta Bolognese

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-bolognese-q136868437` |
| Coordinates | 44.11961, 11.37867 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.11961/11.37867)) |
| Wikidata | [Q136868437](https://www.wikidata.org/wiki/Q136868437) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Firenzuola |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 164 elements (outline 1, road 56, building 94, zone 4, waterway 2, wall 7).

Evidence: documented 0, mapped 164, inferred 0, derived 0; heights documented 0, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1452319824 historic=city_gate Q136868437 1 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.11961/11.37867) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q136868437 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 164 elements); data/traces/porta-bolognese-q136868437.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 164 elements; outline osm:way/1452319824 historic=city_gate Q136868437 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
