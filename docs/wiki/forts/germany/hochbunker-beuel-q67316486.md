# Hochbunker Beuel

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hochbunker-beuel-q67316486` |
| Coordinates | 50.737, 7.12038 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.737/7.12038)) |
| Wikidata | [Q67316486](https://www.wikidata.org/wiki/Q67316486) (CC0) |
| Wikidata class | fortification |
| Types | high-rise bunker |
| Administrative area | Beuel |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 221 elements (outline 1, marker 10, road 85, building 327, zone 2, water 1, waterway 1, wall 1).

Evidence: documented 0, mapped 221, inferred 0, derived 0; heights documented 47, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/107443859 historic=(none; chosen by its Wikidata id) Q67316486 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 327 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.737/7.12038) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; high-rise bunker; sitelinks=1; wikidata:Q67316486 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 220 elements); data/traces/hochbunker-beuel-q67316486.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 221 elements; outline osm:way/107443859 historic=(none; chosen by its Wikidata id) Q67316486 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
