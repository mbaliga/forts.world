# AW San Carlo

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aw-san-carlo-q713008` |
| Coordinates | 46.5625, 8.555 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.5625/8.555)) |
| Wikidata | [Q713008](https://www.wikidata.org/wiki/Q713008) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Canton of Ticino |
| Wikipedia language editions | 2 |
| OSM `website` | https://www.claustra.ch/ |

## What the model contains

Tier **T1**, status `outline-only`, 40 elements (outline 1, marker 1, road 26, waterway 4, building 5, water 1, zone 2).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/238237842 historic=(none; chosen by its Wikidata id) Q713008 114 m from ledger point
- origin moved 111 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.5625/8.555) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q713008 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 38 elements); data/traces/aw-san-carlo-q713008.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 40 elements; outline osm:way/238237842 historic=(none; chosen by its Wikidata id) Q713008 114 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
