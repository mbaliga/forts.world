# Bader gate

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bader-gate-q130467557` |
| Coordinates | 50.94041, 11.753 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.94041/11.753)) |
| Wikidata | [Q130467557](https://www.wikidata.org/wiki/Q130467557) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Bürgel |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 300 elements (outline 1, marker 1, road 89, zone 4, building 203, waterway 2).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 36, inferred 0, unknown 167.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/236867630 historic=(none; chosen by its Wikidata id) Q130467557 1 m from ledger point

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.94041/11.753) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q130467557 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 300 elements); data/traces/bader-gate-q130467557.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 300 elements; outline osm:way/236867630 historic=(none; chosen by its Wikidata id) Q130467557 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
