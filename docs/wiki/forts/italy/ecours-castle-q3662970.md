# Écours Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ecours-castle-q3662970` |
| Coordinates | 45.74685, 7.07967 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.74685/7.07967)) |
| Wikidata | [Q3662970](https://www.wikidata.org/wiki/Q3662970) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | La Salle |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 41 elements (outline 1, building 27, road 11, waterway 1, zone 1).

Evidence: documented 0, mapped 41, inferred 0, derived 0; heights documented 0, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/149403482 historic=(none; chosen by its Wikidata id) Q3662970 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.74685/7.07967) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q3662970 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 41 elements); data/traces/ecours-castle-q3662970.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 41 elements; outline osm:way/149403482 historic=(none; chosen by its Wikidata id) Q3662970 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
