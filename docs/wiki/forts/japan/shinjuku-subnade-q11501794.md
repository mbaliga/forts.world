# Shinjuku Subnade

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shinjuku-subnade-q11501794` |
| Coordinates | 35.69348, 139.70201 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.69348/139.70201)) |
| Wikidata | [Q11501794](https://www.wikidata.org/wiki/Q11501794) (CC0) |
| Wikidata class | fortification |
| Types | shopping center\|underground city |
| Administrative area | Kabukichō |
| Inception | 1973 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 350 elements (outline 1, marker 5, road 1206, building 814, zone 15, wall 58, water 1).

Evidence: documented 0, mapped 350, inferred 0, derived 0; heights documented 136, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1413072463 historic=(none; chosen by its Wikidata id) Q11501794 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 814 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 1206 mapped (trace size budget); minor lanes are not drawn
- origin moved 38 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.69348/139.70201) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; shopping center\|underground city; sitelinks=2; wikidata:Q11501794 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 337 elements); data/traces/shinjuku-subnade-q11501794.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 350 elements; outline osm:way/1413072463 historic=(none; chosen by its Wikidata id) Q11501794 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
