# Castell de Pallejà

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-palleja-q8342498` |
| Coordinates | 41.42175, 1.99673 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.42175/1.99673)) |
| Wikidata | [Q8342498](https://www.wikidata.org/wiki/Q8342498) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Pallejà |
| Designations | bien de interés cultural\|Cultural Asset of National Interest |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 119 elements (outline 1, road 90, zone 4, building 24).

Evidence: documented 0, mapped 119, inferred 0, derived 0; heights documented 0, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/123461698 historic=(none; chosen by its Wikidata id) Q8342498 5 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.42175/1.99673) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q8342498 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 121 elements); data/traces/castell-de-palleja-q8342498.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 119 elements; outline osm:way/123461698 historic=(none; chosen by its Wikidata id) Q8342498 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
