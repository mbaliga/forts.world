# Watchtower Xeraco

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `watchtower-xeraco-q3283058` |
| Coordinates | 39.04444, -0.20278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.04444/-0.20278)) |
| Wikidata | [Q3283058](https://www.wikidata.org/wiki/Q3283058) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Xeraco |
| Inception | 1600 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `description` | Torre que data meitat del segle XVI |

## What the model contains

Tier **T1**, status `outline-only`, 47 elements (outline 1, road 37, waterway 5, water 4).

Evidence: documented 0, mapped 47, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/514968251 historic=(none; chosen by its Wikidata id) Q3283058 9 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.04444/-0.20278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=3; wikidata:Q3283058 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 46 elements); data/traces/watchtower-xeraco-q3283058.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 47 elements; outline osm:way/514968251 historic=(none; chosen by its Wikidata id) Q3283058 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
