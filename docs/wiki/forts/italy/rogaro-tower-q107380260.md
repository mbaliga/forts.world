# Rogaro Tower

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rogaro-tower-q107380260` |
| Coordinates | 45.98509, 9.22513 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.98509/9.22513)) |
| Wikidata | [Q107380260](https://www.wikidata.org/wiki/Q107380260) (CC0) |
| Wikidata class | castle |
| Types | tower\|castle |
| Administrative area | Tremezzina |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 93 elements (outline 1, road 39, waterway 2, building 51).

Evidence: documented 0, mapped 93, inferred 0, derived 0; heights documented 2, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/349332802 historic=(none; chosen by its Wikidata id) Q107380260 6 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.98509/9.22513) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; tower\|castle; sitelinks=1; wikidata:Q107380260 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 92 elements); data/traces/rogaro-tower-q107380260.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 93 elements; outline osm:way/349332802 historic=(none; chosen by its Wikidata id) Q107380260 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
