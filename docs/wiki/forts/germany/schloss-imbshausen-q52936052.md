# Schloss Imbshausen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-imbshausen-q52936052` |
| Coordinates | 51.76031, 10.04067 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.76031/10.04067)) |
| Wikidata | [Q52936052](https://www.wikidata.org/wiki/Q52936052) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Northeim |
| Designations | architectural heritage monument in Lower Saxony |
| Wikipedia language editions | 2 |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 160 elements (outline 1, marker 1, road 24, zone 10, building 123, wall 1).

Evidence: documented 0, mapped 160, inferred 0, derived 0; heights documented 4, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/189460092 historic=(none; chosen by its Wikidata id) Q52936052 9 m from ledger point
- origin moved 12 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.76031/10.04067) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=2; wikidata:Q52936052 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 156 elements); data/traces/schloss-imbshausen-q52936052.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 160 elements; outline osm:way/189460092 historic=(none; chosen by its Wikidata id) Q52936052 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
