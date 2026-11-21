# Hyonmumun

> North Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hyonmumun-q5221032` |
| Coordinates | 39.04243, 125.76073 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.04243/125.76073)) |
| Wikidata | [Q5221032](https://www.wikidata.org/wiki/Q5221032) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Pyongyang |
| Inception | 0600 |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 58 elements (outline 1, marker 2, road 26, cliff 1, building 20, waterway 1, zone 6, wall 1).

Evidence: documented 0, mapped 58, inferred 0, derived 0; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/408251760 historic=city_gate Q5221032 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.04243/125.76073) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q5221032 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 57 elements); data/traces/hyonmumun-q5221032.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 58 elements; outline osm:way/408251760 historic=city_gate Q5221032 6 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/north-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
