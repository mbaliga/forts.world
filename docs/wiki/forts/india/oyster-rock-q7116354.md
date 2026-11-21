# Oyster Rock

> India · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oyster-rock-q7116354` |
| Coordinates | 18.90222, 72.8275 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.90222/72.8275)) |
| Wikidata | [Q7116354](https://www.wikidata.org/wiki/Q7116354) (CC0) |
| Wikidata class | fort |
| Types | island\|fortification |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, zone 1, building 4).

Evidence: documented 0, mapped 6, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/932771750 historic=(none; chosen by its Wikidata id) Q7116354 32 m from ledger point
- origin moved 33 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.90222/72.8275) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; island\|fortification; sitelinks=3; wikidata:Q7116354; South Asia site missing from the programme (no programme row within 2 km sharing a name word) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 6 elements); data/traces/oyster-rock-q7116354.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 6 elements; outline osm:way/932771750 historic=(none; chosen by its Wikidata id) Q7116354 32 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
