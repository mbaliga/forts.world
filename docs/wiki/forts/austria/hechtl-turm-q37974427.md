# Hechtl-Turm

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hechtl-turm-q37974427` |
| Coordinates | 47.27418, 15.52424 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.27418/15.52424)) |
| Wikidata | [Q37974427](https://www.wikidata.org/wiki/Q37974427) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Passail |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 0 |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 36 elements (outline 1, road 10, zone 11, building 9, waterway 5).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/368743292 historic=(none; chosen by its Wikidata id) Q37974427 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.27418/15.52424) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=0; wikidata:Q37974427 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 36 elements); data/traces/hechtl-turm-q37974427.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 36 elements; outline osm:way/368743292 historic=(none; chosen by its Wikidata id) Q37974427 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
