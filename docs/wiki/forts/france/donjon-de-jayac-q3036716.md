# Donjon de Jayac

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `donjon-de-jayac-q3036716` |
| Coordinates | 45.0308, 1.3449 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.0308/1.3449)) |
| Wikidata | [Q3036716](https://www.wikidata.org/wiki/Q3036716) (CC0) |
| Wikidata class | fortification |
| Types | keep |
| Administrative area | Jayac |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 71 elements (outline 1, zone 4, road 22, building 44).

Evidence: documented 0, mapped 71, inferred 0, derived 0; heights documented 0, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/484588493 historic=(none; chosen by its Wikidata id) Q3036716 51 m from ledger point
- origin moved 51 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.0308/1.3449) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; keep; sitelinks=2; wikidata:Q3036716 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 69 elements); data/traces/donjon-de-jayac-q3036716.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 71 elements; outline osm:way/484588493 historic=(none; chosen by its Wikidata id) Q3036716 51 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
