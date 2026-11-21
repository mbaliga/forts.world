# Hallesches Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hallesches-tor-q99527626` |
| Coordinates | 51.63329, 11.90118 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.63329/11.90118)) |
| Wikidata | [Q99527626](https://www.wikidata.org/wiki/Q99527626) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Wettin-Löbejün |
| Designations | heritage monument in Saxony-Anhalt |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 2, road 55, wall 3, zone 2, building 244, waterway 1).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 3, inferred 0, unknown 244.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/259797548 historic=city_gate Q99527626 1 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.63329/11.90118) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q99527626 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 308 elements); data/traces/hallesches-tor-q99527626.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 308 elements; outline osm:way/259797548 historic=city_gate Q99527626 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
