# Castello Visconteo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-visconteo-q113050299` |
| Coordinates | 45.67081, 8.81765 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.67081/8.81765)) |
| Wikidata | [Q113050299](https://www.wikidata.org/wiki/Q113050299) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Cassano Magnago |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, road 39, building 198, zone 11, wall 3).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 4, inferred 0, unknown 197.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/358849921 historic=(none; chosen by its Wikidata id) Q113050299 4 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.67081/8.81765) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q113050299 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 252 elements); data/traces/castello-visconteo-q113050299.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 252 elements; outline osm:way/358849921 historic=(none; chosen by its Wikidata id) Q113050299 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
