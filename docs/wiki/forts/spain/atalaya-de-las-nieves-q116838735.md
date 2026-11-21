# Atalaya de las Nieves

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `atalaya-de-las-nieves-q116838735` |
| Coordinates | 39.8523, -3.9602 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.8523/-3.9602)) |
| Wikidata | [Q116838735](https://www.wikidata.org/wiki/Q116838735) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Toledo |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, road 11, zone 1, waterway 2).

Evidence: documented 0, mapped 15, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/324537072 historic=(none; chosen by its Wikidata id) Q116838735 8 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.8523/-3.9602) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q116838735 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 15 elements); data/traces/atalaya-de-las-nieves-q116838735.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 15 elements; outline osm:way/324537072 historic=(none; chosen by its Wikidata id) Q116838735 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
