# Wehrkirchturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wehrkirchturm-q116512651` |
| Coordinates | 51.25724, 9.68681 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.25724/9.68681)) |
| Wikidata | [Q116512651](https://www.wikidata.org/wiki/Q116512651) (CC0) |
| Wikidata class | fortification |
| Types | church tower\|defensive tower |
| Administrative area | Helsa |
| Designations | cultural heritage monument in Hesse |
| Wikipedia language editions | 0 |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 323 elements (outline 1, marker 1, road 82, waterway 2, building 235, zone 2).

Evidence: documented 0, mapped 323, inferred 0, derived 0; heights documented 2, inferred 0, unknown 233.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/268296729 historic=(none; chosen by its Wikidata id) Q116512651 2 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.25724/9.68681) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; church tower\|defensive tower; sitelinks=0; wikidata:Q116512651 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 322 elements); data/traces/wehrkirchturm-q116512651.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 323 elements; outline osm:way/268296729 historic=(none; chosen by its Wikidata id) Q116512651 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
