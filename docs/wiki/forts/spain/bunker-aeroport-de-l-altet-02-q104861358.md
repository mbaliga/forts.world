# Bunker, Aeroport de l'Altet 02

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-aeroport-de-l-altet-02-q104861358` |
| Coordinates | 38.2988, -0.57519 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.2988/-0.57519)) |
| Wikidata | [Q104861358](https://www.wikidata.org/wiki/Q104861358) (CC0) |
| Wikidata class | fortification |
| Types | bunker |
| Inception | 1936 |
| Designations | BIE |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, road 28, cliff 4).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/741715646 historic=(none; chosen by its Wikidata id) Q104861358 2 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.2988/-0.57519) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker; sitelinks=0; wikidata:Q104861358 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 33 elements); data/traces/bunker-aeroport-de-l-altet-02-q104861358.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 33 elements; outline osm:way/741715646 historic=(none; chosen by its Wikidata id) Q104861358 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
