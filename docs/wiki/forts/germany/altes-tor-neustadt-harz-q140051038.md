# Altes Tor (Neustadt/Harz)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `altes-tor-neustadt-harz-q140051038` |
| Coordinates | 51.55975, 10.83437 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.55975/10.83437)) |
| Wikidata | [Q140051038](https://www.wikidata.org/wiki/Q140051038) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Harztor |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline-only`, 309 elements (outline 1, marker 2, road 76, waterway 5, building 220, water 1, zone 4).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 1, inferred 0, unknown 219.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/181130581 historic=city_gate Q140051038 1 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.55975/10.83437) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q140051038 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 309 elements); data/traces/altes-tor-neustadt-harz-q140051038.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 309 elements; outline osm:way/181130581 historic=city_gate Q140051038 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
