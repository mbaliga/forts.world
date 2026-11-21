# Castello dell'Asinara

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-dell-asinara-q38211573` |
| Coordinates | 40.99987, 8.23499 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.99987/8.23499)) |
| Wikidata | [Q38211573](https://www.wikidata.org/wiki/Q38211573) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Porto Torres |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `description` | Rovine del castello medievale |

## What the model contains

Tier **T1**, status `outline-only`, 4 elements (outline 1, marker 1, road 2).

Evidence: documented 0, mapped 4, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/421663721 historic=(none; chosen by its Wikidata id) Q38211573 8 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.99987/8.23499) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q38211573 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 4 elements); data/traces/castello-dell-asinara-q38211573.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 4 elements; outline osm:way/421663721 historic=(none; chosen by its Wikidata id) Q38211573 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
