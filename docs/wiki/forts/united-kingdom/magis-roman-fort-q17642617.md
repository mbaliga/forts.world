# Magis Roman Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `magis-roman-fort-q17642617` |
| Coordinates | 54.6557, -3.54584 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.6557/-3.54584)) |
| Wikidata | [Q17642617](https://www.wikidata.org/wiki/Q17642617) (CC0) |
| Wikidata class | fortification |
| Types | castrum |
| Administrative area | Workington |
| Designations | part of UNESCO World Heritage Site\|scheduled monument |
| UNESCO WHC id | 430ter-030 |
| Wikipedia language editions | 2 |
| OSM `description` | Burrow Walls Roman Fort remains. |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, waterway 1, water 2, road 3, coastline 1).

Evidence: documented 0, mapped 8, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/825987861 historic=(none; chosen by its Wikidata id) Q17642617 20 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 21 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.6557/-3.54584) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum; sitelinks=2; wikidata:Q17642617 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 7 elements); data/traces/magis-roman-fort-q17642617.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 8 elements; outline osm:way/825987861 historic=(none; chosen by its Wikidata id) Q17642617 20 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
