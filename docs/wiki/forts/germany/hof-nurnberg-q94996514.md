# Hof Nürnberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hof-nurnberg-q94996514` |
| Coordinates | 50.06162, 8.16361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.06162/8.16361)) |
| Wikidata | [Q94996514](https://www.wikidata.org/wiki/Q94996514) (CC0) |
| Wikidata class | fort |
| Types | fortified farm |
| Administrative area | Wiesbaden |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 2 |
| OSM `website` | http://www.hof-nuernberg.de/ |

## What the model contains

Tier **T1**, status `outline-only`, 46 elements (outline 1, road 32, building 10, zone 3).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29407367 historic=(none; chosen by its Wikidata id) Q94996514 28 m from ledger point
- origin moved 30 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.06162/8.16361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified farm; sitelinks=2; wikidata:Q94996514 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 45 elements); data/traces/hof-nurnberg-q94996514.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 46 elements; outline osm:way/29407367 historic=(none; chosen by its Wikidata id) Q94996514 28 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
